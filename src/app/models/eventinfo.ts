export enum EventStatus
{
    OPEN=1,CLOSE=2,CANCELLED=3
}

export class Eventinfo {
    id:string;
    title:string;
    eventDate:Date;
    eventTime:string;
    location:string;
    speakers:string[];
    status:EventStatus;
    discountPercentage?:number;
    price?: number;
}
