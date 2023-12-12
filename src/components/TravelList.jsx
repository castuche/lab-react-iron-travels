import travelPlansData from "/src/assets/travel-plans.json";
import classes from "/src/TravelList.module.css";
import { useState } from "react";

function TravelList (){

    const [travelPlan, setTravelPlan] = useState(travelPlansData);

    const clickToDelete = id => {
        const  filteredPlan = travelPlan.filter(eachTravelPlansData =>{
            return eachTravelPlansData.id !== id;
        }); setTravelPlan(filteredPlan);
    }



    return (
        <div className={classes.mainBox}>
            <ul>
            {travelPlan.map((object) => (
                    <div className={classes.cards} key={object.id}>
                    <div className={classes.image}>
                        <img src={object.image}/>
                    </div>
                    <div className={classes.text}>
                        <h2>{object.destination}</h2>
                        <p>({object.days} Days)</p>
                        <p>{object.description}</p>
                        <p><span className={classes.bold}>Price:</span> {object.totalCost} €</p>
                        {object.totalCost<=350 && <p className={classes.label}>Great Deal</p>}
                        {object.totalCost>=1500 && <p className={classes.label}>Premium</p>}
                        {object.allInclusive && <p className={classes.label}>All-Inclusive</p> }

                       
                        <button onClick={()=> clickToDelete(object.id)} className={classes.deleteButton}>delete</button>
                    </div>
                    </div>
                
            ))}
            </ul>
        </div>
    )
}

export default TravelList ;