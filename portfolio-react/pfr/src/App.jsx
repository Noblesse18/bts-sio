import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from "./pages/NotFound";


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>

        <Route path="*" element={<NotFound/>}/>  //**quand on ne trouve pas la pages, tout page confondu, on tombera sur cette NotFound page */
      </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App
