import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Login = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [users, setUsers] = useState([]);
    const [added, setAdded] = useState(false);

    useEffect(() => {

        axios.get("http://localhost:9000/auth/users", state)
            .then(response => {
                // console.log(response.data);
                setUsers(response.data.users);
            })
            .catch(err => {
                console.log(err);
            })
    }, [added])

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }


    const callApi = () => {

        axios.post("http://localhost:9000/auth/signup", state)
            .then(response => {
                // console.log(response.data);
                setAdded(!added);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            <div className='row' style={{marginTop:"200px"}}>
                <div className='col-md-6 offset-3'>
                    <h1  style={{textAlign:"center"}}>Signup Here</h1>
                    <input className='form-control' name='name' onChange={handleChange} type="text"/> <br/>
                    <input className='form-control' name='email' onChange={handleChange} type="email"/> <br/>
                    <input className='form-control' name='password' onChange={handleChange} type="password"/> <br/>
                    <button className='btn btn-info' onClick={callApi}>
                        Submit
                    </button>
                </div>
            </div>

            <div className='row' style={{marginTop:"200px",padding:"40px"}}>
                <div className='col-md-6 offset-3'>
                    <h1  style={{textAlign:"center"}}>Users List</h1>
                    {
                        users.map(ele=>(
                            <li>{ele.name}</li>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Login;
