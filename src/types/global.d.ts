import responseCode from '@base/response-code';

declare global {
  namespace Express {
    interface Request {
      user: any;
      file: Express.Multer.File;
    }
    interface Response {
      success(data: unknown | null, message = resposeCode.SUCCESS.name, statusCode = responseCode.SUCCESS.code);
      error(error = resposeCode.SERVER.name, message = 'Failed', statusCode = resposeCode.SERVER.code);
    }
  }
}
