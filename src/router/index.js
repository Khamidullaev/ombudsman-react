import { useSelector } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./routes"

const AppRouter = () => {
  const auth = useSelector(state=>state.user.isAuth)
  
  return auth ?
    (
      <Switch>
        {privateRoutes.map((route, index) => 
          <Route 
            path={route.path} 
            exact={true} 
            key={route.path}
            render={routeProps => (
              <route.layout>
                <route.Component {...routeProps}/>
              </route.layout>
            )}
          />
        )}
        <Redirect to={'/admin/appeal'} />
      </Switch>
    )
    :
    (
      <Switch>
        {publicRoutes.map((route, index) => 
          <Route 
            path={route.path} 
            exact={true} 
            key={route.path}
            render={routeProps => (
              <route.layout>
                <route.Component {...routeProps}/>
              </route.layout>
            )}
          />
        )}
        <Redirect to={'/main'} />
      </Switch>
    )
}

export default AppRouter
