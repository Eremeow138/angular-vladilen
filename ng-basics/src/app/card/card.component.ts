import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  card!: Card;

  @Input()
  index!: number;

  title = 'My Card Title';

  text = 'My card text';

  textColor = '';

  info = 'information';

  // eslint-disable-next-line max-len
  imageUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png`;

  disabled = false;

  getInfo() {
    return `This is my info ${this.info}`;
  }

  ngOnInit() {
    setTimeout(() => {
      this.imageUrl = 'https://vuejs.org/images/logo.png';
      this.disabled = true;
    }, 1500);
  }

  changeTitle() {
    this.card.title = 'Has been changed';
  }

  inputHandler(event: Event) {
    const currentTarget = event.currentTarget as HTMLInputElement;

    this.card.title = currentTarget.value;
  }

  inputHandlerTwo(value: string) {
    this.card.title = value;
  }

  changeHandler() {
    console.log(this.card.title);
  }
}
