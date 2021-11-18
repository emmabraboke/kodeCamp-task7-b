import {Container,Col,Row,Card, Button} from 'react-bootstrap';
import planetLoader from  "../images/assets/planetLoader.svg"
const load = () => {
    return (
        <Container className="h-100">
        <div className="">
            <h1 style={{fontWeight:900, fontSize: "48px"}}>Spacious</h1>
            <div className=" d-flex justify-content-center align-content-lg-end ">
                <div className="border-0 border-white" style={{borderRadius:"39px", overflow:"hidden", position: "absolute", top:"35%" }}>
                        <Card className="border-0 py-5">
                                <Card.Img src={planetLoader} alt="Space Image" />  
                            
                        </Card> 
                 </div>
             </div>
            
            
        </div>
    </Container>
    
    )
}

export default load
