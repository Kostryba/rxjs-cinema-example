import {Component, OnInit} from '@angular/core';
import {ICinemaConfigModel} from '../../models';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable, of, Subscription} from 'rxjs';
import {map, shareReplay, startWith } from 'rxjs/operators';
import {getSeats, getUniqueId} from '../../utils/utils';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit{
  public cinemaConfig: ICinemaConfigModel = {
    id: getUniqueId(),
    name: 'Super cinema!!!',
    rows: [
      {
        id: getUniqueId(),
        seats: getSeats(14, 1),
      },
      {
        id: getUniqueId(),
        seats: getSeats(16, 2),
      },
      {
        id: getUniqueId(),
        seats: getSeats(18, 3),
      },
      {
        id: getUniqueId(),
        seats: getSeats(18, 4),
      },
      {
        id: getUniqueId(),
        seats: getSeats(18, 5),
      },
      {
        id: getUniqueId(),
        seats: getSeats(18, 6),
      }
    ],
  };

  public cinemaForm: FormGroup;
  public cinemaFormSubscription: Subscription;
  public seatsSelected$: Observable<any>;

  public ngOnInit(): void {
    this.cinemaFormSubscription = of(this.cinemaConfig).pipe(
      map( cinemaConfig => {
        return new FormGroup({
          rows: new FormArray(cinemaConfig.rows.map(row => {
            return new FormArray(row.seats.map(seat => new FormControl(seat)));
          }))
        });
      })
    ).subscribe(form => {
      this.cinemaForm = form;
    });

    this.seatsSelected$ = this.cinemaForm.valueChanges.pipe(
      map(value => {
        const seatsSelected = [];
        value.rows.forEach(row => {
          row.forEach(seat => {
            if (seat.selected) {
              seatsSelected.push(seat);
            }
          });
        });
       return seatsSelected;
      }),
      startWith([]),
      shareReplay(1),
    );
  }

  public buyTickets() {
    console.log('hello');
  }
}
