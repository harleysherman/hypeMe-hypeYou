import './App.css'
import Header from './components/Header';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { Outlet } from 'react-router-dom';

function App() {
 

  return (
    <>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App
