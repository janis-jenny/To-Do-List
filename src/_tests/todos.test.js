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

describe('test Todos class', () => {
  test('assigns the instance variables', () => {
    const todo = new Todos('id', 'title', 'description', 'date', 'priority', 'check=false');
    expect(todo.title).toBe('title');
  });
});
