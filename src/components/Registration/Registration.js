import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FaGoogle   } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';
import './Registration.css'



const Registration = () => {
    const emailRef = useRef('');
    const confirmemailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    console.log(user);

    let errorElement;


    const handleSignUp = async  (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmEmail = confirmemailRef.current.value;
        const name = event.target.name.value;

        // console.log(email, password, confirmEmail, name)

        if(email == confirmEmail){
            createUserWithEmailAndPassword(email, password);
            await updateProfile({displayName: name})
        }
        else{
            errorElement = <p className='text-danger'>Email Dont Matched</p>;
            console.log('Email Dont Matched');
            toast("Email didn't Match!!")
        }
    }
    useEffect(()=>{
        const errors = googleError || error ;
        if(errors){
            console.log(errors);
            console.log(errors?.code);
            // toast(error?.code);
            toast.error(errors?.code, {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
        }
    },[googleError, error])


    return (
        <div style={{marginTop:'150px'}} className='registration-container'>
            <h5 className='text-center header'>Create Account</h5>

            <button onClick={()=>signInWithGoogle()} className='w-50 btn d-block mx-auto btnStyle googleStyle style' >
                CONTINUE WITH GOOGLE
            </button>

            <div className='container w-50 mx-auto'>
                <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-text'>Full Name</Form.Label>

                        <Form.Control  className='formbox' name='name' type="text" placeholder="Enter a profile name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label-text'>What's your email?</Form.Label>
                        <Form.Control required ref={emailRef} className='formbox' type="required" placeholder="Enter Your email." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label-text'>Confirm your email</Form.Label>
                        <Form.Control required ref={confirmemailRef} className='formbox' type="email" placeholder="Enter Your email again." />
                    </Form.Group>

                    {errorElement}
                    <Toaster />
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-text'>Create a password</Form.Label>
                        <Form.Control required ref={passwordRef} className='formbox' type="password" placeholder="min 6 characters"></Form.Control>
                    </Form.Group>

                    


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" label="Accept Terms & condition" />

                        <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Agree to Terms and Conditions</label>
                    </Form.Group>

                    <button disabled={!agree} type='submit' className='btn d-block disable mx-auto btnStyle login '>
                        Sign Up
                    </button>
                </Form>

                <div className='mt-5 mb-5'>
                    <hr />


                    <p className='text-center'>Have an account?
                        <button onClick={()=>navigate('/login')} className='btn btn-link  mx-auto'>
                            log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;