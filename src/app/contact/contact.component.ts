import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: any;
  email: any;
  message: any;
  
  constructor(private contact: ContactService) { }

  ngOnInit(): void {
  }

  submitForm (){

    const message = "My name is " + this.name + ". My email is " + this.email + ". Message: " + this.message;

    this.contact.PostMesssage(this.message).subscribe(response => {
      location.href='https://mailthis.to/confirm'
      console.log(response)
    }, error => {
        console.warn(error.responseType)
        console.log (( error ))
        alert('Error with form please try again!')
    })
  }

}
