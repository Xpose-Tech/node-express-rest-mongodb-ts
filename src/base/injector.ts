import resposeCode from './response-code';

export const success_response_obj = (message, data) => {
  if (data?.paginate?.page) return success_response_paginate_obj(message, data.data, data.paginate);
  return {
    success: true,
    message,
    data,
  };
};

export const success_response_paginate_obj = (message, data, paginate) => ({
  success: true,
  message,
  data,
  paginate,
});

export const error_response_obj = (message, error) => ({
  success: false,
  error,
  message,
});

export const inteceptor = async (req, res, next) => {
  /**
   *
   * @param data
   * @param message
   * @param statusCode
   */

  res.success = (data = null, message = resposeCode.SUCCESS.name, statusCode = resposeCode.SUCCESS.code) => {
    const response = success_response_obj(message, data);
    if (statusCode < 200 || statusCode > 299) statusCode = resposeCode.SUCCESS.code;
    return res.status(statusCode).json(response);
  };

  /**
   *
   * @param error
   * @param message
   * @param statusCode
   */
  res.error = (error = resposeCode.SERVER.name, message = 'Failed', statusCode = 200) => {
    const response = error_response_obj(message, error);
    if (statusCode >= 200 && statusCode <= 299) statusCode = 500;
    return res.status(statusCode).json(response);
  };

  next();
};
