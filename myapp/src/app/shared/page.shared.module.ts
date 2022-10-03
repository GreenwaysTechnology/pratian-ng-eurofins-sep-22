import { NgModule } from "@angular/core";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { MainModule } from "../main/main.module";



@NgModule({
    imports: [HeaderModule, FooterModule, MainModule],
    // here we make submodules public so that other module's compoents can see these module compoents.
    exports: [HeaderModule, FooterModule, MainModule]
})
export class PageSharedModule { }