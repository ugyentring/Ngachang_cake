import React from 'react';
// import './order.module.css'; // Make sure to import your CSS file
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useState } from 'react';

import ham from "./images/ham.png";
import tomato from "./images/tomato.png";
import cheese from "./images/cheese.png";
import plus from "./images/plus.png";
import logoBig from "../img/logoBig.png";



function Order() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [ingredients, setIngredients] = useState([]);
 // State to store ingredient details
 const [ingredient, setIngredient] = useState({
  name: '',
  rate: '',
  image: null,
});

  const handleCardClick = () => {
      setShowPopup1(true);
  };

  const handleClosePopup1 = () => {
      setShowPopup1(false);
  };

  const handleDeleteClick = () => {
    // Show the delete confirmation popup
    setShowPopup2(true);
};

 // Event handler for deleting the card
 const handleConfirmDelete = () => {
  // Remove the card from the DOM
  const cardElement = document.querySelector('.card2');
  if (cardElement) {
    cardElement.remove();
  }

  // Close the popup
  handleClosePopup2();
};

const handleClosePopup2 = () => {
  setShowPopup2(false);
};

 // Event handler for updating ingredient details
//  const handleInputChange = (e, field) => {
//   setIngredient({
//     ...ingredient,
//     [field]: e.target.value,
//   });
// };

// Event handler for handling the "Add" button click
// const handleAddIngredient = () => {
//   // Add the new ingredient to the ingredients state
//   const newIngredient = {
//     name: ingredient.name,
//     rate: ingredient.rate,
//     image: ingredient.image,
//   };

//   setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

//   console.log('New Ingredient:', ingredient);
//   // Close the popup
//   handleClosePopup1();
// };

// Event handler for handling the "Add" button click
const handleAddIngredient = () => {
  // Check if an image is selected
  if (!ingredient.image) {
    alert('Please select an image for the ingredient.');
    return;
  }

  // Read the selected image file
  const reader = new FileReader();
  reader.onload = (e) => {
    // Add the new ingredient to the ingredients state with the image data
    const newIngredient = {
      name: ingredient.name,
      rate: ingredient.rate,
      image: e.target.result, // Set the image data
    };

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    handleClosePopup1();
  };

  // Read the image file as a data URL
  reader.readAsDataURL(ingredient.image);
};

// Event handler for updating ingredient details, including image
const handleInputChange = (e, field) => {
  if (field === 'image') {
    // Update image property with the selected file
    setIngredient({
      ...ingredient,
      image: e.target.files[0],
    });
  console.log('New Ingredient:', ingredient);

  } else {
    // Update other properties as usual
    setIngredient({
      ...ingredient,
      [field]: e.target.value,
    
    });
 
  }
};



  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="adminProfile">
           {/* <i className="far fa-user-circle" style={{ width: '90px', height: '90px', color: '#ffffff', marginLeft: '100px', marginTop: '45px', fontSize: '100px' }}></i> */}
           <img  style={{ width: '150px', height: '150px', color: '#ffffff', marginLeft: '100px', marginTop: '45px', fontSize: '100px' }} src={logoBig} alt="" />
        </div>

        <div className="text1">
          <a href="/dashboard">
            <i className="fas fa-home" style={{ fontSize: '20px', marginRight: '15px' }}></i>
            Dashboard
          </a>
        </div>

        <div className="text1">
          <a href="/dashboard/ingriedents">
            <i className="fas fa-pizza-slice" style={{ fontSize: '20px', marginRight: '15px' }}></i>
            Pizza Ingredients
          </a>
        </div>

        <div className="text1">
          <a href="/dashboard/order">
            <i className="fas fa-users" style={{ fontSize: '20px', marginRight: '15px' }}></i>
            Users
          </a>
        </div>

        {/* for logout */}
        <div className="text1">
          <a href="/logout">
            <i className="fas fa-sign-out-alt" style={{ fontSize: '20px', marginRight: '15px' }}></i>
            Logout
          </a>
        </div>
      </div>
      {/* End of Sidebar */}

      {/* Other side */}
      <div className="content">
        <h4 className="title">Pizza Crafty</h4>
        <br />
        <hr />
        <h4 className="title">Ingriedents</h4>
    {/* ------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="bigcard" >
          <div className="wholecard2" style={{width:'96%', height:'800px', display:'flex'}}>
  {/* ---main div-tag-- */}
            <div >
            <div style={{display:'flex'}}>
{/* --1-- */}
<div>
            <div className="card2" style={{width:'300px', height:'300px', background:'white', borderRadius:'15px', marginLeft:'50px', marginTop:'30px'}}>
              <img style={{width:'125px', height:'125px', marginLeft:'80px', marginTop:'50px'}} src={cheese} onClick={handleDeleteClick}  alt="" />
          <div style={{display:'flex', marginTop:'250px', marginLeft:'-180px'}}>
            <p style={{fontSize:'16px'}}>Cheese</p>
            <p style={{marginLeft:'150px', fontSize:'16px',color:'green'}}>Nu 2.00</p>
          </div>
            </div>
 {showPopup2 && (
        <div className="popup-containerr" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor:'pointer' }}>
          <div className="popupp" style={{ background: 'white', padding: '20px', borderRadius: '10px', height: '200px', width: '400px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div><i className="fa fa-close" style={{ fontSize: '20px', marginLeft: '350px', cursor: "pointer" }} onClick={handleClosePopup2}></i></div>
              <div>
                <p style={{ marginLeft: '15px' }}>Are you sure you want to delete this ingredient?</p>
              </div>
              <div style={{ display: 'flex', marginLeft: '90px', marginTop: '15px' }}>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px', marginRight: '10px' }} onClick={handleClosePopup2}>Cancel</button>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px' }} onClick={handleConfirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}        
