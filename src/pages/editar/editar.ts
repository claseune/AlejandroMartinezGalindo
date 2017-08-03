import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the EditarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  records: FirebaseListObservable<any>;
  private editFormData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public formBuilder: FormBuilder, public viewCtrl: ViewController) {
  this.records = db.list('/personas');
    this.editFormData = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      hobby: ['', Validators.required]
    });
}

goEdit() {
    var key = this.navParams.get('key');
    this.records.update(key, this.editFormData.value)
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

}
