import AdminLayout from "../layouts/AdminLayout/AdminLayout"
import MainLayout from "../layouts/MainLayout/MainLayout"
import AppealAdminPage from "../pages/AppealAdminPage"
import AdvicePage from "../pages/AdvicePage"
import AnonimPage from "../pages/AnonimPage"
import AuthPage from "../pages/AuthPage"
import MainPage from "../pages/MainPage"
import AdviceAdminPage from "../pages/AdviceAdminPage"
import AdviceDetailPage from "../pages/AdviceDetailPage"
import AppealDetailPage from "../pages/AppealDetailPage"

export const privateRoutes = [
  {
    path: '/admin/appeal',
    Component: AppealAdminPage,
    layout: AdminLayout
  },
  {
    path: '/admin/advice',
    Component: AdviceAdminPage,
    layout: AdminLayout
  },
  {
    path: '/admin/advice/:id',
    Component: AdviceDetailPage,
    layout: AdminLayout
  },
  {
    path: '/admin/appeal/:id',
    Component: AppealDetailPage,
    layout: AdminLayout
  }
]

export const publicRoutes = [
  {
    path: '/',
    Component: MainPage,
    layout: MainLayout
  },

  {
    path: '/anonim',
    Component: AnonimPage,
    layout: MainLayout
  },

  {
    path: '/advice',
    Component: AdvicePage,
    layout: MainLayout
  },

  {
    path: '/login',
    Component: AuthPage,
    layout: MainLayout
  }
]
