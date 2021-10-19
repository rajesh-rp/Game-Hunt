import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostYourMatchComponent } from './host-your-match/host-your-match.component';
import { LoginComponent } from './login/login.component';
import { FreeMatchesComponent } from './matches/free-matches/free-matches.component';
import { PaidMatchesComponent } from './matches/paid-matches/paid-matches.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RanksComponent } from './ranks/ranks.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full'},
  {path:'home',component:UserComponent,canActivate:[AuthGuardGuard]},
  {path:'registerforfreematch',component:FreeMatchesComponent},
  {path:'registerforpaidmatch',component:PaidMatchesComponent},
  {path:'hostmatch',component:HostYourMatchComponent},
  {path:'tdm',redirectTo:'home'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'editprofile',component:EditProfileComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'rank', component:RanksComponent},
  {path:'bookslot', component:SlotBookingComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
