import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cfenv from "cfenv";

import { AppEnv, GetAppEnvOptions } from "cfenv";

async function bootstrap() {
  const customOptions: GetAppEnvOptions = {
    name: "customApp",
    protocol: "https",
    vcap: {
      application: {
        name: "CustomApplication"
      },
      services: {
        customService: [
          {
            credentials: {
              key: "value"
            }
          }
        ]
      }
    }
  };

  const customAppEnv: AppEnv = cfenv.getAppEnv(customOptions);

  const mariadbService = customAppEnv.getService('exact-service-name in cloud');
  const mariadbURL = customAppEnv.getServiceURL('service-name');
  const mariadbCreds = customAppEnv.getServiceCreds('service-name');

  //Nest JS
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000); //replace
}

bootstrap();
