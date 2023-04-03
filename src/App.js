import React, { useRef } from 'react';
import './App.css';
//importar mis componentes
import Show from './Views/Show';
import Edit from './Views/Edit';
import Create from './Views/Create';


// importar lo necesario para el enrutador
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

//Importacion de navbar
import Navbar from './Views/Navbar';



function App() {



  return (
    <div className="App">
      
           <React.Fragment>
      <Navbar> </Navbar>
     </React.Fragment>

      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Show />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>



    </div>

   
  );
}

export default App;