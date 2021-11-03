import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileModalPage } from '../profile-modal/profile-modal.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  firstname: string = 'berwyn';
  lastname: string = 'felismenia';
  description: string =
    'I am a BSIT student at Gordon College. My favorite subjects are software development related and the reason why i am passionate about this is because of the technology we have today and because i consider programming as an art in which i can express my creativity and i also like to learn new technology by experimenting by myself.';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async edit() {
    const modal = await this.modalCtrl.create({
      component: ProfileModalPage,
      componentProps: {
        firstname: this.firstname,
        lastname: this.lastname,
        description: this.description,
      },
    });
    await modal.present();

    modal.onDidDismiss().then((res) => {
      // console.log(res.data.firstname);
      if (res.data !== undefined) {
        this.firstname = res.data.firstname;
        this.lastname = res.data.lastname;
        this.description = res.data.description;
      }
    });
  }
}
