import { Component, OnInit } from '@angular/core';
import { FavoritePlace } from 'src/app/models/fav-place.model';

@Component({
    selector: 'app-fav-place-popup',
    templateUrl: './fav-place-popup.component.html',
    styleUrls: ['./fav-place-popup.component.scss']
})
export class FavPlacePopupComponent implements OnInit {

    public data!: FavoritePlace;

    ngOnInit(): void {
    }
}
