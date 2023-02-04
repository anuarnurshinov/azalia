"use client"
import Banner from "./components/banner/banner"
import Header from "./components/header/header"
import styles from "./page.module.scss"
import { Product } from "./types/types"
import Image from "next/image"
import arrow from "@/public/arrow.svg"
import room1 from "@/public/room.png"
import room2 from "@/public/room2.jpeg"
import Card from "./components/card/card"

interface Props {
  products: Product[] | null
}

const Home: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerAndBanner}>
        <Header />
        <Image src={arrow} alt="arrow" />
        <Banner image={room1} />
        <Banner image={room2} />
      </div>
      {products?.map((el) => (
        <div key={el.id} className={styles.cardContainer}>
          <Card {...el} />
        </div>
      ))}
    </div>
  )
}
export default Home
