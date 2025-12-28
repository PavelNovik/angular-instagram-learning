import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'inst-email-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.html',
  styleUrl: './email-form.scss',
})
export class EmailForm {
  email = new FormControl('');
}
