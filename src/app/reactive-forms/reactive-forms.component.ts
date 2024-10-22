import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ForbiddenNameValidation } from '../custom-validators/username.validator';
import { confirmPasswordValidator } from '../custom-validators/confirmPassword.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent implements OnInit {
  registerationForm: FormGroup;
  getControl(control: string) {
    return this.registerationForm.get(control);
  }

  get alternativeEmails() {
    return this.registerationForm.get('alternativeEmails') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerationForm = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            ForbiddenNameValidation,
          ],
        ],
        password: [''],
        confirmPassword: [''],
        email: [''],
        subscribe: [false],
        alternativeEmails: this.formBuilder.array([]),
        address: this.formBuilder.group({
          state: [''],
          city: [''],
          postalCode: [''],
        }),
      },
      { validator: confirmPasswordValidator }
    );
  }
  // registerationForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     state: new FormControl(''),
  //     city: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  loadData() {
    // this.registerationForm.setValue({
    //   username: 'mahmoud',
    //   password: '123',
    //   confirmPassword: '123',
    //   address: {
    //     city: 'banha',
    //     state: 'Egypt',
    //     postalCode: '123',
    //   },
    // });
    this.registerationForm.patchValue({
      username: 'mahmoud',
      address: {
        city: 'banha',
        state: 'Egypt',
        postalCode: '123',
      },
    });
  }
  setEmailValidator() {
    this.registerationForm
      .get('subscribe')
      ?.valueChanges.subscribe((checkedValue) => {
        const email = this.registerationForm.get('email');
        if (checkedValue) {
          email?.setValidators([Validators.required, Validators.email]);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

  addNewEmail() {
    this.alternativeEmails.push(
      this.formBuilder.control('', Validators.required)
    );
  }
  removeEmail(index: number) {
    this.alternativeEmails.removeAt(index);
  }
}
