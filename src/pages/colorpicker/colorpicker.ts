import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ColorPickerModule } from 'ngx-color-picker';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the ColorpickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-colorpicker',
  templateUrl: 'colorpicker.html',
})
export class ColorpickerPage {
colorToSet: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public BluetoothSerial: BluetoothSerial) {
  }
  onItemChange(selectedValue: string) {
      console.log(selectedValue.slice(4, -1));
    this.colorToSet = selectedValue.slice(4, -1);
    }

    setColor(){
      if (this.colorToSet){
        this.BluetoothSerial.write(this.colorToSet).then((resp) =>{

        },(error) => {
          alert(error);
        });
        console.log(this.colorToSet)
        console.log("set color: " + this.colorToSet)
      }
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorpickerPage');
  }

}
