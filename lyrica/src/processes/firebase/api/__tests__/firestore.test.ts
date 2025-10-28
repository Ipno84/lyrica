import type { Song } from "@/entities/song";

jest.mock("@react-native-firebase/firestore", () => {
  const mockDb = { __tag: "db" };
  const firestoreDefault = jest.fn(() => mockDb); // default export: firestore()

  const collection = jest.fn(() => ({ __tag: "collectionRef" }));
  const getDocs = jest.fn();

  // alcuni transpile risolvono i named come proprietà del default (_firestore.collection)
  (firestoreDefault as any).collection = collection;
  (firestoreDefault as any).getDocs = getDocs;

  return {
    __esModule: true,
    default: firestoreDefault,
    collection,
    getDocs,
  };
});

// Ora importiamo l'oggetto sotto test
import firestore, {
  collection,
  getDocs,
} from "@react-native-firebase/firestore";
import { FirebaseTableNames } from "../../model";
import { Firestore } from "../firestore"; // aggiorna il path se diverso

describe("FirestoreClass", () => {
  const loadSUT = async () => {
    jest.resetModules();

    const firestoreMod = await import("@react-native-firebase/firestore");
    const { FirebaseTableNames } = await import("../../model");
    const { Firestore } = await import("../firestore");

    return { Firestore, firestoreMod, FirebaseTableNames };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("è un singleton", async () => {
    const { Firestore } = await loadSUT();

    const instanceA = Firestore;
    const instanceB = Firestore;

    expect(instanceA).toBe(instanceB);
  });

  it('crea la collection "songs" con il db ottenuto da firestore()', async () => {
    const { Firestore, firestoreMod, FirebaseTableNames } = await loadSUT();

    Firestore.db;

    const firestore = firestoreMod.default as unknown as jest.Mock;
    const collection = firestoreMod.collection as jest.Mock;

    expect(firestore).toHaveBeenCalled(); // il costruttore invoca firestore()

    const usedDb = firestore.mock.results[0]?.value;
    expect(collection).toHaveBeenCalledWith(usedDb, FirebaseTableNames.SONGS);
  });

  it("getSongs chiama getDocs sulla collection e mappa i documenti", async () => {
    const { Firestore, firestoreMod } = await loadSUT();

    const collection = firestoreMod.collection as jest.Mock;
    const getDocs = firestoreMod.getDocs as jest.Mock;

    // mock della risposta: docs con data() funzione
    getDocs.mockResolvedValueOnce({
      docs: [
        {
          id: "a1",
          data: () => ({ title: "Song A", verses: ["Hello"], priority: 0 }),
        },
        {
          id: "b2",
          data: () => ({ title: "Song B", verses: ["World"], priority: 1 }),
        },
      ],
    });

    const songs = await Firestore.getSongs();

    const usedCollectionRef = collection.mock.results[0]?.value;
    expect(getDocs).toHaveBeenCalledWith(usedCollectionRef);

    // Assert
    expect(songs).toEqual<Song[]>([
      { id: "a1", title: "Song A", verses: ["Hello"], priority: 0 },
      { id: "b2", title: "Song B", verses: ["World"], priority: 1 },
    ]);
  });
});
