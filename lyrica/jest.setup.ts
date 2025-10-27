import "@testing-library/jest-native/extend-expect";

jest.mock("expo-splash-screen", () => ({
  setOptions: jest.fn(),
  preventAutoHideAsync: jest.fn().mockResolvedValue(undefined),
  hide: jest.fn(),
}));

// const mockDb = { __tag: "db" } as any;
// const mockCollectionRef = { __tag: "collectionRef" } as any;

// const collectionSpy = jest.fn(() => mockCollectionRef);
// const getDocsSpy = jest.fn();

// jest.mock("@react-native-firebase/firestore", () => {
//   const m = {
//     __esModule: true,
//     default: jest.fn(() => mockDb), // firestore()
//     collection: jest.fn((...args: any[]) => collectionSpy(...(args as []))),
//     getDocs: jest.fn((...args: any[]) => getDocsSpy(...(args as []))),
//   };
//   return m;
// });

// Timer finti di default (utile con animazioni/effects)
jest.useFakeTimers();

// Se usi Dimensions / Platform.select in modo avanzato, puoi forzare layout:
// jest.spyOn(require('react-native'), 'Dimensions').mockReturnValue({ get: () => ({ width: 390, height: 844, scale: 3, fontScale: 1 }) } as any);
