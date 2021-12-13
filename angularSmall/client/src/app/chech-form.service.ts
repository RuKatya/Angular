import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChechFormService {

  constructor() { }

  checkName(name?: string) {
    if (name == undefined) {
      return false
    } else {
      return true
    }
  }

  checkLogin(login?: string) {
    if (login == undefined) {
      return false
    } else {
      return true
    }
  }

  checkEmail(email?: string) {
    if (email == undefined) {
      return false
    } else {
      return true
    }
  }

  checkPassword(password?: string) {
    if (password == undefined) {
      return false
    } else {
      return true
    }
  }
}
