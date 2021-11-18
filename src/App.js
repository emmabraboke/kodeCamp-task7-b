import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row,Card} from 'react-bootstrap';
import Planet from './components/Planet';
import Character from './components/Character';
import Spacious from './components/Spacious';
import Space from './components/Space';
import Allcharacters from './components/Allcharacters';
import Friends from './components/Friends';
import PlanetForm from './components/PlanetForm';
import CharacterForm from './components/CharacterForm';
import Load from './components/Load';
import {BrowserRouter as Router,Route,Switch, useLocation} from 'react-router-dom';



// Planet images
import planet1 from './images/planets/planet1.svg'
import planet2 from './images/planets/planet2.svg'
import planet3 from './images/planets/planet3.svg'
import planet4 from './images/planets/planet4.svg'
import planet5 from './images/planets/planet5.svg'
import planet6 from './images/planets/planet6.svg'
import planet7 from './images/planets/planet7.svg'
import planet8 from './images/planets/planet8.svg'
import planet9 from './images/planets/planet9.svg'


// Character images
import character1 from './images/characters/character1.png';
import character2 from './images/characters/character2.png';
import character4 from './images/characters/character4.png';
import character5 from './images/characters/character5.png';
import character6 from './images/characters/character6.png';
import character7 from './images/characters/character7.png';
import character8 from './images/characters/character8.png';
import character10 from './images/characters/character10.png';
import character16 from './images/characters/character16.png';
import character14 from './images/characters/character14.png';
import character9 from './images/characters/character9.png';
import character12 from './images/characters/character12.png';
import character15 from './images/characters/character15.png';



function App(){
  
  const otherplanet =[ {
    name: "Planet Alpha",
    pop: "pop: 256",
    id:1,
    image: planet9
  },
  {
    name: "Planet Alpha",
    pop: "pop: 256",
    id:2,
    image: planet8
  },
  {
    name: "Planet Alpha",
    pop: "pop: 256",
    id:3,
    image: planet7
  },
  {
    name: "Planet Alpha",
    pop: "pop: 256",
    id:4,
    image: planet6
  },
  {
    name: "Planet Alpha",
    pop: "pop: 256",
    id:5,
    image: planet5
  },
  {
    name: "Planet Alpha",
    pop: "pop: 256",
    id:6,
    image: planet1
  },
  {
    name: "Planet Alpha",
    pop: "pop: 256",
    id:7,
    image: planet2
  },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:8,
      image: planet2
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:9,
      image: planet2
    },
    {
    name: "Planet Alpha",
    pop: "256",
    id:10,
    image: planet4
  },
  {
    name: "Planet Alpha",
    pop: "256",
    id:11,
    image: planet7
  },
  {
    name: "Planet Alpha",
    pop: "256",
    id:12,
    image: planet5
  },
 ]
  
  const planets1 = [
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:1,
      image: planet9
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:2,
      image: planet8
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:3,
      image: planet7
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:4,
      image: planet6
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:5,
      image: planet5
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:6,
      image: planet1
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:7,
      image: planet2
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:8,
      image: planet4
    },
    {
      name: "Planet Alpha",
      pop: "pop: 256",
      id:9,
      image: planet9
    },
  
  ]

  const [planets, setPlanets] = useState(otherplanet)
  const [removePlanet, setRemovePlanet] = useState(false);
 // set planet borders and switch planets
  const [borders, setBorder] = useState({id:"4", location:"Alpha"});
  const handleRemovePlanet = (name,id, locations ) =>{
    setRemovePlanet(name);
    setBorder({id, locations})
    allPlanets(name)
  }


  

// set character borders and switch character on sidebar
  const [cborders, setCborders] = useState({id:"3", person: "Jane Cooper", description:"Jane is really nice person. She's been living on planet Alpha for the last 10 years."})
  const [removecharacter, setRemoveCharacter] = useState(false);
  const handleRemoveCharacter = (name,id,description,person) =>{
    setRemoveCharacter(name);
    setCborders({id, description, person})
    
   
  }

  

 // Switch all planets between 12 and 9 
 const allPlanets = (name) =>{
  if (!name){
   setPlanets(otherplanet)
  }
  else if(name)
  {
    setPlanets(planets1)
  }
 }


 
 
 
  // Create new plant
  const [submit, setSubmit] =useState(false)
  const newPlanet = (name,e)=>{
    e.preventDefault()

    name.image==="" && name.name==="" && name.pop===""? setSubmit(true) : setSubmit(false)
    
    if(name.image==="" && name.name==="" && name.pop===""? false: true){
    const id =planets.length+1
    const planetObj= {...name,id}
    setPlanets([...planets,planetObj])
    }
    else{
      setPlanets([...planets])
    }
  }
 
