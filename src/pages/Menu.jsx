import { useEffect, useState } from "react";
import api from "../services/api";
import MenuCard from "../components/MenuCard";
import { Link } from "react-router-dom";

function Menu() {
 const [menu, setMenu] =useState([]);
   const [search, setSearch] = useState("");
   const [category, setCategory] =
  useState("All");

 useEffect(() => {
   getMenu();
 }, []);

 async function getMenu() {
   try {
     const response = await api.get(
       "/menu"
     );

     setMenu(response.data);
   } catch (error) {
     console.log(error);
   }
 }
 async function deleteMenu(id) {

 await api.delete(
   `/menu/${id}`
 );

 setMenu(
   menu.filter(
     menu =>
     menu.id !== id
   )
 );
}

const filteredMenu =
  menu.filter(
    menu => {

      const searchMatch =
        menu.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const categoryMatch =
        category === "All" ||
        menu.category ===
          category;

      return (
        searchMatch &&
        categoryMatch
      );
    }
  );



 return (
   <>
     <h1>OUR FOOD</h1>
     <Link to="/add-menu" className='add-btn'>Add Menu</Link>
     <div className="filters">
      <input
  type="text"
  placeholder="Search Menu"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
/>
<select
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
>
  <option>All</option>
  <option>Specality Coffee</option>
  <option>Not coffee</option>
  <option>All Day Breakfast</option>
   <option>Pastries And Sweets</option>
</select>
     </div>


     <div className="menu">
       {menu.map((menu) => (
         <MenuCard key={menu.id} menu={menu}onDelete={deleteMenu}
/>
       ))}
     </div>
   </>
 );
}

export default Menu;