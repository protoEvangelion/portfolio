import { FIREBASE_CONFIG } from 'appConfig';
import * as firebase from 'firebase';

if (!firebase.apps.length) {
	firebase.initializeApp(FIREBASE_CONFIG)
}

const auth = firebase.auth()
const db = firebase.database()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
