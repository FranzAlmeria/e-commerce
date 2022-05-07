import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils.js'
import SignUpForm from '../../components/sign-up/sign-up-form.components.jsx';


const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef);

  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In with google popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn