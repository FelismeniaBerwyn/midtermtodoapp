import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    public menuCtrl: MenuController,
    private formGroup: FormBuilder,
    private router: Router,
    private _uiService: UiService,
    private _signupService: SignupService
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.registerForm = this.formGroup.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.valid) {
      this._signupService
        .signupRequest(this.registerForm.value)
        .subscribe((data: any) => {
          console.log(data);
          if (data.data) {
            this._uiService.presentToast('Signup Successfully');
            this.router.navigate(['/home']);
            localStorage.setItem('user', JSON.stringify(data.data));
          } else if (data.error) {
            this._uiService.presentToast(data.error);
          }
        });
    } else {
      this._uiService.presentToast('Please fill in the required fields');
    }
  }
}
