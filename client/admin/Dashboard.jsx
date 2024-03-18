import React from 'react';
import './css/admin.css'; // Make sure to import your CSS file
import '@fortawesome/fontawesome-free/css/all.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Pizza1 from "./images/Pizza1.png";
import Pizza2 from "./images/Pizza2.png";
import Pizza3 from "./images/Pizza3.png";
import Pizza4 from "./images/Pizza4.png";


function AdminDashboard() {
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
        <h4 className="title">Overview</h4>
        <div className="wholecard">
          <div className="card">
            <div className="cardicon">
              <div className="icon">
                <i className="fas fa-chart-line" style={{ fontSize: '24px', marginLeft: '8px', marginTop: '5px' }}></i>
              </div>
              Total sales: Nu 1,231
            </div>
          </div>

          <div className="card" style={{ background: '#BEFFB4' }}>
            <div className="cardicon">
              <div className="icon">
                <i className="fas fa-money-bill-alt" style={{ fontSize: '24px', marginLeft: '7px', marginTop: '8px' }}></i>
              </div>
              Expenses: Nu 4,234
            </div>
          </div>

          <div className="card" style={{ background: '#FDFFB0' }}>
            <div className="cardicon">
              <div className="icon">
                <i className="fas fa-chart-area" style={{ fontSize: '24px', marginLeft: '8px', marginTop: '5px' }}></i>
              </div>
              Revenue:  Nu 1,231
            </div>
          </div>
        </div>
        <br /><br />
<hr />
        <h4 className="title">Customized Pizza</h4>
        <div className="bigcard">
          <div className="wholecard2">
            <div className="card2">
              <div className="mincard">
                <div>
                  <img src={Pizza1} alt="" />
                </div>
                <div>
                  <p> Pizza with Peperoni</p>
                  <p>Nu 12</p>
                </div>
              </div>

              <div className="mincard">
                <div>
                  <img src={Pizza2} alt="" />
                </div>
                <div>
                  <p> Pizza with Peperoni</p>
                  <p>Nu 12</p>
                </div>
              </div>
            </div>

            <div className="card2">
              <div className="mincard">
                <div>
                  <img src={Pizza3} alt="" />
                </div>
                <div>
                  <p> Pizza with Peperoni</p>
                  <p>Nu12</p>
                </div>
              </div>
              <div className="mincard">
                <div>
                  <img src={Pizza4} alt="" />
                </div>
                <div>
                  <p> Pizza with Peperoni</p>
                  <p>Nu 12</p>
                </div>
              </div>
            </div>
          </div>

          {/* User side */}
        
          <div className="card3">
        <h4 className="titlee">Orders</h4>
            <div className="box">

              <div className="user">
                <i className="far fa-user-circle" style={{ fontSize: '40px', color: '#3d3d3d', marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}></i>
              </div>
              <div className="user">
                <p>Sujal Chuwan</p>
                <p>Ordered Pizza with cheese</p>
              </div>
              <a href="/dashboard/order"><i className="fas fa-plus-square" style={{ fontSize: '25px', color: '#3d3d3d', marginLeft: '30px', marginRight: '10px', marginTop: '20px' }}></i></a>
            </div>

            <div className="box">
              <div className="user">
                <i className="far fa-user-circle" style={{ fontSize: '40px', color: '#3d3d3d', marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}></i>
              </div>
              <div className="user">
                <p>Sujal Chuwan</p>
                <p>Ordered Pizza with cheese</p>
              </div>
              <a href="/dashboard/order"><i className="fas fa-plus-square" style={{ fontSize: '25px', color: '#3d3d3d', marginLeft: '30px', marginRight: '10px', marginTop: '20px' }}></i></a>
            </div>

            <div className="box">
              <div className="user">
                <i className="far fa-user-circle" style={{ fontSize: '40px', color: '#3d3d3d', marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}></i>
              </div>
              <div className="user">
                <p>Sujal Chuwan</p>
                <p>Ordered Pizza with cheese</p>
              </div>
              <a href="/dashboard/order"><i className="fas fa-plus-square" style={{ fontSize: '25px', color: '#3d3d3d', marginLeft: '30px', marginRight: '10px', marginTop: '20px' }}></i></a>
            </div>

            <div className="box">
              <div className="user">
                <i className="far fa-user-circle" style={{ fontSize: '40px', color: '#3d3d3d', marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}></i>
              </div>
              <div className="user">
                <p>Sujal Chuwan</p>
                <p>Ordered Pizza with cheese</p>
              </div>
              <a href="/dashboard/order"><i className="fas fa-plus-square" style={{ fontSize: '25px', color: '#3d3d3d', marginLeft: '30px', marginRight: '10px', marginTop: '20px' }}></i></a>
            </div>

            <div className="box">
              <div className="user">
                <i className="far fa-user-circle" style={{ fontSize: '40px', color: '#3d3d3d', marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}></i>
              </div>
              <div className="user">
                <p>Sujal Chuwan</p>
                <p>Ordered Pizza with cheese</p>
              </div>
              <a href="/dashboard/order"><i className="fas fa-plus-square" style={{ fontSize: '25px', color: '#3d3d3d', marginLeft: '30px', marginRight: '10px', marginTop: '20px' }}></i></a>
            </div>

            
          </div>
        </div>
      </div>
      {/* End of Other side */}
    </div>
  );
}

export default AdminDashboard;
