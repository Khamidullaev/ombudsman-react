import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Alert from './components/GlobalComponents/Alert/Alert';
import Loader from './components/GlobalComponents/Loader/Loader';
import { updateRegionsList } from './redux/actions/formActions';
import AppRouter from './router';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(updateRegionsList())
  }, [dispatch])

  return (
    <div className="App">
      <Alert />
      <Loader />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
