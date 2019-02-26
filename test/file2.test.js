const test = QUnit.test;

QUnit.module('image filter test');
function filterImages(images, filter) {
    //filter method
    //return objects in an array
}
test('image filter test', function (assert) {
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
    const filteredImage = filteredImage(images, filter);
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

    assert.deepEqual(filteredImage, expected);
});