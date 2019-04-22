import { Injectable } from "@angular/core";
import {Observable, of, Subject} from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ImageService {
  url = new Subject<string>() ;
  name = new Subject<string>();
  constructor() { }

  setURL(url) {
    this.url.next(url);
  }

  setName(name) {
    this.name.next(name);
  }
}
