import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: `
    <p>
      dummy works!
    </p>
  `,
  styles: [
  ]
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
