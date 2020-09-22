import {
    Point,
} from 'face-api.js';

export default class Vector2 {
    x: number;
    y: number;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static from(point: Point): Vector2 {
        return new Vector2(point.x, point.y);
    }
}

