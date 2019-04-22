import {Component, OnInit, ViewChild} from "@angular/core";
import {MatButtonModule} from "@angular/material";
import {ImageService} from "../image.service";

@Component({
  selector: "app-upload-button",
  templateUrl: "./upload-button.component.html",
  styleUrls: ["./upload-button.component.css"]
})
export class UploadButtonComponent implements OnInit {

  constructor(private imageService: ImageService) {
  }

  url = "";
  @ViewChild("file") file;

  click() {
    this.file.nativeElement.click();
  }


  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.onload = (readingEvent: any) => {
        this.imageService.setURL(readingEvent.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
  }

}
