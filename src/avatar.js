/*
 * MIT License
 *
 * Copyright (c) 2019 Adrien Belminksy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const paper = require('paper-jsdom-canvas');
const { Polygon, Segment } = require('./geometry.js');


module.exports.draw = function() {

    let background = new paper.Path.Rectangle({
        point: [0, 0],
        size: paper.view.size,
        fillColor: '#19021e'
    });

    background.sendToBack();


    // face
    new Polygon()
	  .add(143, 327)
	  .add(131, 281)
	  .add(123, 245)
	  .add(117, 205)
	  .add(116, 178)
	  .add(115, 160)
	  .add(117, 94)
	  .add(145, 53)
	  .add(193, 25)
	  .add(257, 20)
	  .add(315, 38)
	  .add(357, 72)
	  .add(376, 118)
	  .add(379, 177)
	  .add(379, 181)
	  .add(375, 211)
	  .add(371, 246)
	  .add(364, 281)
	  .add(356, 309)
	  .add(345, 341)
	  .add(334, 358)
	  .add(315, 385)
	  .add(274, 406)
	  .add(229, 407)
	  .add(196, 390)
	  .add(169, 367)
	  .add(154, 346)
	  .close();


	// left ear
	new Polygon()
	  .add(375, 211)
	  .add(383, 205)
	  .add(394, 218)
	  .add(389, 234)
	  .add(382, 247)
	  .add(372, 274)
	  .add(364, 281)
	  .add(371, 246)
	  .close();


	// right ear
	new Polygon()
	  .add(117, 205)
	  .add(105, 196)
	  .add(95, 209)
	  .add(106, 232)
	  .add(116, 267)
	  .add(131, 281)
	  .add(123, 245)
	  .close();


	// neck
	new Polygon()
	  .add(334, 358)
	  .add(337, 414)
	  .add(319, 448)
	  .add(253, 484)
	  .add(170, 445)
	  .add(150, 412)
	  .add(154, 346)
	  .add(169, 367)
	  .add(196, 390)
	  .add(229, 407)
	  .add(274, 406)
	  .add(315, 385)
	  .close();


	// mouth
	new Polygon()
	  .add(202, 331)
	  .add(236, 320)
	  .add(259, 320)
	  .add(297, 331)
	  .add(270, 352)
	  .add(229, 352)
	  .close();


	// left eye
	new Polygon()
	  .add(286, 201)
	  .add(313, 181)
	  .add(333, 187)
	  .add(339, 195)
	  .add(338, 203)
	  .add(314, 211)
	  .close();


	// right eye
	new Polygon()
	  .add(210, 201)
	  .add(183, 181)
	  .add(163, 187)
	  .add(157, 195)
	  .add(158, 203)
	  .add(182, 211)
	  .close();


	// nose
	new Polygon()
	  .add(116, 178)
	  .add(151, 151)
	  .add(218, 173)
	  .add(237, 198)
	  .add(237, 257)
	  .add(230, 278)
	  .add(248, 292)
	  .add(267, 278)
	  .add(259, 257)
	  .add(259, 198)
	  .add(278, 173)
	  .add(344, 151)
	  .add(379, 177);


    // cheeks
	new Segment()
	  .from(202, 331)
	  .to(249, 337);

	new Segment()
	  .from(249, 337)
	  .to(297, 331);

	new Segment()
	  .from(314, 211)
	  .to(267, 278);

	new Segment()
	  .from(267, 278)
	  .to(356, 309);

	new Segment()
	  .from(356, 309)
	  .to(314, 211);

	new Segment()
	  .from(314, 211)
	  .to(371, 246);

	new Segment()
	  .from(339, 195)
	  .to(379, 177);

	new Segment()
	  .from(182, 211)
	  .break(180, 267)
	  .to(143, 327);

	new Segment()
	  .from(143, 327)
	  .break(202, 331)
	  .break(230, 278)
	  .to(180, 267);

	new Segment()
	  .from(158, 203)
	  .to(123, 245);

	new Segment()
	  .from(157, 195)
	  .to(151, 151);

	new Segment()
	  .from(229, 352)
	  .to(196, 390);

	new Segment()
	  .from(270, 352)
	  .to(274, 406);

	new Segment()
	  .from(267, 278)
	  .break(297, 331)
	  .to(345, 341);

	new Segment()
	  .from(286, 201)
	  .to(259, 198);


    // forehead
    new Segment()
      .from(145, 53)
      .break(183, 163)
      .break(240, 75)
      .to(145, 53);

    new Segment()
      .from(278, 173)
      .break(292, 115)
      .to(344, 151);

    new Segment()
      .from(315, 38)
      .break(292, 115)
      .to(366, 94);

    new Segment()
      .from(315, 38)
      .to(240, 75);

    new Segment()
      .from(292, 115)
      .to(183, 163);


    // neck
    new Segment()
	  .from(170, 445)
	  .break(229, 407)
	  .to(253, 484);

	new Segment()
	  .from(274, 406)
	  .to(319, 448);

};
