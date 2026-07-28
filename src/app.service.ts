import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const dbUrl = process.env.DATABASE_URL ?? '(미설정)';
    const conStr = process.env.BLOB_CONNECTION_STRING ?? '(미설정)';

    return {
      message: 'Hello World!-app service',
      DATABASE_URL: dbUrl,
      BLOB_CONNECTION_STRING: conStr,
    };
  }
}
