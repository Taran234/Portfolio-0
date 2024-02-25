import React from 'react';
import bg from '../Assets/snow_floor-removebg.png';
import snowman from '../Assets/snowman.png';

function Snow() {
  const containerStyle = {
    // Add your container styles here
    flex:1,
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
  };

  const imgStyle = {
    // Add your image styles here
    flex:1,
    width:'100%',
    height:'auto',
    objectFit:'cover'
  };
  const snowmanStyle = {
    // Add your image styles here
    position: 'absolute',
    maxWidth: "50%",
    left: "-10%",
    
    width:'auto',
    height:'auto',
    objectFit:'',
  };

  return (
    <div style={containerStyle}>
      <img src={snowman} alt="Description of the image" style={snowmanStyle} />
      <img src={bg} alt="Description of the image" style={imgStyle} />
      
      {/* add accumulated snow here */}
    </div>
  );
}

export default Snow;
