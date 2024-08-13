import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneInputComponent } from './phone-input/phone-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/phone-input', pathMatch: 'full' },
  { path: 'phone-input', component: PhoneInputComponent },
  { path: '**', redirectTo: '/phone-input' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
