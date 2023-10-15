import * as L from 'leaflet';

export const MAP_OPTIONS = {
    layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
    ],
    zoom: 12,
    center: L.latLng(48.242176, 16.373819)
};
