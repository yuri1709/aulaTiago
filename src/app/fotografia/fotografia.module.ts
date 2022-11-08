import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

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
        FotolistComponent,
        FotoComponent
    ],
    imports: [
        SharedModule
    ]
})
export class FotografiaModule {

}