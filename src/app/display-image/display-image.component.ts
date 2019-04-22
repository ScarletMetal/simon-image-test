import {Component, OnInit} from "@angular/core";
import {ImageService} from "../image.service";

@Component({
  selector: "app-display-image",
  templateUrl: "./display-image.component.html",
  styleUrls: ["./display-image.component.css"]
})
export class DisplayImageComponent implements OnInit {
  private url = "";

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.url.subscribe(url => {
      this.url = url;
    });
  }

}
