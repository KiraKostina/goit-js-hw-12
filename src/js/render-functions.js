// Функції для відображення елементів інтерфейсу

export function createMarkup(arr) {

  return arr
    .map(
      item =>
        `<li class="gallery__item">
        <a class="gallery-link" href="${item.largeImageURL}">
        <img src="${item.webformatURL}" data-source="${item.largeImageURL}" alt="${item.tags}">
       
        </a>
        <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${item.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${item.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${item.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${item.downloads}</p></li>
        </ul>
       </li>`
    )
    .join('');
}


 