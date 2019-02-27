import images from '../data/images.js';
import buildGallery from './build-gallery.js';
import filteredImage from './filter-images.js'; 

const imageListNode = document.getElementById('image-list');
images.forEach(function(images) {
    const dom = buildGallery(images);
    imageListNode.appendChild(dom);
});
const formNode = document.getElementById('filter-list');

formNode.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formNode);
    const filter = {
        keyword: formData.get('keyword'),
        horns: formData.get('horns')
    };

    const filteredResult = filteredImage(images, filter);
    console.log(filteredResult);
    
});


