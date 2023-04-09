import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() sendTheWord = new EventEmitter<string>();

  onButtonClick(input: HTMLInputElement) {
    let userInput = input.value.trim();

    if (!userInput) {
      input.value = ''; // Reset text field
      return;
    }
    
    let theWord = this.extractFirstWordFrom(userInput)
    this.sendTheWord.emit(theWord);
    input.value = ''; // Reset text field
  }

  // If user provided a sentence of words, returns the first word only
  extractFirstWordFrom(userInput: string): string {
    let userInputArr = userInput.split(' ');
    return userInputArr.at(0) as string;
  }
}
