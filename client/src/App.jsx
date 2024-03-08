import './App.css'
import Header from './components/Header';
import "../node_modules/bootstrap/scss/bootstrap.scss";

import { Outlet } from 'react-router-dom';

function App() {
 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App
