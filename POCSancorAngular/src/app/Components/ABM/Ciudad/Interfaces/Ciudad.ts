import { Provincia } from 'src/app/Components/ABM/Provincia/Interfaces/Provincia';

export interface Ciudad {
    Id: number;
    text: string;
    Provincia: Provincia;
}
