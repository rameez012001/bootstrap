const cards = document.querySelectorAll('.card');
const slider = document.getElementById('users');
const product = document.getElementById('product');
const price = document.getElementById('price');
const overlay = document.querySelector('.overlay');

const products = [
  { users: 10, name: 'Free', price: '$0 / mo' },
  { users: 20, name: 'Pro', price: '$15.00 / mo' },
  { users: 30, name: 'Enterprise', price: '$29.00 / mo' },
];
document.getElementById('cross').addEventListener('click',()=>{overlay.style.display='none';})
function updateCardSelection(index) {
  cards.forEach((card, i) => {
    card.style.border = i === index ? '3px solid #007bff' : 'none';
  });
  product.innerText = products[index].name;
  price.innerText = products[index].price;
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    overlay.style.display = 'flex';
    slider.value = products[index].users;
    document.getElementById('users-value').innerText = slider.value;
    updateCardSelection(index);
  });
});

slider.addEventListener('input', () => {
  const sliderValue = parseInt(slider.value);
  document.getElementById('users-value').innerText = sliderValue;

  let selectedIndex = 0;
  for (let i = 0; i < products.length; i++) {
    if (sliderValue <= products[i].users) {
      selectedIndex = i;
      break;
    }
  }

  updateCardSelection(selectedIndex);
});
