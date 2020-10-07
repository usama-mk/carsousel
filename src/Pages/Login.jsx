import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DemoCarousel from './carousel';
class Login extends React.Component {
 
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  adminCheckP: null,
  }
 }
  
  handleLogin= (check)=>{
      console.log(check)
   this.setState({username:'', password:'', adminCheckP: check}) 
 }
render() {
    return (
    this.state.adminCheckP ?<DemoCarousel adminCheckP /> : <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) =>{this.setState({username:newValue});
            
                                             ;         } }
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
            
             <RaisedButton label="Submit" primary={true} style={style} onClick={()=>{this.handleLogin(this.state.username== admin && this.state.password==password)}}/>
             
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
const admin= "admin";
const password= "mika123";
export default Login;