import * as dotenv from "dotenv";

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

// dotenv.config({path:'src/.env'})

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
