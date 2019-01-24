import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  result;

  hasBigInt = true;

  constructor() { }

  ngOnInit() {
    try {
      this.result = BigInt(1);
    } catch {
      this.result = 1;
      this.hasBigInt = false;
    }
  }

  sum(val): void {
    this.result += this.hasBigInt ? BigInt(val) : val;
  }

  mul(val): void {
    this.result *= this.hasBigInt ? BigInt(val) : val;
  }

  div(val): void {
    this.result /= this.hasBigInt ? BigInt(val) : val;
  }
}
