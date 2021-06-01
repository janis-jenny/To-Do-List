import Todos from '../components/todos';

describe('Todos class', () => {
  let todo;
  beforeEach(() => {
    todo = new Todos('data');
  });

  it('Should create a to-do object', () => {
    expect(typeof todo).toBe('object');
  });
});
