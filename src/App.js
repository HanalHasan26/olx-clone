import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Post from './Context/PostContext';



import Home from './Pages/Home';
import Login from './Pages/Login';
import { AuthContext, Context } from './Context/Context';
import Create from './Components/Create/Create';
import View from './Pages/ViewPost';

import FilteredContext from './Context/FilteredContext';
import FilteredProducts from './Pages/FilteredProducts';
import UserMenu from './Pages/UserMenu';


function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} =useContext(Context)
  
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>  
<Post>
    <BrowserRouter>
     <FilteredContext>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/create'>
        <Create/>
      </Route>
      <Route path='/view'>
        <View/>
      </Route>           
      <Route path='/filter'>
        <FilteredProducts/>
      </Route>           
      <Route path='/userMenu'>
        <UserMenu/>
      </Route>           
     </FilteredContext>
    </BrowserRouter>
</Post>          
    </div>
  );
}

export default App;
