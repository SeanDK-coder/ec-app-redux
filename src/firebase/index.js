import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig); //가져온 설정으로 firebase설정 구성. 쓸수있게 된다!

export const auth = firebase.auth(); //일일이 쓰기 귀찮으니 상수화
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const FirebaseTimestamp = firebase.firestore.Timestamp; //이 데이터가 만들어진 시간이 몇시 몇분 몇초라는 걸 습득 가능.
