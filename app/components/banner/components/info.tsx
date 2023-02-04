import styles from "./info.module.scss"

const Info = () => {
  return (
    <>
      <a href="#" className={styles.link}>
        <p>
          {" "}
          <span>
            <span> -25%</span>
          </span>{" "}
          на товары для кабинета
        </p>
      </a>
      <a href="#" className={styles.link}>
        <p className={styles.smallLink}>Выбрать</p>
      </a>
    </>
  )
}

export default Info
