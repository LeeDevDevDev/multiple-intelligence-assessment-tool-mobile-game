import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  logoSrc = 'assets/icon/logo.svg';
  hasError: boolean;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public alertController: AlertController,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group(
      {
        email: [null, Validators.required],
        password: [null, [Validators.minLength(6)]]
      },
      { updateOn: 'submit' }
    );
  }

  ngOnInit() {}

  async onSignInClick(): Promise<void> {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (this.loginForm.invalid) {
      console.log('invalid');
      return;
    }

    try {
      const sign = await this.authService.sign(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      );

      await this.router.navigate(['main']);
    } catch (e) {
      const alert = await this.alertController.create({
        animated: true,
        header: 'Whoops!',
        message: e.message,
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
