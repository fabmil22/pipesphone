import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpresupuestos',
  templateUrl: './addpresupuestos.component.html',
  styleUrls: ['./addpresupuestos.component.css']
})
export class AddpresupuestosComponent implements OnInit {

  phone: any = "+340000000";
  myForm: FormGroup;
  dataPerson=[];


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      dni: ['' , [Validators.required , Validators.min(7)]],
      nombre: ['' , [Validators.required , Validators.min(7)]],
      movil: this.phone,
      tipo: ['' , [Validators.required , Validators.min(7)]]
    });

    this.onchangePhone();
   }

  ngOnInit() {
  }


  onchangePhone(): void {
     this.myForm.valueChanges.subscribe(

      value => {
        const va2 = value.movil;
        //console.log(va2);

       const val = va2.toString().trim().replace(/^\+|-|\(|\)/g, '')
       console.log(val);
        if (val.match(/[0-9]/)) {

        }
        let country, city, number;

        switch (value.length) {
          case 10:
              country = 1;
              city = value.slice(0, 3);
              number = value.slice(3);
              break;

          case 11:
              country = value[0];
              city = value.slice(1, 4);
              number = value.slice(4);
              break;

          case 12:
              country = value.slice(0, 3);
              city = value.slice(3, 5);
              number = value.slice(5);
              break;

          default:
          this.myForm.value.movil = val;


      }
      if (country === 1) {
        country = "";
    }

    number = number.slice(0, 3) + '-' + number.slice(3);

    this.myForm.value.movil =  (country + " (" + city + ") " + number).trim();

      },
      error => console.log(error)
     );
  }
save(){
  this.dataPerson.push(this.saveall());
  console.log(this.dataPerson);
}

saveall() {
 const datos = {
   dni: this.myForm.get('dni').value,
   nombre: this.myForm.get('nombre').value,
   movil: this.myForm.get('movil').value,
   tipo: this.myForm.get('tipo').value
  };
  return datos;
}

}
