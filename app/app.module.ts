import {NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

// import 'file-saver';

import {AppComponent} from './components/app.component';
import {Config} from './config/config';

function initConfig(config: Config) {
    return () => config.load();
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        Config,
        { provide: APP_INITIALIZER, useFactory: initConfig, deps: [Config], multi:true }
    ],
    bootstrap: [ AppComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }