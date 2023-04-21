import {Component, OnInit} from '@angular/core';
import {CommonModule}      from '@angular/common';
import {FormsModule}       from '@angular/forms';
import {IonicModule}       from '@ionic/angular';
import {RouterLink}        from "@angular/router";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.page.html',
  styleUrls: ['./search-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SearchFormPage implements OnInit {
  public title                   = '';
  public year: number | undefined;
  public type                    = '';
  public errorMessages: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onClickSearchBtn() {
    this.errorMessages = [];

    // controles de surface
    if (!this.title || this.title.length < 3) {
      this.errorMessages.push('Veuillez saisir un titre de plus de 3 caractères');
    }
    if (this.year === undefined ||
        this.year < 1900 ||
        this.year > 2023
    ) {
      this.errorMessages.push('Veuillez choisir une année entre 1900 et 2023');
    }
    if (!this.type === undefined) {
      this.errorMessages.push('Veuillez saisir un media');
    }

    if (this.errorMessages)
      return;

    // tout baigne
  }
}
