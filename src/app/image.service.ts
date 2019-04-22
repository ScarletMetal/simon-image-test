import {Injectable} from "@angular/core";
import {Observable, of, Subject} from "rxjs";
import {Image} from "./image";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  /**
   * This service holds the data for the uploaded image
   */
  image = new Subject<Image>();

  constructor() {}

  setImage(image) {
    this.image.next(image);
  }
}
