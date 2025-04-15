import {stringUtils} from '../stringUtils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize first letter of each word', () => {
      const name = stringUtils.capitalizeFirstLetter('Ana Maria');
      const nameAllCapitalize = stringUtils.capitalizeFirstLetter('ANA MARIA');
      const nameRandom = stringUtils.capitalizeFirstLetter('MaRia');

      expect(name).toBe('Ana Maria');
      expect(nameAllCapitalize).toBe('Ana Maria');
      expect(nameRandom).toBe('Maria');
    });
  });

  it('should remove leadingTrailing space', () => {
    const name = stringUtils.capitalizeFirstLetter(' Ana Maria');
    const nameTwo = stringUtils.capitalizeFirstLetter('Ana Maria ');

    expect(name).toBe('Ana Maria');
    expect(nameTwo).toBe('Ana Maria');
  });
});
