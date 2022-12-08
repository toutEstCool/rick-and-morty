import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDKdjtEolGlRmPKDAuexMIAWwY1YBn6bUo',
	authDomain: 'rickandmorty-app-b4033.firebaseapp.com',
	projectId: 'rickandmorty-app-b4033',
	storageBucket: 'rickandmorty-app-b4033.appspot.com',
	messagingSenderId: '378251069442',
	appId: '1:378251069442:web:0bc0c304d7644bd7e33f1b',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
