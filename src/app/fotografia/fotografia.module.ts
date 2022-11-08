import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared.module";

import { FotoComponent } from "./foto/foto.component";
import { FotoformComponent } from "./fotoform/fotoform.component";
import { FotolistComponent } from "./fotolist/fotolist.component";

@NgModule({
    declarations: [
        FotoComponent,
        FotoformComponent,
        FotolistComponent
    ],
    exports: [
        FotoComponent
    ],
    imports: [
        SharedModule
    ]
})
export class FotografiaModule {

}