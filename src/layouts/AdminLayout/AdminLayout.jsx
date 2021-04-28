import AdminHeader from '../../components/AdminHeader/AdminHeader'
import './AdminLayout.scss'

const AdminLayout = ({children}) => (
  <div className="AdminLayout">
    <AdminHeader />
    <div className="main-area">
      <div className="content-block">
        {children}
      </div>
    </div>
  </div>
)

export default AdminLayout