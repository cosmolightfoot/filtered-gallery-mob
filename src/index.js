import images from '../data/images.js';
import filteredImage from './filter-images.js'; 
const formNode = document.getElementById('filter-list');

formNode.addEventListener('submit', event => {
    event.preventDefault();

    console.log(imageListNode.children);

    const formData = new FormData(formNode);
    const filter = {
        keyword: formData.get('keyword'),
        horns: formData.get('horns')
    };
    
    const filteredResult = filteredImage(images, filter);
    
});


