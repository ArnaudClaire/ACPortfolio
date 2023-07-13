import { Component } from '@angular/core';

@Component({
  selector: 'app-gif-test',
  templateUrl: './gif-test.component.html',
  styleUrls: ['./gif-test.component.css']
})
export class GifTestComponent {
  //speed of gif by default
  gifSpeed = 1;

  //accelerate gif
  accelerateGif() {
    this.gifSpeed *= 2; 
  }
  
  //decelerate gif
  decelerateGif() {
    this.gifSpeed /= 2; 
  }
}
