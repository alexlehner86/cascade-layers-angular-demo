import * as L from 'leaflet';

export interface FavoritePlace {
    icon: string;
    name: string;
    coordinates: L.LatLngExpression;
    description: string[];
}
