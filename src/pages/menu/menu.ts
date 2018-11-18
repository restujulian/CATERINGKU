import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Pemesanan!',
      message: 'Terimakasih telah mempercayakan kepada kami untuk menu makanan pilihan anda. Silahkan cek pemesanan anda pada tab pemesanan dan konfirmasi pesanan anda!',
      buttons: ['Ok']
    });
    alert.present()
  }

}