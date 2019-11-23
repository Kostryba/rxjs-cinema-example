import {Component, OnInit} from '@angular/core';
import {ICinemaConfigModel, ISeatModel} from '../../models';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit{
  public cinemaConfig: ICinemaConfigModel = {
    id: this.getUniqueId(),
    name: 'Super cinema!!!',
    rows: [
      {
        id: this.getUniqueId(),
        seats: this.getSeats(14),
      },
      {
        id: this.getUniqueId(),
        seats: this.getSeats(16),
      },
      {
        id: this.getUniqueId(),
        seats: this.getSeats(18),
      },
      {
        id: this.getUniqueId(),
        seats: this.getSeats(18),
      },
      {
        id: this.getUniqueId(),
        seats: this.getSeats(18),
      },
      {
        id: this.getUniqueId(),
        seats: this.getSeats(18),
      }
    ],
  };

  public cinemaForm$: Observable<FormGroup>;

  public ngOnInit(): void {
    this.cinemaForm$ = of(this.cinemaConfig).pipe(
      map( cinemaConfig => {
        return new FormGroup({
          rows: new FormArray(cinemaConfig.rows.map(row => {
            return new FormArray(row.seats.map(seat => new FormControl(seat)));
          }))
        });
      })
    );
  }

  private getSeats(quantity: number): ISeatModel[] {
    const seats = [];
    for (let i = 1; i <= quantity; i++) {
      seats.push({
        id: this.getUniqueId(),
        position: i,
        selected: false,
        occupied: false,
      });
    }

    return seats;
  }

  private getUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
