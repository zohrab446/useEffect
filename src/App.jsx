import { useEffect, useState } from 'react'
import './App.css'
import Debugging from './Debugging';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zaman çalışır")
    //veritabanından ürünleri getir ve listele.

  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.")
    //veritabanından ürünleri getir ve listele.
  }, [])

  useEffect(() => {
    console.log("ilk render edilidiğinde ve FİRSTNAME veya LASTNAME state değerlerinde değişiklik olduğunda çalışır.")
  }, [firstName, lastName])

  // useEffect(() => {
  //   console.log("ilk render edilidiğinde ve LASTNAME state değeri değiştiğinde çalışır.")
  // }, [lastName])

  return (
    <div>
      {/* <div><button onClick={() => setFirstName("Enes")}>Adı Değiştir</button></div>
      <div><button onClick={() => setLastName("Bayram")}>Soyismi Değiştir</button></div> */}

      <Debugging />
    </div>
  )
}

export default App
