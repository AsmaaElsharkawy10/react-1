
import Card from "./components/card"
export default function App()
{
  return (
    <div>
    <div className="cards">
    <h1 className="cards_title">The Trips</h1>
    <div className="cards_container">
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
    </div>
  )
}