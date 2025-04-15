import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'

})

export class ContactComponent {
 /*ontactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:3000/api/contact', this.contactForm.value)
        .subscribe(response => {
          console.log('Form submitted successfully!', response);
        }, error => {
          console.error('Error submitting the form!', error);
        });
    }
  }*/
}
