import {Component, OnInit} from "@angular/core";
import {ImageService} from "../image.service";

@Component({
  selector: "app-display-image",
  templateUrl: "./display-image.component.html",
  styleUrls: ["./display-image.component.css"]
})
export class DisplayImageComponent implements OnInit {
  private image = "";
  private name = "";

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.image.subscribe(image => {
      this.image = image;
    });
    this.imageService.name.subscribe(name => {
      this.name = name;
    });
  }

}
