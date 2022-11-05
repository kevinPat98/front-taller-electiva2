import { Act } from '../act/act';
import { Room } from './../room/room';
export class Meet {
  id: number;
  dateMeet: Date;
  affair: string;
  room: Room;
  act: Act;
}
