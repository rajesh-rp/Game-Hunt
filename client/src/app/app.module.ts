import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {CardModule} from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonNavBarComponent } from './button-nav-bar/button-nav-bar.component';
import { HostYourMatchComponent } from './host-your-match/host-your-match.component';
import { FreeMatchesComponent } from './matches/free-matches/free-matches.component';
import { PaidMatchesComponent } from './matches/paid-matches/paid-matches.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RanksComponent } from './ranks/ranks.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { AuthGuardGuard } from './services/auth-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    NavbarComponent,
    ButtonNavBarComponent,
    HostYourMatchComponent,
    FreeMatchesComponent,
    PaidMatchesComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    AboutusComponent,
    RanksComponent,
    ScheduleComponent,
    SlotBookingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    AgGridModule.withComponents([])
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
