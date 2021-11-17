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
  firstname: string = '';
  lastname: string = '';
  description: string = '';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    let data = JSON.parse(localStorage.getItem('user'));
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.description = data.description;
  }

  async edit() {
    const modal = await this.modalCtrl.create({
      component: ProfileModalPage,
    });
    // const modal = await this.modalCtrl.create({
    //   component: ProfileModalPage,
    //   componentProps: {
    //     firstname: this.firstname,
    //     lastname: this.lastname,
    //     description: this.description,
    //   },
    // });
    await modal.present();

    modal.onDidDismiss().then((res) => {
      if (res.data !== undefined) {
        this.firstname = res.data.firstname;
        this.lastname = res.data.lastname;
        this.description = res.data.description;
      }
    });
  }
}
