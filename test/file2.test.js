const test = QUnit.test;

QUnit.module('image filter test');
function filteredImage(images, filter) {
    //filter method
    const filterArray = images.filter(image => image.keyword === filter.keyword
    );
    return filterArray;
    //return objects in an array

}
test('image filter test', function(assert) {
    //arrange
    const images = [
        {
            'keyword': 'chameleon',
            'horns': 2
        },
        {
            'keyword': 'unicorn',
            'horns': 6
        },
        {
            'keyword': 'chameleon',
            'horns': 4
        }
    ];


    const filter = {
        keyword: 'chameleon'
    };


    
    // object with arrays in it
    // test function
    
    //act
    const result = filteredImage(images, filter);
    const expected = [
        {
            'keyword': 'chameleon',
            'horns': 2
        },
        {
            'keyword': 'chameleon',
            'horns': 4
        }
    ];

    //assert

    assert.deepEqual(result, expected);
});