import './BtnsRow.scss';
import LinkBtn from './LinkBtn/LinkBtn';


const links = [
  {languageId: "mainPage_link_advice", to: "/advice"},
  {languageId: "mainPage_link_online-reception", to: "/main"},
  {languageId: "mainPage_link_anonim-appeal", to: "/"},
  {languageId: "mainPage_link_import-equimpent", to: "/main"},
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