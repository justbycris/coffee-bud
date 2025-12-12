import { useState } from 'react'
import { Header } from '../components/layout/Header/Header'
import { CoffeeCard } from '../components/user/CoffeeCard'


function Home() {
  const [count, setCount] = useState(0)
  console.log('Hello Home')

  return (
    <>
    <Header/>
    <CoffeeCard name={'Tenz'} user={'Cris'} address={"Midtown"} type={"Coffee Shop"} product={'Vanilla Ice Latte'} score={"5"}/>
    </> 
  )
}

export default Home;
