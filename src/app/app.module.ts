import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { FavPlacePopupComponent } from './components/fav-place-popup/fav-place-popup.component';
import { MoveMapControlComponent } from './components/move-map-control/move-map-control.component';

@NgModule({
    declarations: [
        AppComponent,
        FavPlacePopupComponent,
        MapComponent,
        MoveMapControlComponent
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
