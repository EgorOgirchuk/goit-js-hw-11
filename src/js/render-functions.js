export function render(images) {
  let renderHtml = '';
  images.forEach(image => {
    renderHtml += `
  <li class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery-link">  
            <img style="width:360px" 
            src="${image.webformatURL}" 
            class="gallery-image" 
            />
      </a>
      <div>
      <span>Likes: ${image.likes}</span>
      <span>Views: ${image.views}</span>
      <span>Comments: ${image.comments}</span>
      <span>Downloads: ${image.downloads}</span>
      </div>
  </li>

  `;
  });
  return '<ul>' + renderHtml + '</ul>';
}
