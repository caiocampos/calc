import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result;
  calcs = ['', '', '', '', '', '', '', '', '', ''];

  hasBigInt = true;
  isInvalid = false;

  constructor() { }

  ngOnInit() {
    try {
      this.result = BigInt(1);
    } catch {
      this.result = 1;
      this.hasBigInt = false;
    }
  }

  pushCalc(a, b, result, operator): void {
    this.calcs.shift();
    this.calcs.push(`${a} ${operator} ${b} = ${result}`);
  }

  sum(val): void {
    val = this.parse(val);
    if (this.isNaN(val)) {
      this.isInvalid = true;
      return;
    }
    this.isInvalid = false;
    const old = this.parse0(this.result);
    this.result = old + val;
    this.pushCalc(old, val, this.result, '+');
  }

  mul(val): void {
    val = this.parse(val);
    const old = this.parse0(this.result);
    if (this.isNaN(val) || (this.isInfinity(old) && this.equal(val, 0))) {
      this.isInvalid = true;
      return;
    }
    this.isInvalid = false;
    this.result = old * val;
    this.pushCalc(old, val, this.result, '*');
  }

  div(val): void {
    val = this.parse0(val);
    if (this.equal(val, 0)) {
      this.isInvalid = true;
    } else {
      this.isInvalid = false;
      const old = this.parse0(this.result);
      this.result = old / val;
      this.pushCalc(old, val, this.result, '/');
    }
  }

  private parse(val): any {
    try {
      return this.hasBigInt ? BigInt(val) : Number(val);
    } catch {
      return NaN;
    }
  }

  private parse2(a, b): any {
    return this.parse(a) || this.parse0(b);
  }

  private parse0(val): any {
    try {
      return this.hasBigInt ? (BigInt(val) || BigInt(0)) : (Number(val) || 0);
    } catch {
      return this.hasBigInt ? BigInt(0) : 0;
    }
  }

  private equal(a, b): boolean {
    try {
      return this.hasBigInt ? (BigInt(a) === BigInt(b)) : (Number(a) === Number(b));
    } catch {
      return false;
    }
  }

  private isInfinity(val): boolean {
    return this.is(val, Infinity);
  }

  private isNaN(val): boolean {
    return this.is(val, NaN);
  }

  private is(a, b): boolean {
    return Object.is(a, b);
  }
}
