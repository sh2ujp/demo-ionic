import {Component, OnInit}            from '@angular/core';
import {CommonModule}                 from '@angular/common';
import {FormsModule}                  from '@angular/forms';
import {IonicModule, ToastController} from '@ionic/angular';
import {RouterLink}                   from "@angular/router";

@Component({
  selector: 'app-demo-toast',
  templateUrl: './demo-toast.page.html',
  styleUrls: ['./demo-toast.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class DemoToastPage implements OnInit {

  constructor(
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'YEEEEEEEEEEEEAH!!',
      duration: 300,
    });

    await toast.present();
  }
}
