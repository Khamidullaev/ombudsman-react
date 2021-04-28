import './BtnsRow.scss';
import LinkBtn from './LinkBtn/LinkBtn';


const links = [
  {languageId: "mainPage_link_advice", to: "/advice"},
  {languageId: "mainPage_link_online-reception", to: "/"},
  {languageId: "mainPage_link_anonim-appeal", to: "/anonim"},
  {languageId: "mainPage_link_import-equimpent", to: "/"},
]

const BtnsRow = () => {
  return (
    <div className="BtnsRow">
      {
      links.map((link, index) => (
        <LinkBtn key={index} link={link} />
      ))
    }
    </div>
  )
}

export default BtnsRow