import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import axios from "axios"
import React, { useState } from "react";
const Register = () => {

    const options = [
        { label: 'IT Engineer', value: 'IT Engineer' },
        { label: 'Teacher', value: 'Teacher' },
        { label: 'Manager', value: 'Manager' },
    ];

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [gender, setgender] = useState("");

    const [profession, setProfession] = useState("");
    const [password, setpassword] = useState("");
    const [c_password, setc_password] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("fname : " + fname)
        console.log("lname : " + lname)
        console.log("email : " + email)
        console.log("gender : " + gender)
        console.log("Profession : " + profession)
        console.log("password : " + password)
        console.log("c_password : " + c_password)

        const userObject = {
            fname: fname,
            lname: lname,
            email: email,
            gender: gender,
            profession: profession,
            password: password
        };

        if (password === c_password) {
            axios.post('http://localhost:4000/signup', userObject)
                .then(res => console.log(res.data));
            alert("Successfully Registered, Please login now.");
            window.location.href = "/login";
            // clean fields
            setfname("");
            setlname("");
            setemail("");
            setProfession("");
            setpassword("");
            setc_password("");

        }
        else if (password !== c_password) {
            alert("Passwords doesn't matches");
            // return false;
        }

        // event.target.reset();
    };
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Register