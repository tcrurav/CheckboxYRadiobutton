import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-sex',
    templateUrl: 'sex.html'
})
export class SexPage {
    sexo: string;
    mostrarMensaje: boolean;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.sexo = "Mujer";
        this.mostrarMensaje = false;
    }

    actualizarSexo(): void {
        if (this.mostrarMensaje) {
          this.showAlert();
        }
       
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Sexo',
            subTitle: 'El valor de Sexo es: ' + this.sexo,
            buttons: ['OK']
        });
        alert.present();
    }
}
