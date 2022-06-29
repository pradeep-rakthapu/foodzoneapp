import React from "react";
import { Link } from "react-router-dom";
import './quicksearch.css';

const Quickdisplay=(props)=>{
     const listMeal=({mealData})=>{
      if(mealData){
         return  mealData.map((item)=>{

     
        return (
          <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
             <div class="col-lg-4 col-md-6 col-sm-10 col-xs-12  ">
                    <div class="bg ">
                  <div class="img"> <img src= {item.meal_image}  alt={item.mealtype}/></div>
                      <div class="mealstext">
                         <div class="item" >
                            <h3 > {item.mealtype} </h3>
                         <span>{item.content}</span>
                       </div>
                 </div>

             </div>
              </div>
             </Link>
             )
      
    })
    }
    
        
   }

return(
<div class="row  " >
  {listMeal(props)}
</div>
)

}
export default Quickdisplay;