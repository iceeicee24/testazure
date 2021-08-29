import './App.css';
//import FacebookLogin from 'react-facebook-login';
//import { Card, Image } from 'react-bootstrap';
import HeaderComponent from './components/HeaderComponent';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import FeaturedUser from './components/FeaturedUser';
import SearchResult from './components/SearchResult';
import UserFilter from './components/UserFilter';

//import { Nav, PrivateRoute } from './components/nav';
//import { Home } from './components/home';
//import { EditAccount } from './components/home';
//import { Login } from './components/login';

function App() {

  //const [login, setLogin] = useState(false);
  //const [data, setData] = useState({});
  //const [picture, setPicture] = useState('');
  const [allHouses, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      //const rsp = await fetch("https://crud123.azurewebsites.net/api/test");
      const rsp = await fetch("users.json");
      const houses = await rsp.json();
      console.log(houses);
      setAllUsers(houses);
    };
    fetchHouses();
  }, []);

  /*const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }*/

  return (
    <div>
      
      <Router>
                <div className='container'>
                  <HeaderComponent userName='isaac'></HeaderComponent>
                  <UserFilter allUsers={allHouses}/>

                  <Switch>
                  <Route path="/searchresults/:user">
                      <SearchResult allUsers={allHouses}/>
                    </Route>
                    <Route path="/">
                      {/*<FeaturedUser user={featuredHouse} />*/}
                    </Route>
                  </Switch>
                </div>
              </Router>  
{/*
      <Card style={{ width: '600px' }}>
        <Card.Header>
          {!login &&
            <FacebookLogin
              appId="4433921549963647"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          {login &&
            <Image src={picture} roundedCircle />
          }
        </Card.Header>
        {login &&
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.email}
            </Card.Text>
            <Card.Text>
              <div>
              <Router>
                <div className='container'>
                  <HeaderComponent userName={data.name}></HeaderComponent>
                  <UserFilter allUsers={allHouses}/>

                  <Switch>
                  <Route path="/searchresults/:user">
                      <SearchResult allUsers={allHouses}/>
                    </Route>
                    <Route path="/">
                      <FeaturedUser user={featuredHouse} />
                    </Route>
                  </Switch>
                </div>
              </Router>  
              </div>
            </Card.Text>
          </Card.Body>
          
        }
      </Card>*/}
     
    </div>
  );

}

export default App;
