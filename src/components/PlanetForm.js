import { useState } from 'react';
import {Container,Col,Row,Card,Button} from 'react-bootstrap';
import cancel from '../images/cancel.svg'
import { Link } from 'react-router-dom';
const PlanetForm = ({newPlanet,submit}) => {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [pop, setPop] = useState("")
   
    

    const handleSubmit = ()=>{
       setImage("")
       setName("")
       setPop("")
    }


    return (
     <Row className="d-flex justify-content-center"> 
        <Col md={8} lg={6} sm={12}> 
            <div className="my-4 " style={{borderRadius:"35px", overflow:"hidden"}}>
            <Card className="py-4 px-3 border-0">
                    <Container>
        
                    <form onReset={handleSubmit} onSubmit={(e)=>newPlanet({image,name,pop},e) }>
                        <div className="d-flex justify-content-end">
                            <Link to="/component/Planet"> <img src={cancel} style={{width:"32px",height:"32px", backgroundColor: "#F2F2F2", borderRadius:"8px" , padding:"5px"}}/> </Link>
                        </div>
                        <h3 style={{fontWeight:900}}>Planet</h3> 
                        <div  className="mb-3">
                            <label className="w-100">
                                <p className="fw-bold p-2"><small>Image</small></p>
                                <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className="w-100 border-0 p-2" style={{backgroundColor:"#F5F5F5", borderRadius:"8px", outline:"none" }} />
                                <p className="fw-bold" style={{opacity:0.6}}><small>Paste the URL of JPG or PNG of max 20kb</small></p>
                            </label>
                        </div>
                        <div className="mb-3"> 
                            <label className="w-100">
                                <p className="fw-bold "><small>Name</small></p>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="w-100 border-0 p-2" style={{backgroundColor:"#F5F5F5", borderRadius:"8px", outline:"none"}}/>
                            </label>
                        </div>
                        <div  className="mb-3">
                            <label className="w-100">
                                <p className="fw-bold "><small>Description</small></p>
                            <textarea name="" id="" rows="4" value={pop} onChange={(e)=>setPop(e.target.value)} className="w-100 border-0 p-2" style={{backgroundColor:"#F5F5F5", borderRadius:"8px", outline:"none", resize:"none"}}></textarea>
                            </label>
                        </div>
                        <div className="mb-3 fw-bold">
                            {submit?<p className="text-danger" style={{opacity:0.6}}><small>Bummer! we can't create this planet right now. Probably a black hie. Try again later please</small></p>:""}
                        </div>
                        
                        <div className="d-flex justify-content-end">
                            <Button  className="border-0 me-2" type="reset" style={{backgroundColor: "#121C330D",color:"#121C33", borderRadius:"8px"}}> CANCEL</Button>
                            <Button className="border-0 "  type="submit" style={{backgroundColor: "#121C33", borderRadius:"8px"}}> CREATE PLANET</Button>
                        </div>
                    </form>
                </Container>
                </Card>  
            
            </div>
        </Col>
     </Row>   
    )
}

export default PlanetForm
