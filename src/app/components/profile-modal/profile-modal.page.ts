import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.page.html',
  styleUrls: ['./profile-modal.page.scss'],
})
export class ProfileModalPage implements OnInit {
  profileForm: FormGroup;

  constructor(
    private formGroup: FormBuilder,
    private router: Router,
    private modalCtrl: ModalController,
    private _profileService: ProfileService,
    private _uiService: UiService
  ) {}

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('user'));
    this.profileForm = this.formGroup.group({
      id: [data.id, Validators.required],
      firstname: [data.firstname, Validators.required],
      lastname: [data.lastname, Validators.required],
      username: [data.username, Validators.required],
      description: [data.description, Validators.required],
      password: [data.password, Validators.required],
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async updateProfile(e) {
    this._profileService
      .updateProfileRequest(this.profileForm.value)
      .subscribe(async (data: any) => {
        if (data.data) {
          this._uiService.presentToast('Update Successfully!');

          localStorage.setItem('user', JSON.stringify(this.profileForm.value));
          await this.modalCtrl.dismiss({
            firstname: this.profileForm.get('firstname').value,
            lastname: this.profileForm.get('lastname').value,
            description: this.profileForm.get('description').value,
          });
        } else if (data.error) {
          this._uiService.presentToast('Something went wrong!');
        }
      });
  }

  deactivateAcc() {
    this._profileService
      .deactivateAcc(this.profileForm.get('id').value)
      .subscribe((res) => {
        this._uiService.presentToast('Deactivate Success!');
      });
  }
}
