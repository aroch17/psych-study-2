const button = document.getElementById('begin');
const div = document.getElementById('container');

const stock_a_button = document.getElementById('stock-a');
const stock_b_button = document.getElementById('stock-b');

i = 0
first_messages = ["is now at 210", "is now at 210", "is now at 189", "is now at 203", "is now at 199", "is now at 189"]
second_messages = ["is also at 210", "is at 218.50", "is at 205", "is at 194", "is at 202", "is at 191"]

display_string = `
  <div class="option-container">
    <button id="stock-a" onclick="select_stock_a">Stock A</button>
    <button id="stock-b">Stock B</button>
  </div>
  `

function begin() {
  div.innerHTML = `
    <h3 class="start-msg">Make your choice</h3>
    ${display_string}
  `;
  attachEventListeners();
}

function is_exp_over() {
  return i == 6
}

function finish() {
  div.innerHTML = "<p>That's it! Thanks for participating."
}

function display_other_stock(chosen_stock) {
  return chosen_stock == "Stock A" ? "Stock B" : "Stock A"
}

function select_stock(chosen_stock) {
  if (is_exp_over(i)) {
    div.innerHTML = `
    <p class="final">That's it! Thanks for participating.</p>
    `
  }
  else {
    display_msg = `<h2>Round ${i+1}</h2>`
    display_msg += `<p>You selected: ${chosen_stock}</p>`
    display_msg += `${chosen_stock} ${first_messages[i]}, ${display_other_stock(chosen_stock)} ${second_messages[i]}`
    if (i < 5) {
      display_msg += `<h3>Change your selection if you wish:</h3>`
      display_msg += display_string      
    }
    else {
      display_msg += `<button id="finish" style="margin-top: 1rem">Finish</button>`
    }
    div.innerHTML = display_msg
    i++
    attachEventListeners();
  }
}

function select_stock_a() {
  select_stock("Stock A")
}

function select_stock_b() {
  select_stock("Stock B")
}

function attachEventListeners() {
  const stock_a_button = document.getElementById('stock-a');
  const stock_b_button = document.getElementById('stock-b');
  const finish_button = document.getElementById('finish');
  if (stock_a_button) {
    stock_a_button.addEventListener('click', select_stock_a);
  }
  if (stock_b_button) {
    stock_b_button.addEventListener('click', select_stock_b);
  }
  if (finish_button) {
    finish_button.addEventListener('click', finish);
  }
}

button.addEventListener('click', begin);
