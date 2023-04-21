import {Component, OnInit}            from '@angular/core';
import {CommonModule}                 from '@angular/common';
import {FormsModule}                  from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {RouterLink}                   from "@angular/router";
import {home}                         from "ionicons/icons";

@Component({
  selector: 'app-demo-alert',
  templateUrl: './demo-alert.page.html',
  styleUrls: ['./demo-alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class DemoAlertPage implements OnInit {

  protected readonly home = home;

  constructor(
    public alertCtrl: AlertController
  ) {
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'New Friend!',
      message: 'Your friend, Obi Khan Webnooby just accepted your fired request!',
      buttons: ['OK'],
    });

    await alert.present();
    console.log(alert); //FIXME: trouver le moyen de récup le flux console sur android en live reload
  }

  ngOnInit() {
  }
}
