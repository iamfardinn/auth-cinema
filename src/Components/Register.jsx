import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {

  const authInfo=useContext(AuthContext);
  console.log(authInfo);

  console.log(authInfo);



    const handleRegister =e=>{

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
const password =e.target.password.value;
console.log(name,email, password);


    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-4xl font-bold">Register now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
             <form onSubmit={handleRegister} >
      
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name ="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name" name ="email" className="input input-bordered" required />
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
                <button className="btn btn-primary">Register</button>
              </div>
      
      
             </form>
             <p> Already Have an account? Please<Link to="/login">
            <button className="btn btn-link">Login</button>
            </Link> </p>
            </form>
           
          </div>
        </div>
      </div>
    );
};

export default Register;