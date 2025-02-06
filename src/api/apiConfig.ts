import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.0K6x8rafmC0XG2aTrKE3Glilm_xDLIbUhVPXl9rRl6bRCToDp2KSp9_FfiZl',
  },
});
