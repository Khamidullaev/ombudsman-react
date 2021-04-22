import AuthLayout from "../layouts/AuthLayout/AuthLayout"
import MainLayout from "../layouts/MainLayout/MainLayout"
import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage"

export const publicRoutes = [
  {
    path: '/login',
    Component: LoginPage,
    layout: AuthLayout
  }
]

export const privateRoutes = [
  {
    path: '/map',
    Component: MainPage,
    layout: MainLayout
  }
]
