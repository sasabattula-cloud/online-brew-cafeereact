import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function EditMenu() {

 const { id } = useParams();

 const navigate = useNavigate();

 const [formData, setFormData] =
   useState({
     name: "",
     catagory: "",
     image: "",
     description: ""
   });

 useEffect(() => {
   getMenu();
 }, []);

 async function getMenu() {

   const response =
     await api.get(
       `/menu/${id}`
     );

   setFormData(response.data);
 }

 function handleChange(e) {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   });
 }

 async function handleSubmit(e) {

   e.preventDefault();

   await api.put(
     `/menu/${id}`,
     formData
   );

   navigate("/menu");
 }

 return (
<div className='form-container'>
   <form onSubmit={handleSubmit}>

     <input
       type="text"
       name="name"
       value={formData.name}
       onChange={handleChange}
     />

      <input
       type="text"
       name="catagory"
       value={formData.catagory}
       onChange={handleChange}
       />
     
      <input
       type="text"
       name="rating"
       value={formData.rating}
       onChange={handleChange}
       />

     <input
       type="text"
       name="image"
       value={formData.image}
       onChange={handleChange}
     />

     <textarea
       name="description"
       value={formData.description}
       onChange={handleChange}
     />

     <button  className='submit-btn'>
       Update Menu
     </button>

   </form>
</div>
 );
}

export default EditMenu;