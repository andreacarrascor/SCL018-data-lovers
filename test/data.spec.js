import { searchData, filterData, sortData } from '../src/data.js';

describe('searchData', () => {
  it('is a function', () => {
    expect(typeof searchData).toBe('function');
  });

  it('should return "Castle in the Sky" when searching "Castle in the Sky"', () => {
    const data = [{ "title": "Castle in the Sky" }];
    const result = [{ "title": "Castle in the Sky" }];
    expect(searchData(data, 'title', "Castle in the Sky")).toEqual(result);
  });
}),

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('should return the result to director "Hayao Miyazaki"', () => {
    const data = [{ "director": "Hayao Miyazaki" }];
    const result = [{ "director": "Hayao Miyazaki" }];
    expect(filterData(data, "Hayao Miyazaki")).toEqual(result);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

});



