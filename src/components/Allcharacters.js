import Spacious from "./Spacious"
import {Container,Col,Row,Card, Button} from 'react-bootstrap';
import plusCircle from '../images/plusCircle.svg';
import Character from "./Character";
import Friends from "./Friends";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Allcharacters = ({characters,friends,handleRemoveCharacter, removecharacter, cborders}) => {
  return (
            <>
      <Row>  
        <Col md={removecharacter ? 8 :10}>
              <Row>
              <Spacious />
              {characters.map((character)=><Col className="mb-4" lg={4} md={6}>
                <div className="h-100" style={{borderRadius:"30px", overflow:"hidden", border:character.id===cborders.id?"2px solid #121C33":"none"}}>
                        <Card onClick={()=>handleRemoveCharacter(true, character.id, character.description, character.name)} className="fluid mr-0 pr-0 h-100" >
                        <Card.Img className="planet border-0 w-100" alt="no image" variant="" src={character.image}  />
                        <Card.Body className="card-body">
                        <Card.Text >
                        <Row>
                            <Col className="mt-1">
                            <p className="fw-bold"><small>{character.name}</small></p>
                            <p style={{opacity: "0.6"}}><small>{character.friends}</small></p>
                            </Col>
                           { character.id== characters.length ? (<Col className="d-flex justify-content-end align-content-start">
                               <Link to="/component/CharacterForm"> <img src={plusCircle} style={{ width: "56px", height:"56px", size: "32px"}} /></Link>
                            </Col>): ""}
                            
                        </Row>
                        
                       </Card.Text>
                      </Card.Body>
                      </Card>
                </div>
              </Col>)}
              </Row>
              </Col>
              <Col md={4}>
            {removecharacter?<Friends friends={friends} cborders={cborders} handleRemoveCharacter={handleRemoveCharacter}/>:null }
        </Col> 
              </Row>
              
             </>
        
    )
}

export default Allcharacters
