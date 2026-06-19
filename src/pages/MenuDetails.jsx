import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function MenuDetails() {
 const { id } = useParams();

 const [menu, setMenu] =
   useState(null);

 useEffect(() => {
   getMenu();
 }, []);

 async function getMenu() {
   try {
     const response = await api.get(
       `/menu/${id}`
     );

     setMenu(response.data);
   } catch (error) {
     console.log(error);
   }
 }

 if (!menu) {
   return <h2>Loading...</h2>;
 }

 return (
   <div className="details">
     <img
       src={menu.image}
       alt={menu.name}
     />

     <h1>{menu.name}</h1>

     <p>{menu.description}</p>

    

     <h3>Category</h3>
     <p>{menu.category}</p>

   

     <h3>Budget</h3>
     <p>₹ {menu.price}</p>

     <h3>Rating</h3>
     <p>{menu.rating}</p>

    

     <ul>
       {menu.attractions && (menu.attractions.map(
         (place, index) => (
           <li key={index}>{place}</li>
         )
       ))}
     </ul>
   </div>
 );
}

export default MenuDetails;