import { Component, OnInit } from '@angular/core';
import {FileManagerService} from './file-manager.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  public acceptedExtensions = 'image/*, audio/*, video/*, .xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .tar, .html, .xml, .js';

  newFile: File;
  newFileName: string;
  files;

  constructor(private fileManagerService: FileManagerService) { }

  ngOnInit() {
    this.fileManagerService.getAllUserFiles();
  }

  onFileChange(file) {
    this.newFile = file;
    this.newFileName = file.name;
  }

  onSubmitUpload() {
    console.log('File : ', this.newFile);

    this.fileManagerService.uploadFile(this.newFile)
      .then(function(data) {
        console.log('Retour d\'upload file', data);
      }).catch(function (err) {
        console.log('Erreur', err);
      });
  }

  download() {
    console.log('coucou');
  }
}
