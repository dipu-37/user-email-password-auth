import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const handleRegister = e=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password)
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      });
}
const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="card w-full max-w-sm p-6 bg-white shadow-md rounded-md">
                <h2 className="text-3xl mb-8 text-center">Please Register</h2>
                <form action="" onSubmit={handleRegister} >
                    {/* <input className="mb-4 w-full  py-2 px-4" type="text" name="name" placeholder="Your Name" id="" required />
                    <br /> */}
                    <input className="mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="" required />
                    <br />
                    <input className="mb-4 w-full  py-2 px-4" type="password" name="password" placeholder="password " id="" required />
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                </form>
            </div>

        </div>
    );
};

export default Register;