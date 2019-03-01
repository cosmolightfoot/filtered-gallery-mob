export function makeImageHtml(images) {
    const html = `<li><h2>${images.title}</h2>
    <img src="${images.url}" alt="${images.description}">
    </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function buildGallery(images) {
    const imageListNode = document.getElementById('image-list');
    while(imageListNode.children.length > 0) {
        imageListNode.lastElementChild.remove();
    }

    images.forEach(image => {
        const dom = makeImageHtml(image);
        imageListNode.appendChild(dom);
    });
}