// Characters data

  const [characters, setCharacter] = useState([
    {
      name: "Brookyln Simmons",
      id:1,
      image: character7,
      friends: "23 friends",
      description: "Brooklyn is really nice person. She's been living on planet Alpha for the last 10 years."
    },
    {
      name: "Camero Williamson",
      id:2,
      image: character15,
      friends: "23 friends",
      description: "Camero is really nice person. He's been living on planet Alpha for the last 10 years."
    },
    {
      name: "Leslie Alexander",
      id:3,
      image: character2,
      friends: "23 friends",
      description: "Leslie is really nice person. She's been living on planet Alpha for the last 5 years."
    },
    {
      name: "Kristin Waston",
      id:4,
      image: character8,
      friends: "23 friends",
      description: "Kristin is really nice person. She's been living on planet Alpha for the last 10 years."
    },
    {
      name: "Jenny Wilson",
      id:5,
      image: character5,
      friends: "23 friends",
      description: "Jenny is really nice person. She's been living on planet Alpha for the last 5 years."
    },
    {
      name: "Marvin Mckinney",
      id:6,
      image: character12,
      friends: "23 friends",
      description: "Marvin is really nice person. He's been living on planet Alpha for the last 30 years."
    },
    {
      name: "Jerome Bell",
      id:7,
      image: character6,
      friends: "23 friends",
      description: "Jerome is really nice person. He's been living on planet Alpha for the last 15 years.",
    },
    {
      name: "Guy Hawkins",
      id:8,
      image: character4,
      friends: "23 friends",
      description: "Guy is really nice person. He's been living on planet Alpha for the last 20 years.",
    },

    {
      name: "Robert Fox",
      id:9,
      image: character10,
      friends: "23 friends",
      description: "Robert is really nice person. She's been living on planet Alpha for the last 10 years."
    },
  ])

  

   const handleNewCharacter = (name,e) =>{
      const id = characters.length+1
      const characterObj= {...name,id}
      setCharacter([...characters, characterObj])
      
    }


  const [friends, setFriends]= useState([
    {
        name: "Elene Pena",
        body: "Amer minim non deserunt ullmco e",
        image: character9,
        id: 1,
    },
    {
        name: "Brookly Simmons",
        body: "23 friends",
        image: character16,
        id: 2
    },
    {
        name: "Kriston Waston",
        body: "Amer minim non deserunt ullmco e",
        image: character4,
        id: 3
    },
    {
        name: "Cody Fisher",
        body: "Amer minim non deserunt ullmco e",
        image: character1,
        id: 4,
    },
    {
        name: "courtney Henry",
        body: "Amer minim non deserunt ullmco e",
        image: character14,
        id:5,
    },
    {
        name: "Annette Black",
        body: "Amer minim non deserunt ullmco e",
        image: character5,
        id:6,
    },
])
  const [load, setLoad] = useState(false)
  useEffect(()=>{
    setLoad(false)
   setTimeout(()=>setLoad(true),900)
  
  },[])
  
  

  const [addPlanet, setAddPlanet] = useState(false)

  const handleAddPlanet = (planet)=>{
      setAddPlanet(planet)
  }
  
  
  

    
  
  

  return(
    <Container className="my-5">
        {load ? <Router> 
          <Switch>
        <Route exact path="/component/Planet">
              <Planet borders={borders} planets={planets} handleRemovePlanet={handleRemovePlanet} removePlanet={removePlanet}/>
            
        </Route>

        <Route  exact path="/component/Allcharacter">
          <Allcharacters cborders={cborders} characters={characters}handleRemoveCharacter={handleRemoveCharacter} removecharacter={removecharacter} friends={friends}/> 
        </Route>
        <Route exact path="/component/PlanetForm">
               <PlanetForm submit={submit} newPlanet={newPlanet}/>
        </Route>
        <Route exact path="/component/CharacterForm">
            <CharacterForm handleNewCharacter={handleNewCharacter}/>
        </Route>
        
        <Route>
        <Space  />
        </Route>
    
      </Switch>
      </Router> : <Load/>}
    </Container>
  )
}

export default App;
