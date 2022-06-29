import React, { Component } from "react";
import './quicksearch.css'
import Quickdisplay from "./Quickdisplay";
const url = 'https://foodzone1.herokuapp.com/mealtype';

 class QuickSearch extends Component{
                  
                  constructor(){
                    super()
                    this.state={
                        mealtype:''
                    }
                  }
              
    render(){
         return(
            <>
            <div class="quicksearch container-fluid">
               <div id="qt"> <h1 id ="hs"> QUICK SEARCH</h1>
               <h4>
                search restaurants by meals
               </h4>
            </div>
              
        </div>
        <Quickdisplay mealData= {this.state.mealtype} />
        </>

         )
         }

         componentDidMount(){
            fetch(url,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    mealtype: data
                })
            })
         }
 }

 
 export default QuickSearch ;