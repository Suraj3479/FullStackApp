import React from "react";
import {BrowserRouter as Router,Route, Redirect, Switch} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./users/pages/Users"
import UserPlaces from "./places/pages/UserPlaces";
import NewPlaces from "./places/pages/NewPlaces";

function App(){
   return (
   <Router>
   <MainNavigation />
   <main>
   <Switch>
    <Route path="/" exact>
       <Users />
    </Route>
    <Route path='/:userId/places' exact>
       <UserPlaces />
    </Route>
    <Route path="/place/new" exact>
       <NewPlaces />
    </Route>
    <Redirect to="/" />
    </Switch>
    </main>
   </Router>
   );
 };

 export default App;