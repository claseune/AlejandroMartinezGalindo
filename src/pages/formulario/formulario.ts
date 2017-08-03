import { Component } from '@angular/core';

import { AlertController, ModalController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

import { EditarPage } from '../editar/editar';


/**
 * Generated class for the FormularioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
info: any;
  records: FirebaseListObservable<any>;
  private formularioFormData: FormGroup;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public FormBuilder: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  this.records = db.list('/personas');

      this.formularioFormData = this.FormBuilder.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        hobby: ['',Validators.required]
      })
}

public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };

save(){
    if(this.formularioFormData.valid){
      this.records.push(this.formularioFormData.value);
      this.showToast('Se ha guardado correctamente', 3000);
    }else{
      this.showToast('No ha llenado la información', 3000);
      console.error('No ha llenado la información')
    }   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
