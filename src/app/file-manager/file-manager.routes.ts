import { FileManagerComponent } from './file-manager.component';
import {FileManagerGuardService} from './file-manager-guard.service';

export const FileManagerRoute = {
  path: 'file-manager',
  component: FileManagerComponent,
  canActivate: [FileManagerGuardService]
};

export const FileManagerComponents = [
  FileManagerComponent
];
