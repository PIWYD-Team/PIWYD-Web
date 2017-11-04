import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  public acceptedExtensions = 'image/*, audio/*, video/*, .xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf, .zip, .tar, .html, .xml, .js';

  constructor() { }

  ngOnInit() {
  }

  uploadFile() {

  }

  download() {
    console.log('coucou');
  }
}
