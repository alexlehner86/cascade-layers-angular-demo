import { Component, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet';
import { FavPlacePopupComponent } from 'src/app/components/fav-place-popup/fav-place-popup.component';
import { MoveMapControlComponent } from 'src/app/components/move-map-control/move-map-control.component';
import { FavoritePlace } from 'src/app/models/fav-place.model';

import { MAP_OPTIONS } from './map.config';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent {

    public mapOptions = MAP_OPTIONS;

    private _favPlaces: FavoritePlace[] = [
        {
            name: 'Neue Donau',
            coordinates: [48.247573, 16.391296],
            description: [
                'The New Danube (German: Neue Donau) is a side channel built in 1972 to 88 on the eastern side of the Danube in Vienna.',
                'You can enjoy the sun at the riverside, have a beer with some friends and take a swim.'
            ],
        },
        {
            name: 'Summer Station',
            coordinates: [48.239854, 16.395676],
            description: [
                'Great Indian restaurant on the Danube island.'
            ],
        },
        {
            name: 'Kahlenberg',
            coordinates: [48.274393, 16.336695],
            description: [
                'The Kahlenberg is a mountain (or rather hill with 484 meters) located in the 19th District of Vienna, Austria.',
                'I love the view from up there, with the whole of the city sprawled out in front of you.'
            ],
        },
        {
            name: 'Ottakringer Brewery',
            coordinates: [48.211841, 16.323959],
            description: [
                'Ottakringer is the last large brewery remaining in Vienna.',
                'Their beer is one of my favorites and the brewery is also a great event location.'
            ],
        },
        {
            name: 'Yppenplatz',
            coordinates: [48.213868, 16.336343],
            description: [
                'Area in the 16th District of Vienna with a lot of great bars and restaurants.'
            ],
        },
    ];
    private _markerIcon = L.icon({ iconUrl: 'assets/star.svg', iconSize: [30, 30] });

    constructor(private _viewContainerRef: ViewContainerRef) { }

    public onMapReady(map: L.Map): void {
        this.addMoveMapControl(map);
        this._favPlaces.forEach(favPlace => {
            const marker = L.marker(favPlace.coordinates, { icon: this._markerIcon });
            this.bindPopupToMarkerAndOpenOnClick(marker, favPlace);
            marker.addTo(map);
        })
    }

    private addMoveMapControl(map: L.Map): void {
        const componentRef = this._viewContainerRef.createComponent(MoveMapControlComponent);
        componentRef.instance.options.position = 'topright';
        componentRef.instance.nativeElement = componentRef.location.nativeElement;
        map.addControl(componentRef.instance);
    }

    private bindPopupToMarkerAndOpenOnClick(marker: L.Marker, data: FavoritePlace): void {
        marker.on('click', () => {
            const componentRef = this._viewContainerRef.createComponent(FavPlacePopupComponent);
            componentRef.instance.data = data;
            componentRef.changeDetectorRef.detectChanges();
            marker.bindPopup(componentRef.location.nativeElement).openPopup();
        });
        marker.on('popupclose', () => {
            marker.unbindPopup();
            this._viewContainerRef.clear();
        });
    }
}
