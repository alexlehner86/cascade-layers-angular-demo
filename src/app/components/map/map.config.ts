import * as L from 'leaflet';
import { FavoritePlace } from 'src/app/models/fav-place.model';

export const MAP_OPTIONS = {
    layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
    ],
    zoom: 12,
    center: L.latLng(48.242176, 16.373819)
};

export const FAV_PLACES: FavoritePlace[] = [
    {
        icon: 'assets/star1.svg',
        name: 'Neue Donau',
        coordinates: [48.247573, 16.391296],
        description: [
            'The New Danube (German: Neue Donau) is a side channel built in 1972 to 88 on the eastern side of the Danube in Vienna.',
            'You can enjoy the sun at the riverside, have a beer with some friends and take a swim.'
        ],
    },
    {
        icon: 'assets/star2.svg',
        name: 'Summer Station',
        coordinates: [48.239854, 16.395676],
        description: [
            'Great Indian restaurant on the Danube island.'
        ],
    },
    {
        icon: 'assets/star3.svg',
        name: 'Kahlenberg',
        coordinates: [48.274393, 16.336695],
        description: [
            'The Kahlenberg is a mountain (or rather hill with 484 meters) located in the 19th District of Vienna, Austria.',
            'I love the view from up there, with the whole of the city sprawled out in front of you.'
        ],
    },
    {
        icon: 'assets/star4.svg',
        name: 'Ottakringer Brewery',
        coordinates: [48.211841, 16.323959],
        description: [
            'Ottakringer is the last large brewery remaining in Vienna.',
            'Their beer is one of my favorites and the brewery is also a great event location.'
        ],
    },
    {
        icon: 'assets/star5.svg',
        name: 'Yppenplatz',
        coordinates: [48.213868, 16.336343],
        description: [
            'Area in the 16th District of Vienna with a lot of great bars and restaurants.'
        ],
    },
];
