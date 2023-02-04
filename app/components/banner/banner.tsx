import styles from "./banner.module.scss"
import Image, { StaticImageData } from "next/image"
import Info from "./components/info"

interface Props {
  image: StaticImageData
}

const Banner: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <Image src={image} alt="room" />
      </div>
      <div className={styles.info}>
        <Info />
      </div>
    </div>
  )
}

export default Banner
