import { baseURL } from "@/app/api/axios"
import { Product } from "@/app/types/types"
import styles from "./card.module.scss"
import Image from "next/image"
import Rating from "./components/rating/rating"
import Cart from "./components/cartBtn/cartBtn"
import Favorite from "./components/favourite/favorite"
import CartBtn from "./components/cartBtn/cartBtn"
import Hit from "./components/hit/hit"

interface Props extends Product {}

const Card: React.FC<Props> = ({
  image,
  category,
  rating,
  title,
  price,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <Image fill src={image} alt="productImage" />
      </div>
      <div className={styles.categoryAndRating}>
        <div className="category">
          <p>{category}</p>
        </div>
        <Rating {...rating} />
      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.price}>
        <p>
          {Math.round(price * 70)} ₽<span>/шт</span>
        </p>
      </div>
      <div className={styles.buttons}>
        <CartBtn />
        <Favorite />
      </div>
      {rating.count > 300 ? <Hit /> : ""}
    </div>
  )
}

export default Card
