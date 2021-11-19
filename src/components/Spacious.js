import { useState } from 'react';
import {Container,Col,Row,Card,Form} from 'react-bootstrap';
import { Link,useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
const Spacious = () => {

    const spaces="/component/Space"
    const character="/component/Allcharacter"
    const planet="/component/Planet"
    const history =useHistory()
    const path =history.location.pathname;
   


    

    return (
        
        <>
                      
                         <div className="mb-1">
                    
                            <div ><Link to="/component/Space" className="text-decoration-none" ><h1 className="mb-2" style={{fontWeight:"900", fontSize:"48px"}} >Spacious</h1></Link> </div>
                               
                                <div className="d-inline-block me-2 mb-1 p-2 ">
                               <Link to="/component/Planet" className="text-decoration-none fw-bold"  > <p className="d-inline p-2"   style={{ background: path== planet || path==spaces ? "rgba(18, 28, 51, 0.05)": null, opacity: path!=planet &&  path!=spaces ? 0.6 :null, borderRadius:"8px"}}  >PLANETS</p> </Link>
                                </div>
                           
                                    <div className="d-inline-block mb-1 p-2">
                                       <Link to="/component/Allcharacter" className="text-decoration-none " > <p className="d-inline p-2 fw-bold"  style={{  background: path==character ?  "rgba(18, 28, 51, 0.05)":null,opacity: path!==character  ? 0.6:null, borderRadius:"8px"}} >CHARACTER</p> </Link>
                                    </div>
        
                            {path==character?<div className="float-end d-inline-block mb-1" > 
                                <div className="d-inline">
                                    <select className="border-0 d-inline p-2 fw-bold mb-0" style={{outline:"none", borderRadius:"6px",color:"", backgroundColor:"#EAEAEB"}}>
                                        <option>All PLANETS</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>: null}
                        </div>
                
                    
        </>
    )
}

export default Spacious
