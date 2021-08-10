
import { app } from './Firebase.js'

let user = document.querySelector('#name')
let email = document.querySelector('#email');
let phonenumber = document.querySelector('#phone');
let password = document.querySelector('#password');
let sub = document.querySelector('#submit');

const auth = app.auth()
const db = app.storage()

const signUpClient = (e) => {
    e.preventDefault()
    window.alert('working')
    // try {
    //     const { user, email, phonenumber, password} = info
    //     db.collection("user").add({
    //        user, email, phonenumber, password, status: 'Client'
    //     })
    //     .then((docRef) => {

    //         firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then((userCredential) => {
    //           // Signed in 
    //           var user = userCredential.user;
    //           // ...
    //         })
    //     })
    // }
    // catch(err){
    //      window.alert(err)
    // }

}
sub.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
})