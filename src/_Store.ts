import * as Pitch from '@/Pitch';
import * as Yaw from '@/Yaw';
import Vector2 from '@/Vector2';
import type, {
    computed,
    observable,
    extendObservable,
} from 'mobx';
import {
    FaceLandmarks68,
    WithFaceDetection,
    WithFaceLandmarks,
} from 'face-api.js';

type OnlyFaceLandmarks = {
    landmarks: FaceLandmarks68;
}; 
type ObservableFaceData = OnlyFaceLandmarks & type.IObservableObject;

export default class Store {
    faceData: ObservableFaceData;
    constructor() {
        const landmarks = new FaceLandmarks68(
            [],
            { width: 100, height: 100 }
        );
        this.faceData = observable({
            landmarks,                         
        }) as ObservableFaceData;
    }
    updateFaceData(data: OnlyFaceLandmarks) {
        extendObservable(this.faceData, data);
    }
    @computed get positions() {
        return this.faceData.landmarks.positions;
    }
    @computed get pitch() {
        if(
            !this.positions[0] ||
            !this.positions[36]
        ) {
            return 0;
        }
        const eye = Vector2.from(this.positions[36]);
        const jaw = Vector2.from(this.positions[0]);
        return Pitch.from(eye, jaw);
    }
    @computed get yaw() {
        if(
            !this.positions[27] ||
            !this.positions[39] ||
            !this.positions[42]
        ) {
            return 0;
        }
        const eye1 = Vector2.from(this.positions[39]);
        const eye2 = Vector2.from(this.positions[42]);
        const nose = Vector2.from(this.positions[27]);
        return Yaw.from(eye1, eye2, nose);
    }
}

