import React, { useEffect } from "react";
import {Link, useHistory, Switch, Route, useRouteMatch} from "react-router-dom";
import Edit from "./Edit";
import NotFound from "./NotFound";
import View from "./View";

function Profile({login}) {

  const history = useHistory();

  useEffect(()=>{
    if(!login) {
      history.push("/");
    }
  },[login, history]);

  const {path, url} = useRouteMatch();

  return(
    <>
      <h2>Profile Page</h2>

      <ul className="nav">
        <li>
          <Link to={`${url}/view`}><h3>View Profile</h3></Link>
        </li>
        <li>
          <Link to={`${url}/edit`}><h3>Edit Profile</h3></Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/view`} component={View} />
        <Route path={`${path}/edit`} component={Edit} />
      </Switch>
    </>
  );
}

export default Profile;