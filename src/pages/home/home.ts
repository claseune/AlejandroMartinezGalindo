import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FbPage } from '../fb/fb';
import { ListasPage } from '../listas/listas';
import { GestosPage } from '../gestos/gestos';
import { CamaraPage } from '../camara/camara';
import { MapaPage } from '../mapa/mapa';
import { FormularioPage } from '../formulario/formulario';
import { RegisterPage } from '../register/register';
import { BtSerialPage } from '../bt-serial/bt-serial';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goRegister() {
    this.navCtrl.push(RegisterPage)
  }
  goLogin() {
    this.navCtrl.push(LoginPage)
  }
  goFb() {
    this.navCtrl.push(FbPage)
  }
  goListas() {
    this.navCtrl.push(ListasPage)
  }
  goCamara() {
    this.navCtrl.push(CamaraPage)
  }
  goMapa() {
    this.navCtrl.push(MapaPage)
  }
  goGestos() {
    this.navCtrl.push(GestosPage)
  }
  goBtSerial(){
    this.navCtrl.push(BtSerialPage)
  }
  goFormulario(){
    this.navCtrl.push(FormularioPage)
  }
}
