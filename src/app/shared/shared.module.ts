import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    exports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {

}
