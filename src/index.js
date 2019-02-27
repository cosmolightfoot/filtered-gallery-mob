import images from '../data/images.js';
import buildGallery from './build-gallery.js';
import filteredImage from './filter-images.js'; 
const formNode = document.getElementById('filter-list');

formNode.addEventListener('submit', event => {
    event.preventDefault();
    const imageListNode = document.getElementById('image-list');
    console.log(imageListNode.children);

    const formData = new FormData(formNode);
    const filter = {
        keyword: formData.get('keyword'),
        horns: formData.get('horns')
    };
    
    const filteredResult = filteredImage(images, filter);
    const imageChildren = imageListNode.children;
    while(imageChildren.length > 0) {
        imageListNode.removeChild();
    }

    filteredResult.forEach(function(filteredResult) {
        const dom = buildGallery(filteredResult);
        imageListNode.appendChild(dom);
    });
});


