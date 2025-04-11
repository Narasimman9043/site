import React from "react";
import viteLogo from "./react.svg"

const ProfileCard=({profile})=>{
    return(

      <div style={{
        border:'2px solid black',
        borderRadius:"10px",
        padding:"20px",
        margin:"300px auto",
        width:"700px",
        height:"280px",
        backgroundColor:"gray",
        color:"white",
        fontSize:"30px"
      }}>
    
        <img style={{
            paddingLeft:"600px",
            width:"60px"
        }}
        src={viteLogo} />
        <address>
    
        <div style={{paddingBottom:"10px"}}>
            <span>Name:</span>
            <span>{profile.name}</span>
        </div>
        <div style={{paddingBottom:"10px"}}>
            <span>Department:</span>
             <span>{profile.Department}</span>
        </div>                 
    
        <div style={{paddingBottom:"10px"}}>
        <span>Mobile:</span>
        <span>{profile.mobile}</span>
        </div>
        <div>
        <span>Address:</span>
        <span>{profile.address}</span>
        </div>
        </address>
        <div style={{
          paddingLeft:"200px",
          paddingTop:"20px"
          
         }}
        >
          <a href="https://www.linkedin.com/login" target="_blank"> LINKEDIN PROFILE</a>
        </div>

    </div>
    );
};
export default ProfileCard;