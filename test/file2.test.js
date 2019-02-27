const test = QUnit.test;

QUnit.module('image filter test');

function filteredImage(images, filter) {
    //filter method
    const filteredImages = images.filter(image => {
        const filterKeyword = !filter.keyword || image.keyword === filter.keyword;
        const filterHorns = !filter.horns || image.horns >= filter.horns;
        return filterKeyword && filterHorns;
    });
    return filteredImages;

    //return objects in an array

}

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

test('image filter test', function(assert) {
    //arrange


    const filter = {
        keyword: 'chameleon',
        horns: ''
    };

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

test('return all images', function(assert) {
    //arrange
    const filter = {
        'keyword': '',
        'horns': ''

    };

    //act

    const result = filteredImage(images, filter);
    const expected = [
        
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
    //assert
    assert.deepEqual(result, expected);
});

test('return horns greater than or equal to 4', function(assert) {
    //arrange
    const filter = {
        keyword: '',
        horns: 4
    };

    //act

    const result = filteredImage(images, filter);
    const expected = [
        
        {
            'keyword': 'unicorn',
            'horns': 6
        },
        {
            'keyword': 'chameleon',
            'horns': 4
        }

    ];
    //assert
    assert.deepEqual(result, expected);
});


