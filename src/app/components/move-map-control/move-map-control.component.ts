import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MoveMapDirection, MoveMapOffset } from './move-map-control.interface';

@Component({
    selector: 'app-move-map-control',
    templateUrl: './move-map-control.component.html',
    styleUrls: ['./move-map-control.component.scss']
})
export class MoveMapControlComponent extends L.Control {

    public readonly moveMapDirection = MoveMapDirection;

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

    public moveMap(direction: MoveMapDirection): void {
        this._map.panBy(MoveMapOffset[direction]);
    }
}
