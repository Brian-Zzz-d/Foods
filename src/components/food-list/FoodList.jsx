import foods from "../../services/foods/Foods"
import "./FoodList.css"

function FoodList() {
  return (
    <div className="foodlist-container">
      {
        foods.map((f, index) => (
          <div className="food-list-box" key={index}>
            <div>
              <img src={`/img/${f.img}`} alt={f.description} />
            </div>
            <p>{f.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default FoodList


