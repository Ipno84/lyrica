import type { Song } from "@/entities/song";
import firestore, {
  collection,
  type FirebaseFirestoreTypes,
  getDocs,
} from "@react-native-firebase/firestore";
import { FirebaseTableNames } from "../model";

class FirestoreClass {
  private static _instance: FirestoreClass;
  private _db: FirebaseFirestoreTypes.Module;
  private songsCollection: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

  constructor() {
    this._db = firestore();
    this.songsCollection = collection(this.db, FirebaseTableNames.SONGS);
  }

  public static get instance(): FirestoreClass {
    if (!FirestoreClass._instance)
      FirestoreClass._instance = new FirestoreClass();
    return FirestoreClass._instance;
  }

  public get db(): FirebaseFirestoreTypes.Module {
    return this._db;
  }

  public async getSongs() {
    const snapshot = await getDocs<Song[], FirebaseFirestoreTypes.DocumentData>(
      this.songsCollection
    );

    return snapshot.docs.map(
      (
        doc: FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>
      ) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
  }
}

export const Firestore = FirestoreClass.instance;
