import Page from "../components/GlobalComponents/Page/Page";
import AnonimFormContainer from "../containers/AnonimFormContainer";


const AnonimPage = () => (
  <div className="AnoimPage" style={{width: '100%', display:'flex', justifyContent:'center'}}>
    <Page>
      <AnonimFormContainer />
    </Page>
  </div>
)

export default AnonimPage