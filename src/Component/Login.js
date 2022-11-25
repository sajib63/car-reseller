import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../Assets/animation/login.gif'
import { AuthContext } from '../UserContex/UseContext';
import toast from 'react-hot-toast';

const Login = () => {
    const {loginUser,googleLogin}=useContext(AuthContext)

    const loginHandle=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        loginUser(email, password)
        .then(result=>{
            console.log(result.user);
           toast.success('successfully login user')
           form.reset()
        })
        .catch(error=>{
            console.error(error);
        })


    }

    const googleLoginUser=()=>{
        googleLogin()
        .then(()=>{
            toast.success('successfully created user')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={loginHandle} className="card-body">
                <h1 className="text-2xl text-center text-primary font-semibold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Login" />
              </div>
            </form>

           <div className=' text-center'>
           <button onClick={googleLoginUser} className='btn btn-primary my-2 w-80'>Google LogIn</button>
           
           <p className='my-2'>New To Car-Reseller <Link to='/register' className='text-primary'>Register</Link></p>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Login;