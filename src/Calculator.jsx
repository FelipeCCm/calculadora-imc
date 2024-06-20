import { useState } from "react";

function Calculator() {
  
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(0);
    const [message, setMessage] = useState('');

    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
        document.documentElement.classList.toggle('dark');
      };

    function enterKeyDown(e) {
      e.key === 'Enter' ? imcCalc() : '';
    }

    function handleHeightChange(e) {
      setHeight(parseFloat(e.target.value))
    }

    function handleWeightChange(e) {
      setWeight(parseFloat(e.target.value))
    }

    function imcCalc() {
      const calculatedResult = (weight / (height / 100) ** 2).toFixed(2);
      setResult(calculatedResult);

      let message = '';
      switch(true) {
        case calculatedResult <= 18.5:
          message = `Seu IMC é: ${calculatedResult} Classificação: Magreza`;        
          break;

        case calculatedResult > 18.5 && calculatedResult <= 25.0:
          message = `Seu IMC é: ${calculatedResult} Classificação: Normal`;       
          break;

        case calculatedResult > 25.0 && calculatedResult <= 30.0:
          message = `Seu IMC é: ${calculatedResult} Classificação: Sobrepeso`;
          break;

        case calculatedResult > 30.0 && calculatedResult <= 40.0:
          message = `Seu IMC é: ${calculatedResult} Classificação: Obesidade`;
          break;

        case calculatedResult > 40.0:
          message = `Seu IMC é: ${calculatedResult} Classificação: Obesidade grave`;
          break;
      }
      setMessage(message);
    }
  
  return(
    <>
      <div className="container">
      <div className="slider-container">
        <input
          type="checkbox"
          className="slider-checkbox"
          id="slider"
          checked={isOn}
          onChange={toggleSwitch}
        />
        <label className="slider-label" htmlFor="slider">
          <span className="slider-button" />
        </label>
      </div>
        <a className="title">
          Calculadora de IMC
        </a>
  
        <p>
          Altura
        </p>
        <input type='number' placeholder='Centímetros' value={height} 
          onChange={handleHeightChange} onKeyDown={enterKeyDown} className='jsx-altura-input'></input>
  
        <p>
          Peso
        </p>
        <input type='number' placeholder='Quilos' value={weight} 
          onChange={handleWeightChange} onKeyDown={enterKeyDown} className='jsx-peso-input'></input>
  
        <button className="calc-btn" onClick={imcCalc}>
          Calcular
        </button>
        
        <p className="message">{message}</p>
      </div>
    </>);
}

export default Calculator;