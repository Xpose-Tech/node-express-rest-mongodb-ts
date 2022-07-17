import { AppError } from './app-error';
import { NotFoundError, ValidationError, QueryDBError } from './custom-error';
import responseCode from './response-code';

export const executeError = (error, isExec = false) => {
  let resError: any = null;
  if (error instanceof NotFoundError) {
    resError = error;
  }
  if (error instanceof ValidationError) {
    resError = error;
  }
  if (error instanceof SyntaxError) {
    resError = error;
  }
  if (error instanceof QueryDBError) {
    resError = error;
  }
  if (!resError) {
    resError = new AppError(error.message, responseCode.SERVER.code);
  }

  if (typeof resError['executeAll'] === 'function' && isExec) {
    resError.executeAll();
  }
  return resError;
};
