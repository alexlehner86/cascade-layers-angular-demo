import * as L from 'leaflet';

export interface FavoritePlace {
    name: string;
    coordinates: L.LatLngExpression;
    description: string[];
}
