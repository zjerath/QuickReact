import '../styles/Banner.css'
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const SignInButton = () => (
    <button className="my-2 mx-5 btn text-white signinbutton" style={{border: '1px solid white', borderRadius: '2rem'}} onClick={signInWithGoogle}>Sign in</button>
);
  
const SignOutButton = () => (
    <button className="my-2 mx-5 btn text-white" style={{border: '1px solid white', borderRadius: '2rem'}} onClick={signOut}>Sign out</button>
);
  
const AuthButton = () => {
    const [user] = useAuthState();
    return user ? <SignOutButton /> : <SignInButton />;
};

const Banner = ({title}) => {
    return (
        <div className='d-flex justify-content-between bg-dark' style={{height: '5rem', background: 'linear-gradient(#3cacb6, #8ccead)', alignItems: 'center'}}>
            <h2 className='p-3 mx-5 text-center text-white'>{title}</h2>
            <AuthButton />
        </div>
    )
};

export default Banner;