import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {Image} from "../../image";

@Component({
  selector: "app-dialog-modal",
  templateUrl: "./dialog-modal.component.html",
  styleUrls: ["./dialog-modal.component.css"]
})
export class DialogModalComponent implements OnInit {
  name = "";
  result: Image = {content: "", name: ""};

  constructor(public dialogRef: MatDialogRef<DialogModalComponent>) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  receiveImage($event) {
    this.result = {
      content: $event.content,
      name: this.name
    };
  }
}
