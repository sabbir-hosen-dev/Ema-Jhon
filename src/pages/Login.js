import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { auth, facebookProvider, googleProvider } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import useLoginFormik from "../formik/Formik";
import { useShopContext } from "../Hook/useShopContext";
import { useNavigate } from "react-router";


function Login() {
  const { setUser } = useShopContext();
  const [signUp,setSignUp ] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (values) => {
    const {email,password,name} = values
    if(signUp){
      createUserWithEmailAndPassword(auth,email,password)
      .then(res => {
        const user = auth.currentUser;
        updateProfile(user,{
          displayName: name
        })
        setUser(true)
        navigate(-1)
      })
      .catch(err => console.log(err.message))
    }else{
      signInWithEmailAndPassword(auth,email,password)
      .then(res => {
        setUser(true)
        navigate(-1)
      })
      .catch(err => console.log(err.message))
    }
  };
  const formik = useLoginFormik(handleSubmit);

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        navigate(-1)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signInFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        setUser(res.user)
        navigate(-1)
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login-wrap">
      <h2>{signUp ? "Sign UP" : "Login"}</h2>
      <form className="flex-col" onSubmit={formik.handleSubmit}>
        {signUp ? (
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        ) : (
          " "
        )}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button className="login-btn" type="submit">
          {signUp ? "Sign Up" : "Login"}
        </button>
      </form>
      {formik.touched.password && formik.errors.password && (
        <p className="faild">{formik.errors.password}</p>
      )}
      {formik.touched.email && formik.errors.email && (
        <p className="faild">{formik.errors.email}</p>
      )}
      {<p className="susses">Login Susses</p>}
      {<p className="faild">Login Faild</p>}
      <div className="flex-col">
        <button className="sign-in-btn" onClick={googleSignIn}>
          <FcGoogle className="google" /> Sign in with Google
        </button>
        <button className="sign-in-btn" onClick={signInFacebook}>
          <FaFacebookF className="facebook" /> Sign In with FaceBook
        </button>
      </div>
      <div className="sign-up">
        <p>
          You have don't acout{" "}
          <span className="create" onClick={() => setSignUp(!signUp)}>
            create
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
