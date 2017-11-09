import { Component, OnInit } from '@angular/core';
import {FileManagerService} from './file-manager.service';
import {saveAs} from 'file-saver';

import 'rxjs/Rx';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  public acceptedExtensions = 'image/*, audio/*, video/*, .xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .tar, .html, .xml, .js';

  newFile: File;
  newFileName: string;
  files: Array<any>;

  constructor(private fileManagerService: FileManagerService) { }

  ngOnInit() {
    this.getAllFiles();
  }

  getAllFiles() {
    const component = this;
    this.fileManagerService.getAllUserFiles()
      .then(function (data) {
        component.files = data;
      })
      .catch(function (err) {
        console.log('Erreur lors du chargement des fichiers de l\'utilisateur', err);
      });
  }

  onFileChange(file) {
    if (file) {
      this.newFile = file;
      this.newFileName = file.name;
    }
  }

  onSubmitUpload() {
    console.log('File : ', this.newFile);
    const component = this;

    this.fileManagerService.uploadFile(this.newFile)
      .then(function(data) {
        console.log('Retour d\'upload file', data);
        component.getAllFiles();
      }).catch(function (err) {
        console.log('Erreur lors de l\'ajout du fichier', err);
      });
  }

  download(file) {
    this.fileManagerService.downloadFile(file.id)
      .then(function (data) {
        const blob = new Blob([data]);
        saveAs(blob, file.name);

        /*
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        */
      })
      .catch(function (err) {
        console.log('Erreur lors du téléchargement du fichier', err);
      });
  }
}
