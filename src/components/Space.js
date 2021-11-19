import planetLoader from  "../images/assets/planetLoader.svg"
import {Container,Col,Row,Card, Button} from 'react-bootstrap';
import Spacious from "./Spacious";
import plusCircle from '../images/plusCircle.svg';
import { useHistory } from 'react-router';

import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';


const Space = ({ change, handleChange}) => {
    return (
        <Container className="">
            <div>
                <Spacious />
                <div className="text-center pt-5">
                        <div>
                            <img src={planetLoader} alt="Space Image" />  
                        </div> 
                        <div>
                            <h5 className="my-4 fw-bold">Space doesn't have to be empty</h5>
                         </div>

                         <Link to="/component/PlanetForm"><Button className="border-0 fw-bold " style={{backgroundColor: "#121C33"}}> <small>CREATE PLANET</small></Button></Link>
                </div> 
                <div>
                    <Container className>
                        <div className="d-flex justify-content-end align-content-end"> 
                          <Link to="/component/PlanetForm"><img src={plusCircle} style={{ width: "56px", height:"56px", size: "32px", position:"absolute", top:"80%", left:"80%"}} /></Link>
                        </div>
                    </Container>
                </div>
                
                
            </div>
        </Container>
        
    )
}

export default Space
