import { Component } from '@angular/core';
import { LocationService } from '../location.service'; // Update the path if needed

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent {
  phoneNumber: string = '';
  location: any;

  constructor(private locationService: LocationService) {}

  submitForm() {
    if (this.phoneNumber) {
      this.locationService.getLocationByPhone(this.phoneNumber).subscribe(
        (data: any) => {
          this.location = data;
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    }
  }
}
