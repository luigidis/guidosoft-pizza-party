import './style.css'
import { nicknameInput } from './src/utils/nickname-input.js'
import { pizzaForm } from './src/utils/pizza-form.js';


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Benvenuto ntella Pizza Party</h1>
    <p> La Guidosoft ti ringrazia per l'uso di questa app </p>
    <div id="nickname-input"></div>
    <div id="pizza-order-form-container"></div>
  </div>
`

nicknameInput(document.querySelector('#nickname-input'));
pizzaForm(document.querySelector('#pizza-order-form-container'));
