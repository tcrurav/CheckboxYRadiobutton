import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html'
})
export class SportsPage {
    futbol: boolean;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.futbol = true;
    }

    actualizaFutbol() {
        this.showAlert();
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Fútbol',
            subTitle: 'El valor de Fútbol es: ' + this.futbol,
            buttons: ['OK']
        });
        alert.present();
    }

}
