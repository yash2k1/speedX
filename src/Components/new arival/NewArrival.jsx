import { useNavigate } from "react-router-dom";
import "./NewArrivalStyle.css";
const NewArrival=({subCategoryWiseData})=>{
        const navigate=useNavigate();
   //  smooth scrolling
const handleScroll=()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }  
return(
    <>
  
    <h1 className="newArrivalHeading">new arrival <hr/></h1>
    <div className="newArrivals">
        <div className="newArrivalContainer">
        <img src={subCategoryWiseData.find((item)=>item.subCategory==="laptops").images[0]} className="newArrivalImages"/>

                <div className="newArrivalDes"onClick={()=>{
                        handleScroll();
                        navigate(`${ subCategoryWiseData[0].category}/${ subCategoryWiseData[0].id}`);
                }}>{subCategoryWiseData.find((item)=>item.subCategory==="laptops").title}</div>
        </div>
       
        <div className="newArrivalContainer">
        <img src={subCategoryWiseData.find((item)=>item.subCategory==="home-decoration").images[0]} className="newArrivalImages"/>
                <div className="newArrivalDes"onClick={()=>{
                        handleScroll();
                        navigate(`${ subCategoryWiseData[0].category}/${ subCategoryWiseData[0].id}`);
                }}>{subCategoryWiseData.find((item)=>item.subCategory==="home-decoration").title}</div>
        </div>
       
        <div className="newArrivalContainer">
        <img src={subCategoryWiseData.find((item)=>item.subCategory==="skincare").images[2]} className="newArrivalImages"/>
                <div className="newArrivalDes"onClick={()=>{
                        handleScroll();
                        navigate(`${ subCategoryWiseData[0].category}/${ subCategoryWiseData[0].id}`);
                }}>{subCategoryWiseData.find((item)=>item.subCategory==="skincare").title}</div>
        </div>

        <div className="newArrivalContainer">
        <img src={subCategoryWiseData.find((item)=>item.subCategory==="lighting").images[0]} className="newArrivalImages"/>
                <div className="newArrivalDes"onClick={()=>{
                        handleScroll();
                        navigate(`${ subCategoryWiseData[0].category}/${ subCategoryWiseData[0].id}`);
                }}>{subCategoryWiseData.find((item)=>item.subCategory==="lighting").title}</div>
        </div>
      
    </div>
  
    </>
)
}
export default NewArrival;