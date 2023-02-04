import Image from "next/image"
import { added, btnContainer } from "./favorite.module.scss"
import heart from "@/public/heart.svg"
import { useState } from "react"
const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <div className={btnContainer}>
      <button
        className={isFavorite ? added : ""}
        onClick={() => {
          setIsFavorite(!isFavorite)
        }}>
        <Image src={heart} alt="" />
      </button>
    </div>
  )
}

export default Favorite
