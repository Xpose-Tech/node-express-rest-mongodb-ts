const responseCode = {
  SUCCESS: {
    code: 200,
    name: 'OK',
  },
  CREATED: {
    code: 201,
    name: 'Created',
  },
  ACCEPTED: {
    code: 202,
    name: 'Created',
  },
  NO_CONTENT: {
    code: 204,
    name: 'No Content',
  },
  BAD_REQUEST: {
    code: 400,
    name: 'Bad Request',
  },
  UN_AUTHENTICATION: {
    code: 401,
    name: 'Missing Authentication',
  },
  FORBIDDEN: {
    code: 403,
    name: 'Forbidden',
  },
  NOT_FOUND: {
    code: 404,
    name: 'Not Found',
  },
  PAYLOAD_TOO_LARGE: {
    code: 413,
    name: 'Payload Too Large',
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 415,
    name: 'Unsupported Media Type',
  },
  MISSING: {
    code: 422,
    name: 'Missing Parameter',
  },
  SERVER: {
    code: 500,
    name: 'Internal Server Error',
  },
  UNIQUE_DATA: {
    code: 500,
    name: 'DuplicateKey',
  },
};
export default responseCode;
