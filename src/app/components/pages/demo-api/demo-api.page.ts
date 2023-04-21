import {Component, OnInit}            from '@angular/core';
import {CommonModule}                 from '@angular/common';
import {FormsModule}                  from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {KaamelottProviderService}     from "../../../providers/kaamelott-provider.service";
import {KaamelottReplique}            from "../../../models/KaamelottReplique";
import {RouterLink}                   from "@angular/router";

@Component({
  selector: 'app-demo-api',
  templateUrl: './demo-api.page.html',
  styleUrls: ['./demo-api.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class DemoAPIPage implements OnInit {
  citation?: KaamelottReplique;

  constructor(
    private kaamelottProvider: KaamelottProviderService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  async onKaamelott() {
    // version .then().catch()
    // this.kaamelottProvider.getReplique()
    //     .then((citation) => this.citation = citation)
    //     .catch(async (error) => {
    //       const alert = await this.alertCtrl.create({
    //         header: 'Erreur dans le toaster !',
    //         message: 'API en vrack!',
    //       });
    //       await alert.present();
    //     });

    // version async / await
    try {
      this.citation = await this.kaamelottProvider.getReplique();
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Erreur dans le toaster !',
        message: 'API en vrack!',
      });
      await alert.present();
    }
  }
}
