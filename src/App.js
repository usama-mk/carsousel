import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DemoCarousel from './Pages/carousel';
import Login from './Pages/Login';


function App() {
  return (

    <div className="App">

      <Switch>
      <Route exact path='/carsousel' render={()=>(<DemoCarousel adminCheckP={false} />)}  />
     <Route exact path='/admin' component={Login}  />
     <Route exact path='/admin/carsousel' component={DemoCarousel}/>
    
     </Switch>
    
    </div>
  );
}

export default App;
