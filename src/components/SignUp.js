import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SignUp extends Component {
    render() {
        return (
            <div className="container"  style={{ marginTop:"50px",height:"460px", width:'700px',textAlign:'center'}}>
               
               
               <div className="signimgage" > <img  src="assets/Home design product/signup.jpg" style={{height:"100%",width:"100%"}} alt="img" /></div>
                <form  className="form-inline" >
                    <h3 style={{margin:'30px'}}>Sign Up</h3>
                    <div className="  form-group col-6"  >
            
                        <input type="text" placeholder="Enter your Name" className="form-control" name="" required />
                    </div><br />
                    <div className=" form-group col-6"  >

                        <input type="email" placeholder="Enter your Email" className="form-control" name="" required />
                    </div> <br />

                    <div className="  form-group col-6">

                        <input type="password" placeholder="Enter your password" className="form-control" name="" required />
                    </div><br />

                    <div className=" form-group col-6">

                        <input type="password" placeholder="ReEnter your password" className="form-control" name="" required />
                    </div>
                    <label className="accalready">Already have an account ? <Link to="/login" >LOG IN</Link> </label>
                    <br /><br/>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignUp
