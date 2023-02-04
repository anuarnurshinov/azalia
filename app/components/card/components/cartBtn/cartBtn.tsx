import { useState } from "react"
import {
  addBtn,
  amountBtn,
  cartBtnContainer,
  added,
} from "./cartBtn.module.scss"

const CartBtn = () => {
  const [isInCart, setIsInCart] = useState(false)
  const [count, setCount] = useState(1)
  const decrease = () => {
    if (count > 1) setCount(count - 1)
  }
  const increase = () => {
    setCount(count + 1)
  }
  return (
    <div className={cartBtnContainer}>
      <div className={amountBtn}>
        <div>
          <p>
            <span onClick={decrease}>–</span> {count}{" "}
            <span onClick={increase}>+</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setIsInCart(!isInCart)
        }}
        className={`${addBtn} ${isInCart ? added : ""}`}>
        {isInCart ? "В корзине" : "В корзину"}
      </button>
    </div>
  )
}

export default CartBtn
