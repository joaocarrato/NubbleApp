export {};

jest.mock('@react-navigation/native', () => {
  const originalModules = jest.requireActual('@react-navigation/native');
  return {
    ...originalModules,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
