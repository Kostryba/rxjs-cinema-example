import {Component, forwardRef, Input} from '@angular/core';
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
  @Input() public seat: ISeatModel;

  writeValue(value): void {
    console.log('writeValue value = ', value);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

}
