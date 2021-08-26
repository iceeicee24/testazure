import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {useEffect, useState, useMemo} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FeaturedUser from './components/FeaturedUser';
import SearchResult from './components/SearchResult';
import UserFilter from './components/UserFilter';

function App() {
  const [allHouses, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/users.json");
      const houses = await rsp.json();
      console.log(houses);
      setAllUsers(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className='container'>
        <HeaderComponent userName='isaac'></HeaderComponent>
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
  );
}

export default App;
