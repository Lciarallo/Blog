
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidatar',
  templateUrl: './candidatar.component.html',
  styleUrl: './candidatar.component.scss',
  standalone: true,
  imports: [FormsModule]
    

})
export class CandidatarComponent {
[x: string]: any;
  nome = document.getElementById("inputnome")
  dataNascimento = document.getElementById("inputdata");
  experiencia = document.getElementById("inputdescription");
  
  


  handleSubmit() { 
    console.log('Nome:', this.nome);
    console.log('Data de Nascimento:', this.dataNascimento);
    console.log('Experiência:', this.experiencia);
  }
}
