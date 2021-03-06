import { useState } from "react"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase.utils'
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields


  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password for Email')
          break;
        case 'auth/user-not-found':
          alert('No user associated with this Email')
        default:
          console.log(error)
      }
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Email'
          type="email"
          onChange={handleChange}
          name='email'
          value={email}
          required
        />

        <FormInput
          label='Password'
          type="password"
          onChange={handleChange}
          name='password'
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit" >Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}> Google Sign In</Button>
        </div>

      </form>
    </div>
  )
}

export default SignInForm