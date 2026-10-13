import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Card } from './card/card';


@Component({
  imports: [RouterOutlet, Header, Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'test-app';
  cards = [
    { id: 1, title: "Александр", desc: "Эррекционер" },
    { id: 2, title: "Евгений", desc: "Расписатель" },
    { id: 3, title: "Матвей", desc: "Крафилов" }
  ]
  removeCard(id: number) {
    this.cards = this.cards.filter(card => card.id !== id);
  }
}
