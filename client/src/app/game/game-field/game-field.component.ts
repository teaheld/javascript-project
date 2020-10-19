import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {
  protected readonly logoUrl = '../assets/asset-images/logo.webp';
  // tslint:disable: variable-name
  @Input() _imagePath = this.logoUrl;

  public set imagePath(imagePath: string) {
    this._imagePath = imagePath;
  }

  public get imagePath() {
    return this._imagePath;
  }
  ngOnInit() {
    console.log(this._imagePath);
  }

  onClick() {

  }
}
