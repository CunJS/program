import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom";
import {adminRoutes} from './routes';
import Frame from "./components/Frame/index";


function App() {
  return (
    <Frame>
      <Switch>
      {adminRoutes.map(
        route=>{
          return (<Route key={route.path}  path={route.path}  
          render={routeProps=>{
            return <route.component {...routeProps}/>;
          }}
          />
      );
        }
      )}
      <Redirect to ={adminRoutes[0].path } from="/admin" />
      <Redirect to ="/404"/>
    </Switch>
    
    </Frame>
  );
}

export default App;
