export default function filterImages(images, userFilterSetting) {
    return images.filter(imageObject => {
        const hasKeyword = !userFilterSetting.keyword || imageObject.keyword === userFilterSetting.keyword;
        const hasHorns = !userFilterSetting.horns || imageObject.horns >= userFilterSetting.horns;
        return hasKeyword && hasHorns;
    });
}

if(!userFilterSetting.keyword === true) {
    hasKeyword === true;
}
if(userFilterSetting.keyword === imageObject.keyword) {
    hasKeyword === true;
}
if(userFilterSetting.keyword == true && userFilterSetting.keyword !== imageObject.keyword) {
    hasKeyword === false;
}

if(!userFilterSetting.keyword === true) {
    hasHorn === true;
}
if(userFilterSetting.horn === imageObject.horn) {
    hasHorn === true;
}
if(userFilterSetting.horn == true && userFilterSetting.horn !== imageObject.horn) {
    hasHorn === false;
}

if(hasKeyword === true && hasHorns === true) {
    var passes = `image passes filter!!!!` 
}