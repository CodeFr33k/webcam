import Vector2 from '@/Vector2';

export function from(
    eye1: Vector2,
    eye2: Vector2,
    nose: Vector2,
): number {
    const eyeToEye = eye2.x - eye1.x;
    const eyeToNose = nose.x - eye1.x;
    if(!eyeToEye) {
        return 0;
    }
    const ratio = eyeToNose / eyeToEye;
    const yaw = ratio * 120 - 60;
    return yaw;
}

