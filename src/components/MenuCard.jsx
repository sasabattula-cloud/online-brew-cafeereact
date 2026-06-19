import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/FavoriteSlice";

function MenuCard({ menu,onDelete }) {
  const dispatch=useDispatch()
  function handleFavorite() {

    dispatch(
      addFavorite(menu)
    );

  }

 return (
   <div className="card">
     <img
       src={menu.image}
       alt={menu.name}
     />

     <h2>{menu.name}</h2>

    

     <p>{menu.category}</p>

     <p>⭐ {menu.rating}</p>

     <div className="card-actions">
 <Link
   className="view-btn"
   to={`/menu/${menu.id}`}
 >
   View
 </Link>

 <Link
   className="edit-btn"
   to={`/edit-menu/${menu.id}`}
 >
   Edit
 </Link>

 <button
   className="delete-btn"
   onClick={() => onDelete(menu.id)}
 >
   Delete
 </button>
 
 <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        ❤ Add To Favorites
      </button>

 

</div>


   </div>
 );
}

export default MenuCard;