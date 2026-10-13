import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  @Input() title: string = 'Заголовок карточки';
  @Input() desc: string = 'Описание карточки'
  likesCount: number = 0;
  incrementLikes() {
    this.likesCount++;
  }

  @Output() cardDelete = new EventEmitter<void>();
  onDeleteClick() {
    this.cardDelete.emit()
  }

}
