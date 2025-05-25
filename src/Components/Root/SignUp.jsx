import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import register from "../../lottie/register.json";

const SignUp = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                {/* Lottie Animation */}
                <div className="w-[300px] md:w-[400px]">
                    <Lottie
                        animationData={register}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>

                {/* Form Section */}
                <div className="card md:w-[500px] w-[350px] border border-green-200 bg-gray-200 shrink-0 shadow-md">
                    <div className="card-body">
                        <form className="fieldset">

                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input w-full"
                                name="email"
                                placeholder="Email"
                            />

                            <label className="label">Password</label>
                            <input
                                type="password"
                                className="input w-full"
                                name="password"
                                placeholder="Password"
                            />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn bg-green-500 text-white mt-4">Sign Up</button>

                            <Link to="/login" className="mt-3 block">
                                Do you have an account? <span className="text-red-500 underline">Login</span>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
