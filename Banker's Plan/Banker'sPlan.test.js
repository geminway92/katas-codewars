const BankerPlan = require('./BankerPlan');

describe('BankerPlan', () => {
  test('', () => {
    expect(BankerPlan(100000, 1, 2000, 15, 1)).toBeTruthy();
    expect(BankerPlan(100000, 1, 10000, 10, 1)).toBeTruthy();
    expect(BankerPlan(100000, 1, 9185, 12, 1)).toBeFalsy();

  })
});
