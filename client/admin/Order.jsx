import React from 'react';
import './order.module.css'; // Make sure to import your CSS file
import '@fortawesome/fontawesome-free/css/all.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import pp from "./images/pp.jpg";


function Order() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="adminProfile">
          <i className="far fa-user-circle" style={{ width: '90px', height: '90px', color: '#ffffff', marginLeft: '100px', marginTop: '45px', fontSize: '100px' }}></i>
          <img src="" alt="" />
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
            Pizza Ingriedents
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
        <h4 className="title">Recent Order</h4>
    
        <div className="bigcard">
          <div className="wholecard2" style={{width:'96%', height:'650px', display:'flex'}}>
            <div className="card2" style={{width:'47%', height:'500px', background:'white', borderRadius:'15px', marginLeft:'50px', marginTop:'48px'}}>
              <div className="min">
                <div>
                <i className="far fa-user-circle" style={{ width: '90px', height: '90px',color: '#000', marginLeft: '200px', marginTop: '45px', fontSize: '100px' }}></i>
                </div>
                <div style={{textAlign:'center', marginLeft:'125px', marginTop:'10px'}}>
                  <p>Sujal Chuwan</p>
                  <p>Ordered Cheese Pizza of a bill $240.0</p>

                <div style={{marginTop:'20px'}}>
                <p>cheese:$2</p>
                <p>cheese:$2</p>
                <p>cheese:$2</p>
                <p>cheese:$2</p>


                </div>
                </div>
              </div>
           
            </div>



            <div className="cardd" >
              <div className="mincard" style={{width:'500px', height:'335px'}}>
                <div style={{width:'300px', height:'300px'}}>
                  <img style={{width:'300px', height:'300px'}} src={pp} alt="" />
                </div>
                <div style={{marginTop:'200px', marginLeft:'10px'}}>
                  <p> Pizza with Peperoni</p>
                  <p style={{color:'green'}}> Total Bill: $12</p>
                </div>
              </div>
              <div className="mincard" style={{width:'500px', marginTop:'25px'}}>
                {/* <div>
                  <img src={Pizza4.png} alt="" />
                </div> */}
                <div style={{background:'#B0BB9A', borderRadius:'10px', height:'100px', marginTop:'10px', marginLeft:'10px', width:'480px'}}>
                  <p> Thank you, your pizza will be delivered soon.</p>
                  <button style={{background:"white", borderRadius:'10px', width:"150px", height:"35px", marginLeft:"300px", marginTop:"5px"}}>Accept and Send</button>
                </div>
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
