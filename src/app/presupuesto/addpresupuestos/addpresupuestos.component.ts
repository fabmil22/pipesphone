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
      movil: ['' , [Validators.required , Validators.min(7)]],
      tipo: ['' , [Validators.required , Validators.min(7)]]
    });


   }

  ngOnInit() {
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
