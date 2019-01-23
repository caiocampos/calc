import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  result: bigint = BigInt(1);

  constructor() { }

  ngOnInit() {
  }

  sum(val): void {
    this.result += BigInt(val);
  }

  mul(val): void {
    this.result *= BigInt(val);
  }

  div(val): void {
    this.result /= BigInt(val);
  }
}
