import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cfenv from 'cfenv';

import { AppEnv, GetAppEnvOptions } from 'cfenv';

async function bootstrap() {
  const appEnv: AppEnv = cfenv.getAppEnv();

  console.log('Application name:', appEnv.name);
  console.log('Port:', appEnv.port);
  console.log('Binding host:', appEnv.bind);

  const services = appEnv.getServices();
  console.log('Services:', services);

  const customOptions: GetAppEnvOptions = {
    name: 'customApp',
    protocol: 'https',
    vcap: {
      application: {
        name: 'CustomApplication',
      },
      services: {
        customService: [
          {
            credentials: {
              key: 'value',
            },
          },
        ],
      },
    },
  };

  const customAppEnv: AppEnv = cfenv.getAppEnv(customOptions);
  console.log('Custom App name:', customAppEnv.name);
  console.log('Custom Services:', customAppEnv.services);

  const customAppEnv2: AppEnv = cfenv.getAppEnv();
  console.log('Custom App name:', customAppEnv2.name);
  console.log('Custom Services:', customAppEnv2.services);

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
