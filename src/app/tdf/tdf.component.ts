import { Component, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emit } from 'process';
import { IRegisterModel } from '../register.model';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss',
})
export class TdfComponent {
  @ViewChild('registerForm', { static: true }) registerForm: NgForm;
  defualtQuestion: string = 'doctor';
  answer: string = '';
  genders = ['male', 'famel'];
  submite: boolean = false;
  register: IRegisterModel;
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submite = true;
    this.register = this.registerForm.value.userData;
    console.log(this.register);
    this.registerForm.reset();
  }
  suggestUsername() {
    const suggestedName = 'mahmoud';
    // this.registerForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //     secret: 'teacher',
    //     questionAnswer: 'Test',
    //     gender: 'male',
    //   },
    // });
    this.registerForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
}
