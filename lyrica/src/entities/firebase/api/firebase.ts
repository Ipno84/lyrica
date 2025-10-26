import firebase, { type ReactNativeFirebase } from "@react-native-firebase/app";
import { credentials } from "./../model";

class FirebaseClass {
  private static _instance: FirebaseClass;

  public static get instance(): FirebaseClass {
    if (!FirebaseClass._instance) {
      FirebaseClass._instance = new FirebaseClass();
    }
    return FirebaseClass._instance;
  }

  public async initialize(): Promise<ReactNativeFirebase.FirebaseApp> {
    return await firebase.initializeApp(credentials);
  }
}

export const Firebase = FirebaseClass.instance;
