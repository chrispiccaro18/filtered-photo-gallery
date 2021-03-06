import { createImageTemplate } from "../src/image-component.js";

const test = QUnit.test;

QUnit.module('creating image list template');

test('create image template', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <h2>Rhino Family</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <h3>Horns: 2</h3>
        </li>
    `;
    const image = {
        title: 'Rhino Family',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 2
    };
    // act
    const result = createImageTemplate(image);
    // assert
    assert.htmlEqual(result, expected);
});