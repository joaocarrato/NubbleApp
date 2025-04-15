import {Post} from '@domain';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 3,
  favoriteCount: 3,
  reactionCount: 3,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'fake-url',
    userName: 'mariajulia',
  },
};
