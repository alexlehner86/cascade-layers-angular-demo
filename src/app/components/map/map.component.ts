import { Component, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet';
import { FavPlacePopupComponent } from 'src/app/components/fav-place-popup/fav-place-popup.component';
import { MoveMapControlComponent } from 'src/app/components/move-map-control/move-map-control.component';
import { FavoritePlace } from 'src/app/models/fav-place.model';

import { FAV_PLACES, MAP_OPTIONS } from './map.config';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent {

    public mapOptions = MAP_OPTIONS;

    constructor(
        private _viewContainerRef: ViewContainerRef,
    ) { }

    public onMapReady(map: L.Map): void {
        this.addMoveMapControl(map);
        FAV_PLACES.forEach(favPlace => {
            const marker = L.marker(favPlace.coordinates, { icon: this.createIcon(favPlace.icon) });
            this.bindPopupToMarkerAndOpenOnClick(marker, favPlace);
            marker.addTo(map);
        });
    }

    private addMoveMapControl(map: L.Map): void {
        const componentRef = this._viewContainerRef.createComponent(MoveMapControlComponent);
        componentRef.instance.options.position = 'topright';
        componentRef.instance.nativeElement = componentRef.location.nativeElement;
        componentRef.changeDetectorRef.detectChanges();
        map.addControl(componentRef.instance);
    }

    private bindPopupToMarkerAndOpenOnClick(marker: L.Marker, data: FavoritePlace): void {
        marker.on('click', () => this.openPopup(marker, data));
        marker.on('keydown', event => {
            if (event.originalEvent.key === 'Enter') {
                event.originalEvent.preventDefault();
                this.openPopup(marker, data);
            } else if (event.originalEvent.key === 'Escape') {
                event.originalEvent.preventDefault();
                marker.closePopup();
                marker.unbindPopup();
            }
        });
        marker.on('popupclose', () => marker.unbindPopup());
    }

    private openPopup(marker: L.Marker, data: FavoritePlace): void {
        const componentRef = this._viewContainerRef.createComponent(FavPlacePopupComponent);
        componentRef.instance.data = data;
        componentRef.changeDetectorRef.detectChanges();
        marker.bindPopup(componentRef.location.nativeElement).openPopup();
    }

    private createIcon(iconUrl: string) {
        return L.icon({ iconUrl, iconSize: [35, 35] });
    }
}
