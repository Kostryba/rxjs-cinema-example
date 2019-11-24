import {Component, forwardRef } from '@angular/core';
import {ISeatModel} from '../../models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const  SEAT_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SeatControlComponent),
  multi: true,
};

@Component({
  selector: 'app-seat-control',
  providers: [SEAT_CONTROL_ACCESSOR],
  templateUrl: './seat-control.component.html',
  styleUrls: ['./seat-control.component.scss']
})
export class SeatControlComponent implements ControlValueAccessor {
  public value: ISeatModel;
  private onTouch: Function;
  private onModelChange: Function;

  writeValue(value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public switchSelection() {
    this.value.selected = !this.value.selected;
    this.onModelChange(this.value);
    this.onTouch();
  }
}
