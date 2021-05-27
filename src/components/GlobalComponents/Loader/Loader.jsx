import { useSelector } from 'react-redux'
import { Transition } from 'react-transition-group'
import './Loader.scss'

const Loader = () => {
  const loader = useSelector(state=>state.app.loader)
  
  return (
    <Transition
        in={loader}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <div className={`Loader ${state}`}>
            <div className="loader"></div>
          </div>
        )}
      </Transition>
    
  )
}

export default Loader