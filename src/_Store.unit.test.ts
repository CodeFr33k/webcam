import { observe } from 'mobx';
import Store from './_Store';
import {
    extendWithFaceLandmarks,
    FaceDetection,
    FaceLandmarks68,
    Rect,
    Point,
} from 'face-api.js';

function createLandmarks() {
    const landmarks = new FaceLandmarks68(
        [],
        { width: 100, height: 100}
    );
    return landmarks;
}

it('update pitch when landmarks change', () => {
    const store = new Store();
    const landmarks = createLandmarks();
    landmarks.positions[0] = new Point(0, 0);
    landmarks.positions[36] = new Point(1, 1);
    store.updateFaceData({
        landmarks,                       
    });
    expect(store.pitch).toBe(45);
});

it('update yaw when landmarks change', () => {
    const store = new Store();
    const landmarks = createLandmarks();
    landmarks.positions[27] = new Point(0, 0);
    landmarks.positions[39] = new Point(0, 0);
    landmarks.positions[42] = new Point(2, 0);
    store.updateFaceData({
        landmarks,                       
    });
    expect(store.yaw).toBe(-60);
});