</div>
{/* --2-- */}
 <div>       
            <div className="card2" style={{width:'300px', height:'300px', background:'white', borderRadius:'15px', marginLeft:'50px', marginTop:'30px'}}>
            <img style={{width:'125px', height:'125px', marginLeft:'80px', marginTop:'50px'}} src={tomato} onClick={handleDeleteClick}  alt="" />
            <div style={{display:'flex', marginTop:'250px', marginLeft:'-180px'}}>
            <p style={{fontSize:'16px'}}>Tomato</p>
            <p style={{marginLeft:'150px', fontSize:'16px',color:'green'}}>Nu 3.00</p>
          </div>
        </div>
{showPopup2 && (
        <div className="popup-containerr" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="popupp" style={{ background: 'white', padding: '20px', borderRadius: '10px', height: '200px', width: '400px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div><i className="fa fa-close" style={{ fontSize: '20px', marginLeft: '350px', cursor: "pointer" }} onClick={handleClosePopup2}></i></div>
              <div>
                <p style={{ marginLeft: '15px' }}>Are you sure you want to delete this ingredient?</p>
              </div>
              <div style={{ display: 'flex', marginLeft: '90px', marginTop: '15px' }}>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px', marginRight: '10px' }} onClick={handleClosePopup2}>Cancel</button>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px' }} onClick={handleConfirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
</div> 
{/* --3-- */}
<div>
        <div className="card2" style={{width:'300px', height:'300px', background:'white', borderRadius:'15px', marginLeft:'50px', marginTop:'30px'}}>
        <img style={{width:'125px', height:'125px', marginLeft:'80px', marginTop:'50px'}} src={ham} onClick={handleDeleteClick} alt="" />
        <div style={{display:'flex', marginTop:'250px', marginLeft:'-180px'}}>
            <p style={{fontSize:'16px'}}>Peperoni</p>
            <p style={{marginLeft:'150px', fontSize:'16px',color:'green'}}>Nu 4.00</p>
          </div>
        </div>

  {showPopup2 && (
        <div className="popup-containerr" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="popupp" style={{ background: 'white', padding: '20px', borderRadius: '10px', height: '200px', width: '400px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div><i className="fa fa-close" style={{ fontSize: '20px', marginLeft: '350px', cursor: "pointer" }} onClick={handleClosePopup2}></i></div>
              <div>
                <p style={{ marginLeft: '15px' }}>Are you sure you want to delete this ingredient?</p>
              </div>
              <div style={{ display: 'flex', marginLeft: '90px', marginTop: '15px' }}>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px', marginRight: '10px' }} onClick={handleClosePopup2}>Cancel</button>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px' }} onClick={handleConfirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
</div>

{/* --4-- */}
    
        </div>
             {/* row */}

             <div style={{display:'flex'}}>
             <div className="card2" style={{ width: '300px', height: '300px', background: 'white', borderRadius: '15px', marginLeft: '50px', marginTop: '30px' }} >
                <a><img style={{ width: '125px', height: '125px', marginLeft: '80px', marginTop: '70px' }} src={plus} onClick={handleCardClick} alt="" /></a>
                <div style={{ display: 'flex', marginTop: '250px', marginLeft: '-180px' }}>
                    <p style={{ fontSize: '16px' }}>Ingredients</p>
                    <p style={{ marginLeft: '150px', fontSize: '16px', color: 'green' }}>Rate</p>
                </div>
            </div>

            {ingredients.map((ingredient, index) => (
        <div key={index} className="card2" style={{ width: '300px', height: '300px', background: 'white', borderRadius: '15px', marginLeft: '50px', marginTop: '30px' }}>
          {/* Render the ingredient details here */}
          <img style={{ width: '125px', height: '125px', marginLeft: '80px', marginTop: '50px' }} src={ingredient.image} alt="" />
          <div style={{ display: 'flex', marginTop: '250px', marginLeft: '-180px' }}>
            <p style={{ fontSize: '16px' }}>{ingredient.name}</p>
            <p style={{ marginLeft: '150px', fontSize: '16px', color: 'green' }}>{ingredient.rate}</p>
          </div>
        </div>
      ))}

      {showPopup1 && (
        <div className="popup-container" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="popup" style={{ background: 'white', padding: '20px', borderRadius: '10px', height: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div><i className="fa fa-close" style={{ fontSize: '20px', marginLeft: '450px', cursor: "pointer" }} onClick={handleClosePopup1}></i></div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px' }}>Name:</label>
                <input type="text" placeholder='cheese' onChange={(e) => handleInputChange(e, 'name')} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px' }}>Rate:</label>
                <input type="text" placeholder='Nu 2.0' onChange={(e) => handleInputChange(e, 'rate')} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px' }}>Image:</label>
                <input type="file" onChange={(e) => handleInputChange(e, 'image')} />
              </div>

              <div style={{ display: 'flex', marginTop: '50px', marginLeft: '80px' }}>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px' }} onClick={handleClosePopup1}>Cancel</button>
                <button style={{ backgroundColor: "#B0BB9A", width: '80px', height: '35px', borderRadius: '200px', marginLeft: '140px' }} onClick={handleAddIngredient}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
             
</div>

          </div>

          {/* User side */}
        
       
        </div>
      </div>
      {/* End of Other side */}
    </div>
  );
}

export default Order;