import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slides = [
    {
      title: "Selamat datang di CATERINGKU!",
      description: "Silahkan pilih menu yang kamu sukai. Pesan makan dengan menu bervarisi lebih mudah di sini.",
      image: "assets/imgs/sliderctr.png",
    },
    {
      title: "Order",
      description: "Pesanan dapat kami antar ke lokasi anda. Layanan customer kami utamakan.",
      image: "assets/imgs/sliderctr.png",
    },
    {
      title: "Harga",
      description: "Dapatkan harga termurah di sini.",
      image: "assets/imgs/sliderctr.png",
    }
  ];
}