import {Name} from './name';
import {Address} from './address';

export class DacaUser {
    name: Name;
    requestType: string;
    mostRecentRenewal: string;
    address: Address;
    removalProceedings: boolean;
    status: string;
    dateOfProceedings: string;
    locationOfProceedings: string;
}