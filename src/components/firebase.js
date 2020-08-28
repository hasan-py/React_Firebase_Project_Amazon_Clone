import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDCEHbXNZR5mKj-f0dFy_EaKuydYLKNSsw",
	authDomain: "react-ecommerce-fe66a.firebaseapp.com",
	databaseURL: "https://react-ecommerce-fe66a.firebaseio.com",
	projectId: "react-ecommerce-fe66a",
	storageBucket: "react-ecommerce-fe66a.appspot.com",
	messagingSenderId: "472009251421",
	appId: "1:472009251421:web:730ea26b777bdfd0bd4bb4",
	measurementId: "G-TE737NETV1"
})

const auth = firebase.auth();

export { auth };