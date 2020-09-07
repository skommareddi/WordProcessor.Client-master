import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordCountResult } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WordProcessor Client';
  text = "";
  result: WordCountResult = null;
  constructor(private http: HttpClient) { }

  submit() {
    if (!this.text)
      return;
    this.http.post<WordCountResult>("http://localhost:61772/word", { text: this.text }).subscribe(response => {
      this.result = response;
    })
  }

}
