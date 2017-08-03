import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ColorpickerPage} from '../colorpicker/colorpicker';




/**
 * Generated class for the BtSerialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bt-serial',
  templateUrl: 'bt-serial.html',
})
export class BtSerialPage {
  devices: any;
  unpaireds: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public BluetoothSerial: BluetoothSerial) {
  }

  discoveredUnpairedDevices()
  {
    console.log('Buscando...')
    this.BluetoothSerial.discoverUnpaired().then((resp) => {
      this.unpaireds = resp;
      console.log(this.unpaireds)
    }, (error) => {
      console.log(error)
    })
  }
  connectToDevice(id)
  {
    this.BluetoothSerial.connect(id).subscribe(resp =>{
      this.navCtrl.push(ColorpickerPage);
      //this.BluetoothSerial.write('CONECTED');
      console.log('ID: ' + id);
      console.log('resp ' + resp);
    })
    }
  
    
  
  ionViewDidLoad() {
    this.BluetoothSerial.list().then((success) => {
      console.log(success);
      this.devices = success;
    }, (error) => {
      console.log(error);
    })
    
  }

}
