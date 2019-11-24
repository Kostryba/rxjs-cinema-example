import {ISeatModel} from '../models';

export const getSeats = (quantity: number, row: number): ISeatModel[] => {
  const seats = [];
  for (let i = 1; i <= quantity; i++) {
    seats.push({
      id: getUniqueId(),
      row,
      position: i,
      selected: false,
      occupied: Math.random() < 0.5,
    });
  }

  return seats;
};

export const getUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};
