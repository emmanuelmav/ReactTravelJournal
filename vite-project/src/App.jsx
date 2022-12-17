import './App.css'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import data from './data'
// import Card from './Components/Card'

function App() {
  //We are mapping over our data array
  // returning a Card component
  // passing different data to its props
  // passsing the object element card
  // Allows us to access the properties 
  // in the data array of objects
  // and directly use it in our card component
  // i.e props.card.img etc
  const cards = data.map(card => {
    return <Card
      key={card.id}
      card={card}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div>
        {cards}
      </div>
    </div>
  )
}

export default App
