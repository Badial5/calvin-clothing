import { useState } from "react"
//import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithGooglePopup,

signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"

import './sign-in-form.styles.scss'

import Button from "../button/button.component"



const defaultFormFields = {
    email: '',
    password: '',

}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {  email, password} = formFields

    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const signInWithGoogle = async () => {
     await signInWithGooglePopup();
        
         //create user document has been moved to context
    }

    

    const handleSubmit = async (event) => {

        //prevent form default behaviour that is
        //loading anything the form is click
        event.preventDefault();


        try{

             await signInAuthUserWithEmailAndPassword(email, password)
            
           

            //clear the fields after use submit the form
            resetFormFields();

        } catch(error){

            switch(error.code){
                case "auth/wrong-password":
                    alert('Incorrect Password for email')
                    break;

                case "auth/user-not-found":
                    alert("No User associated with this email")
                    break;

                default:
                    console.log(error)
        }
          
    }
 }

    
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container" >
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} >
                


                <FormInput label='Email'
                type='email' required
                onChange={handleChange} 
                name="email" 
                value={email}/>

                <FormInput label='Password'
                type='password' required
                onChange={handleChange} 
                name="password" 
                value={password}/>

            <div className="buttons-container" >
                <Button  type="submit" >Sign In</Button>
                <Button type='button' buttonType='google'  onClick={signInWithGoogle} >
                    Google sign in
                </Button>
            </div>

            </form>

        </div>
    )
}

export default SignInForm