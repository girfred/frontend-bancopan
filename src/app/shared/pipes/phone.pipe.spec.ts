import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  const pipe = new PhonePipe();

  it('create an instance', () => {
    const pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('Transformar 11987654321 em (11) 98765-4321)', () => {
    expect(pipe.transform('11987654321')).toBe('(11) 98765-4321');
  });
});
