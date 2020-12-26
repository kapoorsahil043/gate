import { TypeStatus } from '../enums/TypeStatus';
import { TypeUser } from '../enums/TypeUser';

export class User {
    public userName?:string;
    public password?:string;
    public userId?:number;
    public societyId?:number;
    public contact?:number;
    public type?:TypeUser;
    public status?:TypeStatus;
}


