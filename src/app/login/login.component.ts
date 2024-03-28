import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {
  login = document.getElementById('login')
  senha = document.getElementById('senha')

  handleSubmit(){
    console.log('Login: ', this.login)
    console.log('Senha: ', this.senha)
  }

}

