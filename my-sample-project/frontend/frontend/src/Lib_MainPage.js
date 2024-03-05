import React from 'react'
import  './Lib_MainPage.css';
import logo from './UOSMlogo.jpg'
const Lib_MainPage = () => {
    // const containerStyle = {
    //     fontWeight:'bold'
    // }
    return (
        <div className="container" style={{fontWeight: 'bold'}}>
            <img src={logo} alt="Logo" style={{width:'220px',height:'100px'}}/>
            {/*<h2>Librarian Main Page</h2>*/}
            <button className="barItem">Dashboards</button>
            <button className="barItem">Borrowed Book List</button>
            <button className="barItem">Book Status</button>
            <button className="barItem">Reserved Books</button>
            <button className="barItem">New Book Request</button>
            <button className="barItem">Report</button>
            <br/><br/>
        </div>
    );
};

export default Lib_MainPage;

