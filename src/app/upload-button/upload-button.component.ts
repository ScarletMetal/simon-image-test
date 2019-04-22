import {Component, OnInit, ViewChild} from "@angular/core";
import {MatButtonModule} from "@angular/material";
import {ImageService} from "../image.service";
import {Image} from "../image";

@Component({
  selector: "app-upload-button",
  templateUrl: "./upload-button.component.html",
  styleUrls: ["./upload-button.component.css"]
})
export class UploadButtonComponent implements OnInit {

  constructor(private imageService: ImageService) {
  }

  @ViewChild("file") file;

  click() {
    this.file.nativeElement.click();
  }


  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.onload = (readingEvent: any) => {
        const img: Image = {content: readingEvent.target.result, name: file.name};
        this.imageService.setImage(img);
      };

      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
  }

}
