import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {Image} from "../image";

@Component({
  selector: "app-upload-button",
  templateUrl: "./select-button.component.html",
  styleUrls: ["./select-button.component.css"]
})
export class SelectButtonComponent implements OnInit {

  constructor() {
  }

  @ViewChild("file") file;

  click() {
    this.file.nativeElement.click();
  }

  @Output() imageEmitter = new EventEmitter<Image>();

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.onload = (readingEvent: any) => {
        const img: Image = {content: readingEvent.target.result, name: file.name};
        this.imageEmitter.emit(img);
      };

      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
  }

}
