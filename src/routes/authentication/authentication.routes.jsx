import SignUpForm from '../../components/sign-up-form/sign-up-form.components.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.components.jsx';
import './authentication.styles.scss'


const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication