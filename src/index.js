import images from '../data/images.js';
import buildGallery from './build-gallery.js';
const imageListNode = document.getElementById('image-list');
images.forEach(function(images) {
    const dom = buildGallery(images);
    imageListNode.appendChild(dom);
});