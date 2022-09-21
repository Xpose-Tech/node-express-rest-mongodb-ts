import { Request, Response } from 'express';
import responseCode from './response-code';
import { errorResponseObj } from './injector';

/**
 * Handle un-catch exception
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const handleError = (err, req: Request, res: Response) => {
  return res.status(err.status || 500).json(errorResponseObj(err.message, responseCode.SERVER.name));
};
