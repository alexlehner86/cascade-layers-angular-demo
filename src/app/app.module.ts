import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FavPlacePopupComponent } from './fav-place-popup/fav-place-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        FavPlacePopupComponent
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        LeafletModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
