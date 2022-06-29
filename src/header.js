import React,{Component} from "react";
import ReactDom from "react";
import { Link, withRouter } from "react-router-dom";
import'./header.css';
const url = 'https://foodzonelogin.herokuapp.com/api/auth//userinfo'


class Header extends Component{ 
    constructor(){
        super()

        this.state={
            userData:'',
            
        }
    }
    conditionalheader=()=>{
        if(this.state.userData.name){
            let data = this.state.userData
            let outarray = [data.name,data.email,data.phone,data.role];
            sessionStorage.setItem('userInfo',outarray)
            sessionStorage.setItem('loginstatus',true)

            return(
                
                <div className="">
                       


                <div className="btnlogin btnblock">
                        <Link to="/" className="btn btn-success">
                            <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                        </Link>
                    </div>  &nbsp;
                
                <div className="btnlogin">
                        <button onClick={this.handleLogout} className="btn btn-danger">
                        Logout
                        </button>
                </div>
            
                </div>
                )
        }
        else{
            return(
                <>
                  <ul class="nav navbar-nav navbar-right">

                  <li> <div className="btn-login"><Link to={"/register"}> <span id="user" class="glyphicon glyphicon-user">Register&nbsp; </span> </Link> 
                   </div> </li> 
                   
                   <li><div className="btn-login ">
                    <Link to="/login" className="btn btn-success" id="">
                             <span className="glyphicon glyphicon-log-in">LOGIN &nbsp;</span>
                        </Link>
                    </div>
                    </li>
                    </ul>
                    
                
                </>
            )
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
       
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

 render(){
    return(
          

        <header >
        <div class="row">
            <div class="col">
        <div class="navbar navbar-default">
          <div class="container-fluid">
             <div   class="navbar navbar-header">
                <Link to={`/`} class="navbar-brand"  id="icon" >FOODZONE</Link> 
             </div>
               {this.conditionalheader()}



{/*                

               <ul class="nav navbar-nav navbar-right">
                  
                   <li><Link href="#"><span id="user" class="glyphicon glyphicon-user">user</span> </Link> </li>
                   <li> <Link href="www.facebook.com" target="blank"><img src="fb.png" alt="fb" class="slogo"/></Link> </li>
                   <li><Link href="www.instagram.com" target="blank"><img src="inst.png" alt="instagram"class="slogo"/></Link> </li>
                    <li> <Link href="www.youtube.com"target="blank"><img src="youtube.png" alt="youtube"class="slogo"/></Link> </li>
               </ul> */}
           </div>
        </div>
    </div>
    </div>
    </header>   

    )
 }

 componentDidMount(){
    fetch(url,{
        method:'GET',
        headers:{
            'x-access-token':sessionStorage.getItem('ltk')
        }
    })
    .then((res) => res.json())
    .then((data) => {
        this.setState({
            userData:data
        })
    })
}
}




export default withRouter(Header) ;
