import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateEmailComponent } from './components/update-email/update-email.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { ChangeEmailComponent } from './components/change-email/change-email.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'verify-user',
    component: VerifyUserComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'password-reset',
    component: SetPasswordComponent,
  },
  {
    path: 'update-email',
    component: UpdateEmailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'change-email',
    component: ChangeEmailComponent,
  },
  {
    path: 'update-password',
    component: UpdatePasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-user',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'delete-user',
    component: DeleteUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
