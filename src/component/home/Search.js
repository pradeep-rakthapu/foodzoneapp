import React, { Component } from "react";
import './Search.css'
import { withRouter } from "react-router-dom";
const url = "https://foodzone1.herokuapp.com/location";
const resturl ="https://foodzone1.herokuapp.com/restaurants?state_id=";

 class Search extends Component{
                constructor(props){
                    super(props)
                    this.state=
                    {
                        location:"",
                        restaurants:""
                    }
                }



        renderCity = (data) => {
                    // console.log(">>>>data>>",data)
                    if(data){
                        return data.map((item) => {
                            return <option value={item.state_id} key={item.state_id}>{item.state}</option>
                            
                        })
                    } 
        }

        renderRest = (data)=>{
            if(data){
                return data.map((item)=>{
                    return  <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name}|{item.address}</option>
                })
            }
        }

        handlecity=(event)=>{
            let restid= event.target.value;
            fetch(`${resturl}${restid}`,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>{
                this.setState(
                   { restaurants: data}
                )
            })
        }
        handlerest = (event)=>{
            let restid= event.target.value;
            this.props.history.push(`/details?restId=${restid}`)
        }



         render(){


            return(

                <>
                <div id="search" class=" ">
                <div id="gd" class="container">
                    <div id ="ts" >
                        F!
                    </div>
                    <div id="text">
                        FIND BEST RESTAURANT NEAR YOU
                    </div>
                        
                        <select name="city" id="city" onChange={this.handlecity} >
                            <option value="0">   select city <span class="glyphicon glyphicon-search"></span></option>
                                  {this.renderCity(this.state.location)}
                        </select>
                    
                        <select name="restaurant" id="res" class="form-select" onChange={this.handlerest}>
                            <option value="0">   select restaurant <span class="glyphicon glyphicon-search"></span></option>
                            {this.renderRest(this.state.restaurants)}
                        </select>
                        
                    </div>
            
    
                    
            </div>
                </>
             )
        }
        componentDidMount(){
            fetch(url,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>{
                this.setState({ location :data})
            })
        }
 }
 export default withRouter(Search) ;