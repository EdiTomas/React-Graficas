//import  Chart from "react-apexcharts"
import React, { Component,Fragment } from "react";

class Login extends Component{
      constructor(props){
          super(props)
      }
   render() {
    return(<Fragment>
                 <div className ="row" >
                    <div className="card-header" style={{ marginLeft: "400px", marginRight: "400px", background:"#0f2537", fontSize: 30, textAlign: "center", color:"white" }}>
                            Login
                    </div> 
                    <div className = "card" style={{marginLeft: "400px", marginRight: "400px", background:"#0f2537", textAlign: "center", height: "200px"  }} >   
                       <div className ="form-group"  >
                             <label style={{ color:"white" }}  >Email</label>
                             <div>
                             <input type="text" id="user" name="user"/>
                            </div>
                       </div>
                       <div className ="form-group" >
                             <label style={{ marginLeft: "0px",color:"white" }} >Password</label>
                             <div>
                             <input type="password" id="password" name="password"/>
                             </div>
                        </div>
                        <div >
                             <button type="button" class="btn btn-dark">Login</button>
                             <button type="button" class="btn btn-dark">Cancel</button>
                        </div>
                        
                    </div>   
                 </div>
           </Fragment>
        ) 
       } 
}

export default Login;

