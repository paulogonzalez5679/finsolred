import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Formulario: FormGroup;
  private url = 'https://finsolred-server.herokuapp.com/api/sendmail';
  private body = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.Formulario = this.fb.group({
      name: new FormControl(''),

      email: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),

        phone: new FormControl(''),
      message: new FormControl('')
    });

  }
  /*METODO PARA EL ENVIO DEL CORREO ELECTRONICO*/
  doSomething() {

    const name = this.Formulario.get('name').value;
    const email = this.Formulario.get('email').value;
    const phone = this.Formulario.get('phone').value;
    const message = this.Formulario.get('message').value;

    console.log(name, email, phone, message);

    this.body = {
      name,
      email,
      phone,
      message
    };
    console.log('Submit', this.body);

    if ( this.Formulario.valid) {
      this.http.post('' + this.url, this.body, httpOptions)
      .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log('ERROR: ', err);
      });
    }

  }


}
