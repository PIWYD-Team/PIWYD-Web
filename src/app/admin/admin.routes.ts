
import {AdminComponent} from './admin.component';
import {AdminGuardService} from './admin-guard.service';

export const AdminRoute = {
  path: 'admin',
  component: AdminComponent,
  canActivate: [AdminGuardService]
};

export const AdminComponents = [
  AdminComponent
];
