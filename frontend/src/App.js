import {BrowserRouter,Route,Routes} from "react-router-dom";

import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";


function App() {
  return (
   <BrowserRouter>
   <Routes> 
    <Route path="/Add" element={<AddEmployee/>}/>
    <Route path="/" element={<ViewEmployee/>}/>
    <Route path="/Update/:id" element={<UpdateEmployee/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
