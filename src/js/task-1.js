const  list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length} `);
list.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
       console.log(`Elements: ${category.querySelectorAll('li').length}`);


})


// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5
