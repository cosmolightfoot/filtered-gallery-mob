function buildGallery(images) {
    const html = `<li><h2>${images.title}</h2>
    <img src="${images.url}" alt="${images.description}">
    </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
export default buildGallery;