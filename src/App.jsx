import { Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import LaunchPad from './Pages/LaunchPad'
import LandingPad from './Pages/LandingPad'
import Mission from './Pages/Mission'
import Rocket from './Pages/Rocket'
import Loading from './components/Loading'
import History from './Pages/History'


function App() {
  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.spacexdata.com/v3/launchpads')
  //   .then(res=>res.json())
  //   .then(data=>setData(data))
  
  // },[])



  return (
    <div>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/launchpad' element={<LaunchPad/>} />
          <Route path='/landingpad' element={<LandingPad/>} />
          <Route path='/mission' element={<Mission/>} />
          <Route path='/rocket' element={<Rocket/>} />
          <Route path='/history' element={<History/>} />
        </Routes>
      </div>

      </Suspense>
    </div>

  )
}

export default App
