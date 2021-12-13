import { Component, OnInit } from '@angular/core';
import { ChechFormService } from '../chech-form.service';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  constructor(
    private checkForm: ChechFormService,
    private flashMesages: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  name?: string
  login?: string
  email?: string
  password?: string


  userRegister() {
    let user: {
      name?: string
      login?: string
      email?: string
      password?: string
    } = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    }

    if (!this.checkForm.checkName(user.name)) {
      this.flashMesages.show('no name', { cssClass: 'alert', timeout: 2500 });
      console.log('no name')
    } else {
      console.log(user.name)
    }

    if (!this.checkForm.checkLogin(user.login)) {
      this.flashMesages.show('no login', { cssClass: 'alert', timeout: 2500 });
      console.log('no login')
    } else {
      console.log(user.login)
    }

    if (!this.checkForm.checkEmail(user.email)) {
      this.flashMesages.show('no email', { cssClass: 'alert', timeout: 2500 });
      console.log('no email')
    } else {
      console.log(user.email)
    }

    if (!this.checkForm.checkPassword(user.password)) {
      this.flashMesages.show('no password', { cssClass: 'alert', timeout: 2500 });
      console.log('no password')
    } else {
      console.log(user.password)
    }
    console.log(user)

    this.authService.regUser(user).subscribe(data => {
      if (!data.success) {
        console.log(`what` + !data.success)
        this.flashMesages.show(data.msg, { cssClass: 'alert-danger', timeout: 2500 });
        this.router.navigate(['account'])
      }

      if (data.success) {
        console.log(`yes` + data.success)
        this.flashMesages.show(data.msg, { cssClass: 'alert-succses', timeout: 2500 });
        this.router.navigate(['/'])
      }
    });

    return true;
  }
}
