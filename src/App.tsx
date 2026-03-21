import { useState } from 'react'
import './App.css'
import Pifagor from './components/Pifagor'
import Energy from './components/Energy'
import Cylinder from './components/Cylinder';
import Logarifm from './components/Logarifm';
import Quadratic from './components/Quadratic';
import SumSquare from './components/SumSquare';
import Water from './components/Water';

function App() {
  const [count, setCount] = useState(0);

  const formulaComponents = [
    <Energy />,
    <Pifagor />,
    <Cylinder />,
    <Quadratic />,
    <SumSquare />,
    <Water />,
    <Logarifm />,
  ];




  return (
    <>
      <section className="formula-section">
        <div className="formula">
          <h2>Формулы для верстки</h2>
          <ul>
            {formulaComponents.map((formula, index) => {
              return <li key={index}>{index + 1}.  {formula}</li>
            })}
          </ul>
        </div>
      </section>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1000)}>
          count is +
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count - 1000)}>
          count is -
        </button>
      </div> */}
    </>
  )
}

export default App
