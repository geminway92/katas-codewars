const whoLikeIt = require('./whoLikesIt');

describe('WhoLikeIt.js',() => {
  test('Debe el array inicializar vacio', () => {
    expect(whoLikeIt([])).toBe("no one likes this");
  });

  test('Si una persona le dio a me gusta debe retornar...', () => {
    expect(whoLikeIt(['Peter'])).toBe("Peter likes this");
  });

  test('Si tres personas le han dado a me gusta debe retornar', () => {
    expect(whoLikeIt(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  test('Si son 4 o más personas debe retornar...', () => {
    expect(whoLikeIt(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
  });
})

