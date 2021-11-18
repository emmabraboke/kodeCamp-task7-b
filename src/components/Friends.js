import {Container,Col,Row,Card, Button} from 'react-bootstrap';
import cancel from '../images/cancel.svg'
const Friends = ({friends,handleRemoveCharacter,cborders}) => {
    return (
        <>
            <div className="h-100" style={{borderRadius:"30px", overflow:"hidden"}}>
                <Card className="h-100 pt-2" style={{border:"none"}}>
                    <Container>
                        <Card.Img className="" variant="" src=""/>
                        <div className="d-flex justify-content-end">
                        <img src={cancel} onClick={()=>handleRemoveCharacter(false)} style={{width:"32px",height:"32px", backgroundColor: "#F2F2F2", borderRadius:"8px" , padding:"5px"}}/>
                        </div>
                       
                        <Card.Title></Card.Title>
                       
                        <Card.Body>
                        <Card.Text >
                        <h3 className="mt-3 mb-2 fw-bold" style={{fontWeight:800}}>{cborders.person}</h3>
                            <div>
                                <p>
                                    <small>{cborders.description}</small>
                               </p>
                            </div>

                            <div className="mt-3">
                                <Row>
                                   <Col>
                                        <div>
                                            <small>
                                                <p>Planet</p>
                                                <p className="fw-bold">Alpha</p>
                                             </small>   
                                        </div>
                                    </Col>
                                    
                                    <Col>
                                        <div>
                                            <small>
                                                <p>Friends</p>
                                                <p className="fw-bold">23</p>
                                            </small>    
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="py-3">
                                <div className="py-2">
                                    <Row>
                                        <Col md={12}><h6 className="fw-bold mb-3" style={{opacity:0.6}}>FRIENDS</h6></Col>
                                    </Row>
                                
                                </div>
                               
                                <Row>
                                
                                   { friends.map((friend)=><><Col md={3} className="mb-2">
                                       <div className="h-100 mb-3">
                                             <img src={friend.image} className="img-fluid h-100" style={{borderRadius:"8px"}}/> 
                                       </div>
                                    </Col>
                                    <Col col md={9} className="my-auto">
                                        <div className="my-auto">
                                            <h6 className="fw-bold"><small>{friend.name}</small></h6>
                                            <p style={{opacity:0.6}}><small>{friend.body}</small></p>
                                        </div>
                                    </Col></>)}
                                  
                                </Row>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Container>
                </Card>
                
         </div>    
        </>
    )
}

export default Friends
