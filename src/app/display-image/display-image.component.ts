import {Component, OnInit} from "@angular/core";
import {ImageService} from "../image.service";

@Component({
  selector: "app-display-image",
  templateUrl: "./display-image.component.html",
  styleUrls: ["./display-image.component.css"]
})
export class DisplayImageComponent implements OnInit {
  private image = "";

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.image.subscribe(url => {
      this.image = url;
    });
  }

}
