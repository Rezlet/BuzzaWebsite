import { fadeInOut } from './../../Services/animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  @Input() show: any;
  @Output() emit = new EventEmitter<boolean>();
  form: FormGroup = new FormGroup({});
  submitted: any = false;
  otp: any = '';
  errors: any = false;
  loginService: any;
  numberphone: any = '';
  router: any;
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
  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '0',
    inputStyles: { width: '50px', height: '50px' },
  };
  handleOtpChange(value: any): void {
    this.otp = value;
    if (this.otp.length == 4) {
      this.onSubmit();
    }
    console.log(this.numberphone);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    // this.submitted = true;
    // console.log(this.form);
    // const numberphone = this.form.value.numberphone;

    // if (this.form.invalid) {
    //   this.isErrors = true;
    //   return;
    // }

    // this.loginService.sendActiveCode(numberphone).subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     if (data.result == null) {
    //       this.isErrors = true;
    //       this.msg = data.msg;
    //       console.log(this.msg)
    //       return;
    //     }
    //     this.router.navigate(['/OTP']);
    //     localStorage.setItem('numberPhoneUser', numberphone);
    //   },
    //   (error: any) => console.log(error)
    // );
    this.close()
    this.form.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  close() {
    this.emit.emit(!this.show);

  }


  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }
}
