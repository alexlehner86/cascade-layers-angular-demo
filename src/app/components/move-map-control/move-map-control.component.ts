import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-move-map-control',
    templateUrl: './move-map-control.component.html',
    styleUrls: ['./move-map-control.component.scss']
})
export class MoveMapControlComponent extends L.Control {
    /**
     * The native element that will be displayed as a leaflet map control.
     */
    public nativeElement!: HTMLElement;

    private _map!: L.Map;

    constructor() {
        super();
    }

    public override onAdd(map: L.Map): HTMLElement{
        this._map = map;
        // Stop unintended actions on the map (e.g., moving or zoom), when user interacts with this control.
        L.DomEvent.disableClickPropagation(this.nativeElement);
        return this.nativeElement;
    }
}
