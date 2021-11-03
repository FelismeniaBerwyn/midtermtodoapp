import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.page.html',
  styleUrls: ['./profile-modal.page.scss'],
})
export class ProfileModalPage implements OnInit {
  @Input() firstname: any;
  @Input() lastname: any;
  @Input() description: any;
  profileForm: FormGroup;

  constructor(
    private formGroup: FormBuilder,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.profileForm = this.formGroup.group({
      firstname: [this.firstname, Validators.required],
      lastname: [this.lastname, Validators.required],
      description: [this.description, Validators.required],
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async updateProfile(e) {
    await this.modalCtrl.dismiss({
      firstname: this.profileForm.get('firstname').value,
      lastname: this.profileForm.get('lastname').value,
      description: this.profileForm.get('description').value,
    });
  }
}
