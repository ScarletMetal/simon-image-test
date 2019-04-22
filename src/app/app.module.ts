import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SelectButtonComponent } from "./select-button/select-button.component";
import { DisplayImageComponent } from "./display-image/display-image.component";

import {MatButtonModule, MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    SelectButtonComponent,
    DisplayImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
