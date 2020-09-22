import Vector2 from '@/Vector2';

export function from(
    eye: Vector2,
    jaw: Vector2,
): number {
    const vec = new Vector2( 
        eye.x - jaw.x,
        eye.y - jaw.y,
    );
    const angle = Math.atan2(vec.y, vec.x);
    const degrees = 180*angle/Math.PI;
    return degrees;
}

