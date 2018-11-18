import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { PaketPage } from '../paket/paket';
import { PemesananPage } from '../pemesanan/pemesanan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuPage;
  tab3Root = PaketPage;
  tab4Root = PemesananPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
