// import { example, anotherExample } from '../src/data.js';

import {searchData, filterData, sortData} from '../src/data.js';

describe('Prueba input search', () => {
  it('is a function', () => {
    expect(typeof searchData).toBe('function');
  });

  it('Debería retornar el resultado del título al buscar "Castle"', () => {
    const data = [
      {
        "title": "Kiki's Delivery Service",
      },
      {
        "title": "Castle in the Sky",
      },
      {
        "title": "Only Yesterday",
      }
    ];
    const result = [
      {
        "title": "Castle in the Sky",
      }
    ];
    expect(searchData(data, 'title', 'castle')).toEqual(result);
  });


describe('Prueba filtro por director', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('should return the result to director and producer Hayao Miyazaki.', () => {
    const data = [
      {
          "director": "Hayao Miyazaki",

        },
        {
          "director": "Hayao Miyazaki",

        },
        {
          "director": "Isao Takahata",

        }
      ];
      const result = [
        {
          "director": "Hayao Miyazaki",

        },
        {
          "director": "Hayao Miyazaki",

        }
      ];
      expect(filterData(data,'Hayao Miyazaki')).toEqual(result);
    });
  });


describe('Prueba ordenar alfabeticamente', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  
});
});
// });
  // it('Debería retornar las películas de "Hiroyuki Morita".', () => {
  //   const data = [
  //     {
  //       "director": "Hiroyuki Morita",
  //     },
  //     {
  //       "director": "Hayao Miyazaki",
  //     },
  //   ];
  //   const result = [
  //     {
  //       "title": "The Cat Returns",
  //       "director": "Hiroyuki Morita",
  //       "release_date": "2002",
  //     },
  //   ];
  //   expect(filterData(data, "Hiroyuki Morita")).toEqual(result);
  //   // expect(filterData(data,'Hayao Miyazaki')).toEqual(result);
  // });
// });

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
