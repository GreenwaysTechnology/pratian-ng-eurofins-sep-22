import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PageSharedModule } from "./shared/page.shared.module";
import { UserModule } from './user/user.module';
import { UserService } from "./user/user.service";
import { AttributebindingModule } from './attributebinding/attributebinding.module';
// import { HeaderModule } from "./header/header.module";
// import { FooterModule } from './footer/footer.module';
// import { MainModule } from './main/main.module';

/**
 * Decorator that marks a class as an NgModule and supplies configuration metadata.
 */
@NgModule({
  declarations: [AppComponent],
  //imports: [BrowserModule, HeaderModule, FooterModule, MainModule],
  imports: [BrowserModule, PageSharedModule, UserModule, AttributebindingModule],
 // providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

}