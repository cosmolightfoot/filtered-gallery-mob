import filteredImage from '../src/filter-images.js';
const test = QUnit.test;

QUnit.module('image filter test');

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


