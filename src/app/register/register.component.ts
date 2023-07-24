import { Component } from '@angular/core';

interface BloodGroup {
  name: string;
  value: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  bloodGroups: BloodGroup[] = [
    {
      name: 'A+',
      value: 'A+'
    },
    {
      name: 'A-',
      value: 'A-'
    },
    {
      name: 'B+',
      value: 'B+'
    },
    {
      name: 'B-',
      value: 'B-'
    },
    {
      name: 'AB+',
      value: 'AB+'
    },
    {
      name: 'AB-',
      value: 'AB-'
    },
    {
      name: 'O+',
      value: 'O+'
    },
    {
      name: 'O-',
      value: 'O-'
    },
  ];
}
