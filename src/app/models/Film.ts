export class Film {
  constructor(Title: string, Year: number, Poster: string, Type: string) {
    this._Title  = Title;
    this._Year   = Year;
    this._Poster = Poster;
    this._Type   = Type;
  }

  private _Title: string;

  get Title(): string {
    return this._Title;
  }

  set Title(value: string) {
    this._Title = value;
  }

  private _Year: number;

  get Year(): number {
    return this._Year;
  }

  set Year(value: number) {
    this._Year = value;
  }

  private _Poster: string;

  get Poster(): string {
    return this._Poster;
  }

  set Poster(value: string) {
    this._Poster = value;
  }

  private _Type: string;

  get Type(): string {
    return this._Type;
  }

  set Type(value: string) {
    this._Type = value;
  }
}
