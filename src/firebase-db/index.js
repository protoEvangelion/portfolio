import * as firebase from 'firebase'
import FIREBASE_CONFIG from '../../appConfig.json'

if (!firebase.apps.length) {
	firebase.initializeApp(FIREBASE_CONFIG)
}

const auth = firebase.auth()
const db = firebase.database()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
