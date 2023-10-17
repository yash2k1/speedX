import "./Varieties.css"
import { useNavigate } from "react-router-dom";
const  Varieties=({subCategoryWiseData})=>{
    const navigate=useNavigate();
    const toViewProduct=(category,id)=>{
        navigate(`/${category}/${id}`);
        console.log("to singlePage")
      } 
         //  smooth scrolling
const handleScroll=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  } 
return(
    <>
        <h1 className="varietieHeading">Categories <hr/></h1>
        <div className="varieties">
 { subCategoryWiseData.slice(10,14).map((item,index)=> {
   return (
    <div className="varietiesContainer"  key={index}> 
            <img src={item.images[1]} className="varietiesImages"></img>
               { item.stock<7&&<div className="stock">{"Limited stock "+item.stock+" left"}</div>}
            <button onClick={()=>{
                handleScroll();
                toViewProduct(item.category,item.id);
                }} className="varietiesBtn hover">
            <div className="varietiesBg" ></div>
               <span className="varietiesBrnText">View Product</span>
                </button>
    </div>
   )
}

)
}
</div>
       
    </>
)
}
export default Varieties;