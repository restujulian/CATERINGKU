import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-pemesanan',
  templateUrl: 'pemesanan.html'
})
export class PemesananPage {

public pesanan : any = [];
  constructor(
              public navCtrl: NavController,
              public http   : Http,
              public loadingCtrl: LoadingController
              ) 
  { 

  }
  ionViewWillEnter() : void
  {
    this.load();
  }

  load(){
      this.http.get('http://localhost/service-ionic/retrieve-data-show-pesanan.php').map(res => res.json()).subscribe(data => {this.pesanan = data;});
  }

  delPesanan(id_pemesanan){

    let body     : string   = "",
    type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
    headers  : any      = new Headers({'Content-Type': type}),
    options  : any      = new RequestOptions({ headers: headers }),
    url      : any      = "http://localhost/service-ionic/delete-pesanan.php?id_pemesanan=" + id_pemesanan;

    //request http ke server
    this.http.post(url, body, options)
    .subscribe((data) =>{

    });

    this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 8000,
      dismissOnPageChange: true
    }).present();
    this.reloadPesanan();
  }

  reloadPesanan(){
    this.navCtrl.push(PemesananPage);
  }

}
