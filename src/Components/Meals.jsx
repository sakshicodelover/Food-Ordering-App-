import { useState, useEffect } from "react";
import MealItem from "./MealItem";
export default function Meals() {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    console.log('hello')
    async function fetchMeals() {
      let resp = await fetch('http://localhost:3000/meals');
      if (resp.ok) {
        const resData = await resp.json();
        setLoadData(resData);
      }
    }
    fetchMeals();
  }, [])

  return (
    <>
      <ul id="meals">
        {loadData.map((meal) => {
          return (
            <MealItem key={meal.id} meal={meal}></MealItem>
          )
        })}
      </ul>
    </>
  )
}