import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialForm: FormGroup;

  constructor(
    public menuCtrl: MenuController,
    private formGroup: FormBuilder,
    private router: Router,
    private _loginService: LoginService,
    private _uiService: UiService
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.credentialForm = this.formGroup.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.credentialForm.valid) {
      this._loginService
        .loginRequest(this.credentialForm.value)
        .subscribe((data: any) => {
          console.log(data);
          if (data.data) {
            this._uiService.presentToast('Login Successfully');
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
