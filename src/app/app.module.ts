import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SelectButtonComponent } from "./select-button/select-button.component";
import { DisplayImageComponent } from "./display-image/display-image.component";

import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import { DialogModalComponent } from "./modal/dialog-modal/dialog-modal.component";
import { UploadButtonComponent } from "./modal/upload-button/upload-button.component";

import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent,
    SelectButtonComponent,
    DisplayImageComponent,
    DialogModalComponent,
    UploadButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    DialogModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
