import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ColorPickerModule } from 'ngx-color-picker';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CamaraPage } from "../pages/camara/camara";
import { EditarPage } from '../pages/editar/editar';
import { FbPage } from '../pages/fb/fb';
import { GestosPage } from '../pages/gestos/gestos';
import { ListasPage } from '../pages/listas/listas';
import { MapaPage } from '../pages/mapa/mapa';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { FormularioPage } from '../pages/formulario/formulario';
import { BtSerialPage } from '../pages/bt-serial/bt-serial';
import { ColorpickerPage } from '../pages/colorpicker/colorpicker';

export const config = {
  apiKey: "AIzaSyD87f1daLck5GnLCcIEhusyShRNUnmqRbA",
    authDomain: "amg-portafolio.firebaseapp.com",
    databaseURL: "https://amg-portafolio.firebaseio.com",
    projectId: "amg-portafolio",
    storageBucket: "amg-portafolio.appspot.com",
    messagingSenderId: "312992437383"
  };

  firebase.initializeApp(config)


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CamaraPage,
    EditarPage,
    FbPage,
    GestosPage,
    ListasPage,
    MapaPage,
    RegisterPage,
    LoginPage,
    FormularioPage,
    BtSerialPage,
    ColorpickerPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ColorPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CamaraPage,
    EditarPage,
    FbPage,
    GestosPage,
    ListasPage,
    MapaPage,
    RegisterPage,
    LoginPage,
    FormularioPage,
    BtSerialPage,
    ColorpickerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    GoogleMaps,
    LocalNotifications,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
