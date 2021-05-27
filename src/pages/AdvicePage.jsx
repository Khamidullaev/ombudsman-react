import Page from "../components/GlobalComponents/Page/Page";
import AdviceFormContainer from "../containers/AdviceFormContainer";
import './pages.scss'

const AdvicePage = () => (
  <div className="AdvicePage page" style={{width: '100%', display:'flex', justifyContent:'center'}}>
    <Page>
      <AdviceFormContainer />
    </Page>
  </div>
)

export default AdvicePage