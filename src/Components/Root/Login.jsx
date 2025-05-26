import Lottie from 'lottie-react';
import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import login from '../../lottie/login.json'
import { AuthContext } from '../Firebase/AuthProvider';

const Login = () => {

    const {LogIn}=use(AuthContext)
    const navigate =useNavigate()
    const location =useLocation()
    const from = location.state || "/"

    const handleLogin=e=>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email, password)

        // Login
        LogIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(from)
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="hero  min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">

        {/* Lottie Animation */}
                <div className="w-[300px] md:w-[400px]">
                    <Lottie
                        animationData={login}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>


        <div className="card md:w-[500px] w-[350px] border border-green-200 bg-gray-200 shrink-0 shadow-md">
        <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">

        <label className="label">Email</label>
        <input type="email" className="input w-full" name='email' placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input w-full" name='password' placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-green-500 text-white mt-4">Login</button>

          <Link to="/signup">Don't have an account? <span className='text-red-500 underline'>Sign In</span></Link>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;