import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  requireLowercase = 0;
  requireUppercase = 0;
  requireNumber = 0;
  requireSpecialChar = 0;
  minLength = 0;
  expirationTime = 0;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    const component = this;

    this.adminService.getPasswordRules()
    .then(function (data) {
      component.requireLowercase = data.requireLowercase ? 1 : 0;
      component.requireUppercase = data.requireUppercase ? 1 : 0;
      component.requireNumber = data.requireNumbers ? 1 : 0;
      component.requireSpecialChar = data.requireSpecialCharacters ? 1 : 0;
      component.minLength = data.minLength;
      component.expirationTime = data.expirationTime;
    })
    .catch(function (err) {
      console.log('Erreur lors de la récupération des règles de sécurité des mots de passe', err);
    });
  }

  onSubmit() {
    const reqLowercase = (this.requireLowercase === 1);
    const reqUppercase = (this.requireUppercase === 1);
    const reqNumber = (this.requireNumber === 1);
    const reqSpecialChar = (this.requireSpecialChar === 1);

    this.adminService.savePasswordRules(reqLowercase, reqUppercase, reqNumber, reqSpecialChar, this.minLength, this.expirationTime)
    .then(function (data) {
      console.log('Sauvegarde des règles de sécurité des mots de passe réussi !');
    })
    .catch(function(err) {
      console.log('Erreur lors de la sauvegarde des règles de sécurité des mots de passe', err);
    });
  }
}
