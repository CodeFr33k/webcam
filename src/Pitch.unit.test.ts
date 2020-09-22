import * as Pitch from './Pitch';
import Vector2 from '@/Vector2';

it('pitch', () => {
    const eye = new Vector2(1, 1);
    const jaw = new Vector2(0, 0);
    const pitch = Pitch.from(eye, jaw); 
    expect(pitch).toBe(45);
});
