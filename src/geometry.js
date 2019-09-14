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
const { primary, secondary } = require('./style.js');


class Polygon {

    constructor() {

        this.path = new paper.Path({
            style: primary
        });

    }


    add(x, y) {

        this.path.add(new paper.Point(x, y));

        return this;

    }

    close() {

        this.path.closed = true;

    }

}

class Segment {

    constructor() {

        this.path = new paper.Path({
            style: secondary
        });

    }

    from(x, y) {

        this.path.add(new paper.Point(x, y));

        return this;

    }

    break(x, y) {

        // humm? design pattern?
        return this.from(x, y);

    }

    to(x, y) {

        return this.from(x, y);

    }

}


module.exports = {
    Polygon,
    Segment
};
