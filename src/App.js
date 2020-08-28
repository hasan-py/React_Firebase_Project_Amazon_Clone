import React,{useEffect,createContext,useReducer} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {auth} from "./components/firebase";
import {initialState,reducer} from "./components/Reducer";

export const StateContext = createContext();

function App() {
  const [data,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    let unsubscribe = auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({type:"SET_USER",payload:authUser})
      }else{
        dispatch({type:"SET_USER",payload:null})
      }
    })
    return ()=>{
      unsubscribe();
    }
  },[])

  console.log(data.user)

  return (
    <StateContext.Provider value={{data,dispatch}}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <Checkout />
            </Route>
            <Route path="/signin">
              <Login/>
            </Route>
            <Route path="/signup">
              <h1>Signup!!</h1>
            </Route>
            <Route>
              <Header/>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
