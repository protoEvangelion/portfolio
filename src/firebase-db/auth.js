import { auth, provider } from './';

auth.onAuthStateChanged(function(user) {
	if (user) {
		const displayName = user.displayName
		const email = user.email
		const photo = user.photoURL
		console.log('User is signed in', { displayName, email, photo })
	} else {
		console.log('No user signed in')
	}
})

export const doSignIn = () =>
	auth
		.signInWithRedirect(provider)
		.then(result => {
			const user = result.user
			console.log('got user from google sign in ====>', user)
		})
		.catch(error => {
			console.log('error during google sign in', error)
		})

export const doSignOut = () =>
	auth
		.signOut()
		.then(() => console.log('Signed out successfully'))
		.catch(err => console.log('Error signing out', err))
