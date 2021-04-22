import { useSelector } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./routes"

const AppRouter = () => {
  const auth = true
  
  return auth ?
    (
      <Switch>
        {privateRoutes.map((route, index) => 
          <Route 
            path={route.path} 
            exact={true} 
            key={index}
            render={routeProps => (
              <route.layout>
                <route.Component {...routeProps}/>
              </route.layout>
            )}
          />
        )}
        <Redirect to={'/map'} />
      </Switch>
    )
    :
    (
      <Switch>
        {publicRoutes.map((route, index) => 
          <Route 
            path={route.path} 
            exact={true} 
            key={index}
            render={routeProps => (
              <route.layout>
                <route.Component {...routeProps}/>
              </route.layout>
            )}
          />
        )}
        <Redirect to={'/login'} />
      </Switch>
    )
}

export default AppRouter
