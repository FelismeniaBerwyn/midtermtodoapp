import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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
      if (
        this.credentialForm.get('username').value === 'berwyn' &&
        this.credentialForm.get('password').value === 'qwe'
      ) {
        this.router.navigate(['/home']);
      } else {
        console.log('try again!');
      }
    } else {
      console.log('try again!');
    }
  }
}
