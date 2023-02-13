import { fadeInOut } from './../../Services/animation';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
  animations: [fadeInOut]
})
export class LoginLayoutComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted = false;
  isErrors: any = false;
  router: any;
  exist: any = false;
  msg: any;
  showOtp: any = false;
  @Input() show: any = false;
  @Output() emit = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private routerLink: Router) {
    this.form = fb.group({});
    this.router = routerLink;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      numberphone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  // bắt lỗi khi phát hiện
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form);
    const numberphone = this.form.value.numberphone;

    if (this.form.invalid) {
      this.isErrors = true;
      return;
    }

    // this.loginService.sendActiveCode(numberphone).subscribe(
    // (data: any) => {
    // console.log(data);
    // if (data.result == null) {
    this.isErrors = true;
    // this.msg = data.msg;
    console.log(this.msg);
    // return;
    // }
    // this.router.navigate(['/OTP']);
    localStorage.setItem('numberPhoneUser', numberphone);
    // },
    // (error: any) => console.log(error)
    // );
    this.showOtp = true;
    this.form.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  // OTP
  formOtp: FormGroup = new FormGroup({});
  submittedOtp: any = false;
  otp: any = '';
  errors: any = false;
  loginService: any;
  numberphone: any = '';

  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '0',
    inputStyles: { width: '50px', height: '50px' },
  };

  catchEmit(value: any) {
    this.emit.emit(!this.show);
    this.showOtp = value;
  }

  close() {
    this.emit.emit(!this.show);
  }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }
}
