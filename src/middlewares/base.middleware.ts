import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { REGEX_OBJECT_ID } from '@constants/regex.constant';

export const runConditionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req).formatWith(({ msg }) => msg);

  const hasError = !error.isEmpty();
  if (hasError) {
    return res.error('VALIDATION_ERROR', error.array()[0], 422);
  } else {
    next();
  }
};

export const validateIDParamsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const regexID = new RegExp(REGEX_OBJECT_ID);
    if (!regexID.test(id)) {
      return res.error('VALIDATION_ERROR', 'Invalid ID', 422);
    }
    next();
  } catch (error: any) {
    res.error('VALIDATION_ERROR', error?.mesage, 422);
  }
};
