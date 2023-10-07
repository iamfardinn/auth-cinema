import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Result } from "postcss";


const Login = () => {

  const {signInUser} =useContext(AuthContext);

    const handleLogin =e=>{

        e.preventDefault();
        const email = e.target.email.value;
const password =e.target.password.value;
console.log(email, password);

signInUser(email,password)
.then( result =>{
  console.log(result);
})
.catch(error =>{
  console.log(error)
})

    }
    return (
        
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-4xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
       <form onSubmit={handleLogin} >

       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name ="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password"name ="password"  className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>


       </form>
       <p> New here? Please<Link to="/register">
      <button className="btn btn-link">Register</button>
      </Link> </p>
      </form>
     
    </div>
  </div>
</div>
        
    );
};

export default Login;