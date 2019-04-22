import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {Image} from "../../image";

@Component({
  selector: "app-dialog-modal",
  templateUrl: "./dialog-modal.component.html",
  styleUrls: ["./dialog-modal.component.css"]
})
export class DialogModalComponent implements OnInit {
  result: Image = {content: "", name: ""};

  constructor(public dialogRef: MatDialogRef<DialogModalComponent>) { }

  ngOnInit() {
  }

  onClose() {
    console.log("clicked close");
    this.dialogRef.close();
  }

  receiveImage($event) {
    console.log("event is", $event);
    this.result.content = $event.content;
  }
}
