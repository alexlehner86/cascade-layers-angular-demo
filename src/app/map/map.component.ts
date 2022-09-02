import { Component, OnInit } from '@angular/core';

import { MAP_OPTIONS } from './map.config';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    public mapOptions = MAP_OPTIONS;

    constructor() { }

    ngOnInit(): void {
    }

}
