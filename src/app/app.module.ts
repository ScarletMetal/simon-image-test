import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UploadButtonComponent } from "./upload-button/upload-button.component";
import { DisplayImageComponent } from "./display-image/display-image.component";

import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    UploadButtonComponent,
    DisplayImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
