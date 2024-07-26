
import React, { useState } from 'react'

const Form = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email);
    console.log(password);
    const payload = { email, password}
    const handleSubmit = (e) => {

    }
    return (
        <div className="container bg-info">
            
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
                </form>
                <div>
                    <h2>payload:</h2>
                    <pre>{JSON.stringify(payload, null, 2)}</pre>
            </div>

            </div>
            );
        };
        export default Form;