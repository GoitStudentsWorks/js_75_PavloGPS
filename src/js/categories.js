// вимушений закоментувати тут все , бо лягає хомпейдж
// import axios from "axios";
// import { listTopBooks } from './categories-render.js'
// import { markupCollections} from './categories-render'
// import { fetchTopBooks } from "./categories-render.js";
// import{BAZA_URL} from './categories-render.js'
// const galleryList = document.querySelector('.gallery');
// const  categoryList = document.querySelector('.category_list');
// const baseUrl = 'https://books-backend.p.goit.global/books/';
///немає ніде такого селектора/ const allCategories = document.querySelector('.all_categories'): немає ніде такого селектора
// const allItems="All categories"
// async function fetchCategories() {
//   try {
//     const { data } = await axios(`${baseUrl}category-list`);
//     const categories = data.map(({ list_name }) => list_name);
//     return categories;
//   } catch (error) {
//     throw error;
//   }
// }

// вимушений закоментувати тут все , бо  лягає хомпейдж
// async function fetchBooksByCategory(category) {
//   try {
//     const { data } = await axios(`${baseUrl}category?category=${category}`);
//     const markupCategory = data.map(({ author, title, book_image }) => {
//       return `<li>
//           <a class="link" href="${book_image}">
//             <img class="img" src="${book_image}" alt="книга" width="180px" height="256px" loading="lazy" />
//           </a>
//           <h3>${title}</h3>
//           <h3>${author}</h3>
//         </li>`;
//     });

//     categoryList.innerHTML = markupCategory.join('');
//   } catch (error) {
//     throw error;
//   }
// }

// (async () => {
//   try {
//     const categories = await fetchCategories();
//     const listItems = categories.map(category => `<li class='item'><a class='allCategories' href="#">${category}</a></li>`);
    
//     galleryList.innerHTML = `<ul><li><a class='allCategories'href="#">${allItems}</a></li>${listItems.join('')}</ul>`;
//   } catch (error) {
//     console.error('Помилка:', error);
//   }
//   // const linkAllcategories = galleryList.querySelector('.allCategories');// нема ніде такого селектора

//  linkAllcategories.addEventListener('click', (event) => {
//   fetchTopBooks(BAZA_URL, listTopBooks);
// });
// })();
// const linkAllcategories=galleryList.querySelector('.allCategories')
// console.log(linkAllcategories)
// galleryList.addEventListener('click', async (event) => {
//   if (event.target.tagName === 'A') {
//     const category = event.target.textContent;
//     await fetchBooksByCategory(category);
// listTopBooks.innerHTML=""
//   }
// });



// // export { fetchBooksByCategory};

