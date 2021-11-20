import {Container,Col,Row,Card} from 'react-bootstrap';
import plusCircle from '../images/plusCircle.svg';
import Spacious from './Spacious';
import Character from './Character';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Planet = ({planets,handleRemovePlanet,removePlanet,borders}) => {
  
    return (
        <>
        <Row >
       
       <Col className=""  md={removePlanet ? 6 : 12}  lg={removePlanet ? 8 : 12}  >
         <Row>
             <Spacious />
           {!removePlanet?<> {planets.map((planet)=><Col className="mb-4 " md={6} lg={removePlanet ? 4:3 }>
                <div className="sidebar h-100" key={planet.id} onClick={(e)=>handleRemovePlanet(true,planet.id,planet.name)} style={{borderRadius:"30px", overflow:"hidden", border: planet.id===borders.id ?" 2px solid #121C33" : null}}>
                        <Card  className="fluid mr-0 pr-0 h-100" style={{border:"none"}}>
                        <Card.Img className="planet w-100" variant="" src={planet.image} alt="no image" style={{border:"none"}} />
                        <Card.Body className="card-body">
                        <Card.Text >
                        <Row>
                            <Col>
                            <p className="fw-bold">{planet.name}</p>
                            <p className="" style={{opacity: "0.6"}}><small>{planet.pop}</small></p>
                            </Col>
    
                           { planet.id== planets.length ? (<Col className="d-flex justify-content-end">
                               <Link to="/component/PlanetForm"> <img src={plusCircle}  style={{ width: "56px", height:"56px", size: "32px"}} /> </Link>
                            </Col>): ""}
                            
                        </Row>
                        
                       </Card.Text>
                      </Card.Body>
                      </Card>
                </div>
              </Col>)}</>: <> {planets.map((planet)=><Col className="mb-4 d-none d-md-block" md={removePlanet ? 6:6} lg={removePlanet ? 4:3}>
                <div className="sidebar h-100" key={planet.id} onClick={(e)=>handleRemovePlanet(true,planet.id,planet.name)} style={{borderRadius:"30px", overflow:"hidden", border: planet.id===borders.id ?" 2px solid #121C33" : null}}>
                        <Card  className="fluid mr-0 pr-0 h-100" style={{border:"none"}}>
                        <Card.Img className="planet w-100" variant="" src={planet.image} alt="no image" style={{border:"none"}} />
                        <Card.Body className="card-body">
                        <Card.Text >
                        <Row>
                            <Col>
                            <p className="fw-bold">{planet.name}</p>
                            <p className="" style={{opacity: "0.6"}}><small>{planet.pop}</small></p>
                            </Col>
    
                           { planet.id== planets.length ? (<Col className="d-flex justify-content-end">
                               <Link to="/component/PlanetForm"> <img src={plusCircle}  style={{ width: "56px", height:"56px", size: "32px"}} /> </Link>
                            </Col>): ""}
                            
                        </Row>
                        
                       </Card.Text>
                      </Card.Body>
                      </Card>
                </div>
              </Col>)}</> }
                   
              </Row>
            </Col>
            <Col  md={6} sm={12} lg={4}>
            {removePlanet?<Character borders={borders} handleRemovePlanet={handleRemovePlanet}/>: null}

        </Col>

      
        </Row>
        </>
    )
}

export default Planet
