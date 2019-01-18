const minus = require('./minus');

test('-1 - 2 เท่ากับ -3', ()=> {
    expect(minus(-1,2)).toBe(-3);
});

test('3 - 1 เท่ากับ 2', ()=> {
    expect(minus(3,1)).toBe(2);
});

test('-1 - -2 เท่ากับ 1', ()=> {
    expect(minus(-1,-2)).toBe(1);
});

test('20 - 2 เท่ากับ 18', ()=> {
    expect(minus(20,2)).toBe(18);
});

test('-3 - -2 เท่ากับ -1', ()=> {
    expect(minus(-3,-2)).toBe(-1);
});