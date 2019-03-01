import images from '../data/images.js';
import filteredImage from './filter-images.js'; 
import loadFilter from './filter-components.js';
import buildGallery from './gallery-components.js';


loadFilter(function(filterSettings){
    const filteredImageArray = filteredImage(images, filterSettings);
    buildGallery(filteredImageArray);
});