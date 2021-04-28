import Pagination from 'rc-pagination'
import { useEffect, useState } from 'react'
import { FormattedDate, FormattedTime } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { updateAdvicesList } from '../../redux/actions/adminActions'
import './AdminForms.scss'
import 'rc-pagination/assets/index.css'
import { useHistory } from 'react-router'

const perPage = 10

const AdminAdviceForm = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const advicesList = useSelector(state=>state.admin.advicesList)
  const pageCount = useSelector(state=>state.admin.pageCount)
  const dispatch = useDispatch()
  const {push} = useHistory()

  useEffect(() => {
    dispatch(updateAdvicesList(currentPage, perPage))
  }, [currentPage])
  
  return (
    <div className="AdminAdviceForm AdminForm">
      <h1 className="title" style={{marginBottom: "50px"}}>Huquqiy maslahat</h1>
      <Pagination defaultCurrent={1} current={currentPage} pageSize={perPage} total={perPage * pageCount} onChange={(current)=>setCurrentPage(current)}/>  
    { advicesList &&  <div className="table-wrapper">
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FIO</th>
                <th>Telefon raqam</th>
                <th>Jo'natilgan vaqt</th>
                <th>Shahar</th>
                <th>Tuman</th>
            </tr>
            </thead>
            
            <tbody>
            {
            advicesList.map(element=>(
                <tr key={element.id} onClick={()=>push(`/admin/advice/${element.id}`)}>
                    <td>{element.id}</td>
                    <td>{element.full_name}</td>
                    <td>{element.phone}</td>
                    <td>
                    <b><FormattedTime value={element.created_at}/></b>,&nbsp; <FormattedDate
                        value={element.created_at}
                        day="numeric"
                        month="2-digit"
                        year="numeric"
                    /></td>
                    {element.region && <td>{element.region.name.uz}</td>}
                    {element.district && <td>{element.district.name.uz}</td>}
                </tr>
            ))
            }
          </tbody>
        </table>
      </div>}
    </div>
  )
}

export default AdminAdviceForm