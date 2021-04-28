import Pagination from 'rc-pagination'
import { useEffect, useState } from 'react'
import { FormattedDate, FormattedTime } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { updateAppealsList } from '../../redux/actions/adminActions'
import './AdminForms.scss'
import 'rc-pagination/assets/index.css'
import { useHistory } from 'react-router'

const perPage = 10

const AdminAppealForm = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const appealsList = useSelector(state=>state.admin.appealsList)
  const pageCount = useSelector(state=>state.admin.pageCount)
  const dispatch = useDispatch()

  const {push} = useHistory()

  useEffect(() => {
    dispatch(updateAppealsList(currentPage, perPage))
  }, [currentPage])
  
  return (
    <div className="AdminAppealForm AdminForm">
      <h1 className="title" style={{marginBottom: "50px"}}>Anonim murojaat</h1>
      <Pagination defaultCurrent={1} current={currentPage} pageSize={perPage} total={perPage * pageCount} onChange={(current)=>setCurrentPage(current)}/>  
    { appealsList &&  <div className="table-wrapper">
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Organ nomi</th>
                <th>Organ darajasi</th>
                <th>Mansabdor shaxs</th>
                <th>Jo'natilgan vaqt</th>
                <th>Shahar</th>
                <th>Tuman</th>
            </tr>
            </thead>
            <tbody>
            {
            appealsList.map(element=>(
                <tr key={element.id} onClick={()=>push(`/admin/appeal/${element.id}`)}>
                    <td>{element.id}</td>
                    <td>{element.company_name}</td>
                    <td>{element.company_level}</td>
                    <td>{element.company_person}</td>
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

export default AdminAppealForm