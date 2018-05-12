import { auth, provider } from './'

auth.onAuthStateChanged(user => {
	if (user) {
		const { displayName, email, photo } = user
		console.log('User is signed in', { displayName, email, photo })
	} else {
		console.log('No user signed in')
	}
})

export const doSignIn = () =>
	auth
		.signInWithRedirect(provider)
		.then(result => {
			console.log('got user from google sign in ====>', result.user)
		})
		.catch(error => {
			console.log('error during google sign in', error)
		})

export const doSignOut = () =>
	auth
		.signOut()
		.then(() => console.log('Signed out successfully'))
		.catch(err => console.log('Error signing out', err))
