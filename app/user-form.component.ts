import { Component } from '@angular/core';
import { User }    from './user';

@Component({  
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent {
    countries = ['United States', 'Singapore',
                'Hong Kong', 'Australia'];
    
    model = new User('','','');
    
    submitted = false;
    
    onSubmit() { 
        this.submitted = true;                 
    }
}