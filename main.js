// Step#1 Getting elements from document
const name = document.querySelector('#name').value;
const form = document.querySelector('form');
const toppings = document.querySelectorAll('input[name="topping"]');
const sizes = document.querySelectorAll('input[name="size"]');
const delivery = document.querySelector('#delivery');
const price = document.querySelector('#price');
const submitButton = document.querySelector('#submit');

// Step#2 Making function for Calculating total price
function calculateTotal() {
  let total = 0;
  let selectedToppings = [];

  for (const size of sizes) {
    if (size.checked) {
      switch (size.value) {
        case 'small':
          total += 7.5;
          break;
        case 'medium':
          total += 10.5;
          break;
        case 'large':
          total += 12.5;
          break;
        case 'x-large':
          total += 15.5;
          break;
      }
    }
  }

  for (const topping of toppings) {
    if (topping.checked) {
      selectedToppings.push(topping.value);
    }
  }

  if (selectedToppings.length > 4) {
    total += (selectedToppings.length - 4) * 0.5;
  }
  if (delivery) {
    switch (delivery.value) {
      case 'doorDash':
        total += 5.0;
        break;
      default:
        total += 0.0;
    }
  }

  price.textContent = `${total}€`;
}

// Checking whether size is selected or not
function checkedSize() {
  const selectedSize = document.querySelectorAll('[name="size"]:checked');
  if (selectedSize.length <= 0) {
    window.alert('Hello Sir! Please choose the pizza size! ☺️ ');
  }
}
// Step#3 Trigger the functions
form.addEventListener('input', calculateTotal);
submitButton.addEventListener('click', checkedSize);
