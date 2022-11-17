import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

@NgModule({
    exports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule
    ]
})
export class SharedModule {

}
