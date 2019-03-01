export default function filteredImage(images, userFilterSettings) {
    //filter method
    return images.filter(imageObject => {
        const filterKeyword = !userFilterSettings.keyword || imageObject.keyword === userFilterSettings.keyword;
        const filterHorns = !userFilterSettings.horns || imageObject.horns >= userFilterSettings.horns;
        return filterKeyword && filterHorns;
    });

    //return objects in an array
}
