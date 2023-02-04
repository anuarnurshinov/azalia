import star from "@/public/star.svg"
import Image from "next/image"
import { filledStar, hollowStar, rating } from "./rating.module.scss"
interface Props {
  rate: number
  count: number
}

const Rating: React.FC<Props> = ({ count, rate }) => {
  return (
    <>
      <div className={rating}>
        <Image
          className={rate >= 1 ? filledStar : hollowStar}
          src={star}
          alt="star"
        />
        <Image
          className={rate >= 2 ? filledStar : hollowStar}
          src={star}
          alt="star"
        />
        <Image
          className={rate >= 3 ? filledStar : hollowStar}
          src={star}
          alt="star"
        />
        <Image
          className={rate >= 4 ? filledStar : hollowStar}
          src={star}
          alt="star"
        />
        <Image
          className={rate == 5 ? filledStar : hollowStar}
          src={star}
          alt="star"
        />
      </div>
      <div>
        <p>
          <a>{count} отзыва</a>
        </p>
      </div>
    </>
  )
}

export default Rating
