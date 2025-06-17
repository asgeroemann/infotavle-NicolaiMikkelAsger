import { Injectable } from '@angular/core';
// import {Holidays } from '@salling-group/holidays';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  url = 'http://localhost:5115/api/events';

  events: object = {}; // Array<any> = [];

  maerkedage: object = {};

  test =[{"eventID":1,"theDate":"2025-06-04T00:00:00","theMessage":"Idræt","slideID":null},{"eventID":1,"theDate":"2025-06-11T00:00:00","theMessage":"Idræt","slideID":null},{"eventID":2,"theDate":"2025-06-05T00:00:00","theMessage":"Fri (Grundlovsdag)","slideID":null},{"eventID":6,"theDate":"2025-06-06T00:00:00","theMessage":"Fri","slideID":null},{"eventID":3,"theDate":"2025-05-27T00:00:00","theMessage":"På tur","slideID":4},{"eventID":4,"theDate":"2025-05-27T00:00:00","theMessage":"Facility info","slideID":2},{"eventID":4,"theDate":"2025-06-27T00:00:00","theMessage":"Facility info","slideID":2}];
  testMaerkedage = [{"date":"2025-06-23","name":"Sankt Hans aften","nationalHoliday":false},{"date":"2025-06-24","name":"Sankt Hans dag","nationalHoliday":false}];

  constructor() {
    //this.events=
    this.events=/*this.test; */this.fetchEvents();
    this.maerkedage = /*this.testMaerkedage//*/  this.fetchMaerkedage();
   }

   async fetchEvents() : Promise<object>{
    const data = await fetch(this.url);
    //console.log("test");
    //console.log(data.json());
    return await data.json() ?? {};
   }

   async fetchMaerkedage() : Promise<Array<any>>{
    //Fjern inden commit
    const token = "Bearer ce6d0fcf-9a9d-4124-8fc5-d6e9c8744b9b";
    var dato = new Date();
    dato.setDate(dato.getDate() + 14);
    const response = await fetch(
      "https://api.sallinggroup.com/v1/holidays?endDate="
      + dato.toISOString().slice(0, 10), {
        headers: {
        //credentials: "include" ,
          "Authorization": token,
        }
      });
      const data = await response.json();
      console.log("teststdrds");
      console.log(data); 
    return await data ?? [];
   }


  //  async fetchMaerkedage() : Promise<Array<any>>{ //Variant med Salling-SDK
  //   //Fjern inden commit

  //   var dato = new Date();
  //   dato.setDate(dato.getDate() + 14);

  //   const Holidays = require('@salling-group/holidays');
  //   const instance = new Holidays({
  //   'applicationName': 'My Application v1.0.0',
  //   'auth': {
  //   'type': 'bearer',
  //   'token': 'my_token',
  //   },
  //   });

  //   return instance.holidaysUntil(dato)

  //  }

   getEvents() : object {
    return this.events;
   }
   
   async getEventsByDate(date:Date) : Promise<Array<any>>  {
    console.log(this.events);
    var filter : Promise<Array<any>>;

    filter = (this.events as Promise<Array<any>>).then((events2) => {
      return events2.filter(e =>
      this.dateEqual(date, new Date(e.theDate)))
    })
    return filter;
   }

   //Checks whether two dates are equal ignoring hours, minutes etc. 
   dateEqual(a:Date, b:Date) : boolean {
    return (a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate());
   }

   async maerkeDag (date:Date) : Promise<string> {

    var filter = (this.maerkedage as Promise<Array<any>>).then((m) => {
      return m.filter(e =>
      this.dateEqual(date, new Date(e.date)))
    }
    )
    //console.log(filter);

    return filter.then((m) => {
      if (m.length > 0) return m[0].name;
      return "";
    })
   }

}
