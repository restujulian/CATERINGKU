import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-paket',
  templateUrl: 'paket.html'
})

export class PaketPage {

public pakets : any = [];
  constructor(
              public navCtrl: NavController,
              public http   : Http,
              public alerCtrl: AlertController
              ) 
  { 

  }
  ionViewWillEnter() : void
  {
    this.load();
  }

  load(){
      this.http.get('http://localhost/service-ionic/retrieve-data-paket.php').map(res => res.json()).subscribe(data => {this.pakets = data;});
   }

  addEntry(kode_menu, nama_menu, harga){

    let body     : string   = "",
    type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
    headers  : any      = new Headers({'Content-Type': type}),
    options  : any      = new RequestOptions({ headers: headers }),
    url      : any      = "http://localhost/service-ionic/retrieve-data-pesanan.php?kode_pesan=" + kode_menu + "&nama_menu=" + nama_menu + "&subtotal=" + harga;

    //request http ke server
    this.http.post(url, body, options)
    .subscribe((data) =>{

    });

    this.doAlert();
  }

  viewEntry(param){
      this.navCtrl.push('AddMenuPage', param);
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Pemesanan!',
      message: 'Terimakasih telah mempercayakan kepada kami untuk menu makanan pilihan anda. Silahkan cek pemesanan anda pada tab pemesanan dan konfirmasi pesanan anda!',
      buttons: ['Ok']
    });
    alert.present()
  }
}
