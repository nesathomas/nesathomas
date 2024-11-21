//import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Layout from './pages/Layout'; 
// import {CounterContext, CounterProvider} from './context/Context';
// import { useContext } from 'react';
import store from './redux/store'

function App() {
  return (
    <div>
      <Provider store={store}>
     
        <Layout/>
      
           </Provider>
    </div>
  );
}

export default App;
