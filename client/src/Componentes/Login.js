//import  Chart from "react-apexcharts"
import React, { Component,Fragment,useState } from "react";


class Login extends Component{
  
   constructor(props){
         super(props)
         this.state ={
              user:{
                  nombre:'',
                  pass:''
               } 
            };
         this.handleChange = this.handleChange.bind(this);
         this.Login = this.Login.bind(this);
      }
      handleChange(event) 
      {  const { name, value } = event.target;
         const { user } = this.state;
         this.setState({
             user: {...user,[name]: value}
         });
      }    

      
      Login(){
          const usuario = this.state.user.nombre;
          var contraseña = this.state.user.pass
             
          console.log('Nombre:',this.state.user.nombre);  
          console.log('password:',this.state.user.pass);
            
      }

        
   render() {
      // const {nombre, pass}= this.state;  
    return(<Fragment>
                 <div className ="row" >
                    <div className="card-header" style={{ marginLeft: "400px", marginRight: "400px", background:"#0f2537", fontSize: 30, textAlign: "center", color:"white" }}>
                            Login
                    </div> 
                    <div className = "card" style={{marginLeft: "400px", marginRight: "400px", background:"#0f2537", textAlign: "center", height: "200px"  }} >   
                       <div className ="form-group"  >
                             <label style={{ color:"white" }}  >Email</label>
                             <div>
                             <input type="text" name="nombre" value={this.state.user.nombre} onChange={this.handleChange} />
                            </div>
                       </div>
                       <div className ="form-group" >
                             <label style={{ marginLeft: "0px",color:"white" }} >Password</label>
                             <div>
                             <input type="password" name="pass" value={this.state.user.pass} onChange={this.handleChange}  />
                             </div>
                        </div>
                        <div >
                             <button onClick={this.Login} >Login   </button>
                        </div>
                        
                    </div>   
                 </div>
           </Fragment>
        ) 
       } 
}

export default Login;

