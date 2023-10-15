import * as L from 'leaflet';

export enum MoveMapDirection{
    Down,
    Left,
    Right,
    Up,
}

const DEFAULT_OFFSET = 100;

export const MoveMapOffset: { [key in MoveMapDirection]: L.PointExpression } = {
    [MoveMapDirection.Down]: [0, DEFAULT_OFFSET],
    [MoveMapDirection.Left]: [-1 * DEFAULT_OFFSET, 0],
    [MoveMapDirection.Right]: [DEFAULT_OFFSET, 0],
    [MoveMapDirection.Up]: [0, -1 * DEFAULT_OFFSET],
};
