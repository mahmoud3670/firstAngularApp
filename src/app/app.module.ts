import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { FormsModule } from '@angular/forms';
import { CoreComponent } from './core/core.component';
import { PrintingServerComponent } from './printing-server/printing-server.component';
import { ServerGeneratorComponent } from './server-generator/server-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent,
    FooterComponent,
    ServerStatusComponent,
    CoreComponent,
    PrintingServerComponent,
    ServerGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
