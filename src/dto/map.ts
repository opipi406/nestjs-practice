export interface Point {
  /**
   * 緯度
   */
  lat?: number;
  /**
   * 経度
   */
  lng?: number;
}

export class MapDTO {
  constructor(
    id: number,
    title: string,
    type: string,
    points: Point[],
    lat: number,
    lng: number,
  ) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.points = points;
    this.lat = lat;
    this.lng = lng;
  }

  readonly id: number;
  readonly title: string;
  readonly type: string;
  readonly points: Point[];
  readonly lat: number;
  readonly lng: number;
}
