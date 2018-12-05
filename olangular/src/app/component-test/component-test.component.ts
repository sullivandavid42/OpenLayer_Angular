import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.scss']
})
export class ComponentTestComponent implements OnInit {

  @Input() test_interpolation: string;
  test_inutile: string = 'sustentation';
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.test_inutile;
  }
}
