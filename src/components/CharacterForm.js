import {Container,Col,Row,Card, Button} from 'react-bootstrap';
import cancel from '../images/cancel.svg';
import { Link } from 'react-router-dom';

// Character images
import character1 from '../images/characters/character1.png';
import character2 from '../images/characters/character2.png';
import character4 from '../images/characters/character4.png';
import character5 from '../images/characters/character5.png';
import character6 from '../images/characters/character6.png';
import character7 from '../images/characters/character7.png';
import character8 from '../images/characters/character8.png';
import character10 from '../images/characters/character10.png';
import character16 from '../images/characters/character16.png';
import character14 from '../images/characters/character14.png';
import character9 from '../images/characters/character9.png';
import { useState } from 'react';


const CharacterForm = ({handleNewCharacter}) => {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [friends, setFriends] = useState("")

    const handleSubmit = ()=>{
        setImage("")
        setName("")
        setFriends("")
     }
    return (
      <Row className="d-flex justify-content-center"> 
        <Col  md={8} lg={6} sm={12}>
        <div className="my-4 " style={{borderRadius:"35px", overflow:"hidden"}}>
           <Card className="py-4 px-3 border-0">
                <Container>
                <form onSubmit={(e)=>handleNewCharacter({image,name,friends},e)}>
                    <div className="d-flex justify-content-end">
                       <Link to="/component/Allcharacter"> <img src={cancel} style={{width:"32px",height:"32px", backgroundColor: "#F2F2F2", borderRadius:"8px" , padding:"5px"}}/> </Link>
                    </div>
                    <h3 className="mb-3" style={{fontWeight:800}}>CHARACTER</h3> 
                    <div  className="mb-3">
                        <label className="w-100">
                            <p className="fw-bold mb-1"><small>Image</small></p>
                            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className="w-100 border-0 p-2" style={{backgroundColor:"#F5F5F5", borderRadius:"10px", outline:"none" }} />
                            <p style={{opacity:0.6}}> <small>Paste the URL of JPG or PNG of max 20kb </small></p>
                        </label>
                    </div>
                    <div className="mb-3"> 
                        <label className="w-100">
                            <p className="fw-bold mb-1"> <small>Name </small></p>
                        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}  className="w-100 border-0 p-2" style={{backgroundColor:"#F5F5F5", borderRadius:"10px", outline:"none"}}/>
                        </label>
                    </div>
                    <div  className="mb-3">
                        <label className="w-100">
                            <p className="fw-bold mb-1"> <small>Description</small></p>
                        <textarea  value={friends} onChange={(e)=>setFriends(e.target.value)} rows="4" className="w-100 border-0 p-2" style={{backgroundColor:"#F5F5F5", borderRadius:"10px", outline:"none", resize:"none"}}></textarea>
                        </label>
                    </div>
                    <label className="w-100 mb-3">
                             <p className="fw-bold mb-1"> <small>Friends</small></p>
                    <div className="mb-2 py-1" style={{backgroundColor:"#F5F5F5",  borderRadius:"8px"}}>
                            <div className="d-inline py-2 ps-2">
                                    <img src={character2} style={{height:"30px", width:"30px", borderRadius:"5px"}} className="img-fluid d-inline"/>
                                    <small className="d-inline ms-2">James Cooper</small> 
                                    <img src={cancel} className="d-inline" style={{ width:"24px",height:"24px",padding:"5px"}}/>
                                    
                            </div>
                            
                              <div className="d-inline-block float-end"> 
                                 <select className=" border-0 w-100 d-inline-block" style={{backgroundColor:"#F5F5F5", borderRadius:"8px", outline:"none"}}>     
                                    <option ></option>
                                    <option></option>
                                </select>
                              </div> 
                            
                          
                        
                    </div>
                    </label>
                    <div className="d-flex justify-content-end mb-3">
                        <Button onClick={(e)=>handleSubmit} className="border-0 me-2" type="submit" style={{backgroundColor: "#121C330D",color:"#121C33", borderRadius:"8px",  outline:"none"}}> CANCEL</Button>
                        <Button onClick={handleSubmit} className="border-0" type="submit" style={{backgroundColor: "#121C33", borderRadius:"8px", outline:"none"}}> CREATE CHARACTER</Button>
                    </div>
                </form>
               </Container>
            </Card>  
         
        </div>
    </Col>
  </Row>  
    )
}

export default CharacterForm
