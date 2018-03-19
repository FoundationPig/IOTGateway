import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { AppBodyContentComponent } from './appbodycontent/appbodycontent.component';
import { AppOutline } from './appoutline/appoutline.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartDemoComponent } from './linechart/linechart.component';
import { BarChartDemoComponent } from './barchart/barchart.component';
import { DoughnutChartDemoComponent } from './doughnutchart/doughnut.component';
import { BaseChartDemoComponent } from './dynamicchart/dynamicchart.component';
import { PieChartDemoComponent } from './piechart/piechart.component';
import { PolarAreaChartDemoComponent } from './polarchart/polar.component';
import { RadarChartDemoComponent } from './radarchart/radar.component';

@NgModule({
    declarations: [
        AppComponent,
        AppBodyContentComponent,
        AppOutline,
        LineChartDemoComponent,
        BarChartDemoComponent,
        DoughnutChartDemoComponent,
        BaseChartDemoComponent,
        PieChartDemoComponent,
        PolarAreaChartDemoComponent,
        RadarChartDemoComponent
    ],
    imports: [BrowserModule, ChartsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}