import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Teste } from './../components/teste/teste';
import {LoginPage} from "../pages/login/login";
import {Http, HttpModule} from "@angular/http";
import {JwtClient} from "../providers/jwt-client";
import {IonicStorageModule} from "@ionic/storage";
import {AuthConfig, AuthHttp, JwtHelper} from "angular2-jwt";
import {Auth} from "../providers/auth";
import {Env} from '../models/env';

declare var ENV: Env;

@NgModule({
  declarations: [
      Teste,
      MyApp,
      HomePage,
      ListPage,
      LoginPage
  ],
  imports: [
      HttpModule,
      BrowserModule,
      IonicModule.forRoot(MyApp, {}, {
          links: [
              {component: LoginPage, name: 'LoginPage', segment: 'login'},
              {component: HomePage, name: 'HomePage', segment: 'home'},
              {component: Teste, name: 'TestPage', segment: 'teste/:id/:name'},
          ]
      }),
      IonicStorageModule.forRoot({
          driverOrder: ['localstorage']
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      HomePage,
      ListPage,
      Teste,
      LoginPage
  ],
  providers: [
      JwtClient,
      Auth,
      JwtHelper,
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      {
          provide: AuthHttp,
          deps: [Http, Storage],
          useFactory(http, storage){
              let authConfig = new AuthConfig({
                  headerPrefix: 'Bearer',
                  noJwtError: true,
                  noClientCheck: true,
                  tokenGetter: (() => storage.get(ENV.TOKEN_NAME))
              });
            return new AuthHttp(authConfig, http);
          }
      }
  ]
})
export class AppModule {}
