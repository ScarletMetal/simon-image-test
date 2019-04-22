import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {Image} from "../../image";

const ImageFileTypes = [
  "jpg", "jpeg", "png", "gif"
];

@Component({
  selector: "app-select-button",
  templateUrl: "./select-button.component.html",
  styleUrls: ["./select-button.component.css"]
})
export class SelectButtonComponent implements OnInit {
  /**
   * This value allows the user to pick an image file from the file system and outputs an {Image} object to an {EventEmitter}
   */
  constructor() {
  }

  @ViewChild("file") file;

  @Output() imageEvent = new EventEmitter<Image>();
  @Output() validationEvent = new EventEmitter<boolean>();
  @Output() errorEvent = new EventEmitter<string>();
  click() {
    this.file.nativeElement.click();
  }

  validateFileName(name: string) {
    const items = name.split(".");
    const extension = items[items.length - 1];
    return ImageFileTypes.indexOf(extension) !== -1;
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      const isValid = this.validateFileName(file.name);
      if (isValid) {
        console.log("valid");
        reader.onload = (readingEvent: any) => {
          const img: Image = {content: readingEvent.target.result, name: file.name};
          this.imageEvent.emit(img);
        };
        reader.readAsDataURL(file);
      } else {
        this.imageEvent.emit();
      }
    }
  }

  ngOnInit() {
  }

}
