"use client"
import { useEffect, useState } from "react"
import { client } from "./api/axios"
import Home from "./home"
import { Product } from "./types/types"

const HomeContainer = () => {
  const [products, setProducts] = useState<Product[] | null>(null)
  const getProducts = async () => {
    const { data } = await client.get<Product[]>("products")
    if (data) {
      data.splice(9, data.length)
      setProducts(data)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  const props = {
    products,
  }
  return <Home {...props} />
}

export default HomeContainer
