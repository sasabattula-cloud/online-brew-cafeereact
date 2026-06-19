import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuDetails from "../pages/MenuDetails";
import AddMenu from "../pages/AddMenu";
import EditMenu from "../pages/EditMenu";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";




function AppRoutes() {
 return (
   <Routes>
     <Route
       path="/"
       element={<Home />}
     />

     <Route
       path="/menu"
       element={<Menu />}
     />

     <Route
       path="/menu/:id"
       element={<MenuDetails />}
     />
     <Route
 path="/add-menu"
 element={<AddMenu />}
/>
<Route
 path="/edit-menu/:id"
 element={<EditMenu />}
/>
<Route
  path="/register"
  element={<Register />}
/>
<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/logout"
  element={<Logout />}
/>
<Route path="/favorites" element={<Favorites/>}
/>

   </Routes>
 );
}

export default AppRoutes;