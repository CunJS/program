import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {HashRouter ,Switch,Route,Redirect} from 'react-router-dom';
import './index.css';
import {otherRoutes} from './routes';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(

  <HashRouter>
    <Switch>
      <Route path="/admin" render={routeProps=><App{...routeProps}/>}/>
      {otherRoutes.map(
        route=>{
          return <Route key={route.path}  {...route}/>;
        }
      )}
      <Redirect to ="/404"/>
    </Switch>
  </HashRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
