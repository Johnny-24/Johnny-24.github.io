document.addEventListener('DOMContentLoaded', function(){

const listElement = document.querySelector('.list');




  fetch('./../food.json')
  .then(response => response.json())
  .then(list => {
    list.forEach(item => {
    const li = document.createElement('li');
      li.classList.add('category');
      li.innerHTML = `
        <h5 class="category-title">${item.category}</h5>
      `;
      const ulProduct = document.createElement('ul');
      ulProduct.classList.add('product-list');

      listElement.appendChild(li);

      item.products.forEach(product => {
        const productLi = document.createElement('li');
          productLi.classList.add('product-item');
          productLi.innerHTML = `
            <img class="product-img" src="./../img/${product.image}.webp" alt="${product.name}" />
            <span class="product-title">${product.name}</span>
          `;
          ulProduct.appendChild(productLi);
      });
      li.appendChild(ulProduct);
      listElement.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке JSON:', error);
  });
});