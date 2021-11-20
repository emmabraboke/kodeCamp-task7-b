import { height } from 'dom-helpers';
import {Container,Col,Row,Card} from 'react-bootstrap';
import cancel from '../images/cancel.svg'
import plus from '../images/plus.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Planet Alpha image
import character6 from '../images/characters/character6.png';
import character3 from '../images/characters/character3.png';
import character16 from '../images/characters/character16.png';
import character5 from '../images/characters/character5.png';
import character13 from '../images/characters/character13.png';
import character11 from '../images/characters/character11.png';


const Character = ({handleRemovePlanet,borders}) => {
    const [acharacters, setAcharacters]=useState([
        {
            name: "Darlene Roberson",
            friends: "23 friends",
            image: character16,
            id: 1,
        },
        {
            name: "Kathryn Murphy",
            friends: "23 friends",
            image: character13,
            id: 2
        },
        {
            name: "Jenny Wilson",
            friends: "23 friends",
            image: character3,
            id: 3
        },
        {
            name: "Ariene McCoy",
            friends: "23 friends",
            image: character5,
            id:5,
        },
        {
            name: "Darrell Steward",
            friends: "23 friends",
            image: character11,
            id:6,
        },
        {
            name: "Bessie Cooper",
            friends: "23 friends",
            image: character6,
            id:7,
        },
    ])
    return (
        <div className="sidebar h-100">
          <div className=" h-100 " style={{borderRadius:"30px", overflow:"hidden"}}>
                <Card className="h-100 pt-2" style={{border:"none"}}>
                    <Container>
                        <Card.Img className="" variant="" src=""/>
                        <div className="d-flex justify-content-end">
                        <img src={cancel} onClick={()=>handleRemovePlanet(false)} style={{width:"32px",height:"32px", backgroundColor: "#F2F2F2", borderRadius:"8px" , padding:"5px"}}/>
                        </div>
                       
                        <Card.Title></Card.Title>
                       
                        <Card.Body>
                        <Card.Text >
                        <h3 className="mb-2 mt-3" style={{fontWeight:"800"}}>{borders.locations}</h3>
                            <div>
                                <p> <small>Planet Alpha is a place to be if you like everything related to planets. I know it's
                                a bit meta but come and see by your self </small>
                               </p>
                            </div>
                            
                            <div className="my-3">
                                <h6><small>Population</small></h6>
                                <p className="fw-bold"><small>256</small></p>
                            </div>
                            <div>
                                <Row>
                                    <Col><h5 style={{opacity:"0.6", fontWeight:"600"}}><small>CHARACTER</small></h5></Col>
                                    <Col className="d-flex justify-content-end">
                                       <Link to="/component/CharacterForm">  <img src={plus} style={{width:"32px",height:"32px", backgroundColor: "#F2F2F2", borderRadius:"8px" , padding:"5px"}}/> </Link>
                                    </Col>
                                </Row>
                            </div>
                            <div className="pt-4">
                                <Row>
                                
                                   { acharacters.map((characters)=><><Col md={3} className="mb-2">
                                       <div className="h-100 mb-3">
                                             <img src={characters.image} className="img-fluid h-100" style={{borderRadius:"8px"}}/> 
                                       </div>
                                    </Col>
                                    <Col col md={9} className="mb-2">
                                        <div className="my-auto">
                                            <h6 className="fw-bold"><small>{characters.name}</small></h6>
                                            <p style={{opacity:0.6}}><small>{characters.friends} </small></p>
                                        </div>
                                    </Col></>)}
                                  
                                </Row>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Container>
                </Card>
                
         </div>
        </div>
    )
}

export default Character
