import './App.css'
import MyClassComp from './MyClassComp'
import MyCardComp from './MyCardComponent'
import MyMapComponent from './MyMapComponent'

function App() {
  return (
    <>
      <MyClassComp propName="Prop Name" anotherProp="Another Prop" />
      <MyCardComp />
      <MyMapComponent />
    </>
  )
}

export default App
