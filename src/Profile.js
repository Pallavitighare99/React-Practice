import React from "react";



export default class Profile extends React.Component
{
   render(){
       return(
       <div>
           <h1>{this.props.data}</h1>
       </div>
       )
   } 
}

