import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {Image} from "../../image";

@Component({
  selector: "app-dialog-modal",
  templateUrl: "./dialog-modal.component.html",
  styleUrls: ["./dialog-modal.component.css"]
})
export class DialogModalComponent implements OnInit {
  /**
   * This is the dialog which is responsible for generating an {Image} object from a selected file and a given name
   *
   * the resulting output of the modal is an {Image} object
   */
  result: Image = {content: "", name: ""};
  fileName = "";
  isValid = false;
  error = false;

  constructor(public dialogRef: MatDialogRef<DialogModalComponent>) {
  }

  ngOnInit() {
  }

  onClose() {
    console.log("clicked close");
    this.dialogRef.close();
  }

  receiveImage($event) {
    if ($event) {
      console.log("event is", $event);
      this.fileName = $event.name;
      this.result.content = $event.content;
      this.isValid = true;
    } else {
      this.fileName = "";
      this.isValid = false;
      this.error = true;
    }
  }

  receiveValidation($event) {
    if (this.result.name === "") {
      this.isValid = false;
    } else {
      this.isValid = $event;
    }
  }

  receiveError($event) {
    console.log("error is", $event);
    this.error = $event;
  }
}
