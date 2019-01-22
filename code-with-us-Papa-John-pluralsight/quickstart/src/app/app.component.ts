import { Component } from '@angular/core';

import { Customer } from './module'

@Component({
  selector: 'my-app',
  template: `
      <h1>{{customer.name}}</h1>
      <p><i> {{customer.name}} is on the {{customer.address.street}} street in {{customer.address.city}} city 
      in region {{customer.address.region}} in state {{customer.address.state}}</i></p>
      <br/>

      <fieldset>
      <label>Name: </label> <input [(ngModel)]="customer.name"/>
      </fieldset>
    
      <label><input type="checkbox" [(ngModel)]="hideAddress" />Show/Hide Address</label> 
      <div [hidden]="hideAddress">
        <fieldset>
        <label>Street: </label> <input [(ngModel)]="customer.address.street"/>
        </fieldset>
        <fieldset>
        <label>City: </label> <input [(ngModel)]="customer.address.city"/>
        </fieldset>
        <fieldset>
        <label>State: </label>
        <select [(ngModel)]="customer.address.state">
        <option>California</option>
        <option>Kolorado</option>
        <option>Quebek</option>
      </select> 
      </fieldset>
        <fieldset>
          <label>Region: </label>
          <select [(ngModel)]="customer.address.region">
          <option>East</option>
          <option>North</option>
          <option>West</option>
          <option>South</option>
        </select> 
        </fieldset>
      </div>
    `,
})
export class AppComponent  { 
  
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      city: 'Anytown',
      region: 'East',
      state: 'California',
      street: 'Any street'
    }
  }

  hideAddress = false;
}
