// client/src/config/api.js

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:8090'
    : 'http://localhost:8090';

export default baseURL;
