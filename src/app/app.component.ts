import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise-0';

  oddWords: string[] = [];
  evenWords: string[] = [];

  onWordReceived(theWord: string) {
    console.log(`THIS WORD WAS PASSED: ${theWord}`)
    theWord.length % 2 === 0 ? this.addToEvens(theWord) : this.addToOdds(theWord);
  }


  addToOdds(theWord: string) {
    this.oddWords.push(theWord);
  }

  addToEvens(theWord: string) {
    this.evenWords.push(theWord)
  }
}
