import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Suspense } from 'react';
import DefaultLayout from './containers';
import Home from './components/Home';
import CatsList from './components/CatsList';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={< Home />} />      
          
          {<Route
            path="/cats/list"
            element={
              <Suspense fallback={<div>'...Loading data'</div>}>
                <CatsList />
              </Suspense>
            }
          />}
          {<Route
            path="/cats/card"
            element={
              <Suspense fallback={<div>'...Loading data'</div>}>
                <Card />
              </Suspense>
            }
          />}
         
        </Route>
      </Routes>
    </BrowserRouter>

  );

}
export default App;
