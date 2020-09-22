import * as Yaw from './Yaw';
import Vector2 from '@/Vector2';

it('yaw', () => {
    const eye1 = new Vector2(0, 0);
    const eye2 = new Vector2(2, 0);
    const nose = new Vector2(1, 0);
    const yaw = Yaw.from(eye1, eye2, nose); 
    expect(yaw).toBe(0);
});
