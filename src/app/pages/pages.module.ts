import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CodeModule } from "../core/code.module";
import { CompConfigService } from "../editor/provider/comp-config.service";
import { PageRoutingModule } from "./pages.routing.modules";
import { WorkspaceModule } from './workspace/workspace.module';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CodeModule,
    PageRoutingModule,
    WorkspaceModule
  ],
  providers: [
    CompConfigService,
  ],
  bootstrap: [],
  entryComponents:[

  ],
  exports: [
    PageRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
