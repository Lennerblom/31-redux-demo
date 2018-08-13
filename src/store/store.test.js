import reducer, {addCountry} from './country';

describe('reducer actions', () => {

  it('should add a country', () => {
    
    const action = addCountry({name: 'Chad'});

    const newState = reducer([], action);

    expect(newState.length).toBe(1);
    expect(newState[0].name).toBe('Chad');
    expect(newState[0].id).toBeDefined();

  });
});