import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";



//header sub module
@NgModule({
    declarations: [HeaderComponent],
    imports: [],
    providers: [],
    exports: [HeaderComponent] //make it public , we can access outside the current module
})
export class HeaderModule {

}