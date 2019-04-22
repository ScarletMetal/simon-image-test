import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material";
import {DialogModalComponent} from "../dialog-modal/dialog-modal.component";
import {ImageService} from "../../image.service";

@Component({
  selector: "app-upload-button",
  templateUrl: "./upload-button.component.html",
  styleUrls: ["./upload-button.component.css"]
})
export class UploadButtonComponent implements OnInit {

  dialogWidth = "70vw";

  constructor(private dialog: MatDialog, private imageService: ImageService) {
  }

  ngOnInit() {
  }

  openDialog() {
    console.log("opening");
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => this.imageService.setImage(result));
  }

}
