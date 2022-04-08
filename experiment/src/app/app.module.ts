import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PropertybindingtestComponent } from './components/propertybindingtest/propertybindingtest.component';
import { StructuraldirectivesComponent } from './components/structuraldirectives/structuraldirectives.component';
import { ParentchilddataComponent } from './components/parentchilddata/parentchilddata.component';
import { ChildparentdataComponent } from './components/childparentdata/childparentdata.component';
import { ServicesComponent } from './components/services/services.component';
import { EmployeeService } from './services/employee.service';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingtestComponent,
    StructuraldirectivesComponent,
    ParentchilddataComponent,
    ChildparentdataComponent,
    ServicesComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
