import {Injectable} from "@angular/core";
import {Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  image = new Subject<string>();
  name = new Subject<string>();

  constructor() {}

  setImage(image) {
    this.image.next(image);
  }

  setName(name) {
    this.name.next(name);
  }
}
