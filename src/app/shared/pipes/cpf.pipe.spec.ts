import { CpfPipe } from './cpf.pipe';

describe('CpfPipe', () => {
  const pipe = new CpfPipe();

  it('create an instance', () => {
    const pipe = new CpfPipe();
    expect(pipe).toBeTruthy();
  });

  it('Transformar 12345678910 em 123.456.789-10', () => {
    expect(pipe.transform('12345678910')).toBe('123.456.789-10');
  });
});
