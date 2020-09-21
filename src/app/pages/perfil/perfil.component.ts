import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TOKEN, URL_SERVICES, USER_ID } from 'src/app/config/config';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( private router: Router, private userService: UserService, private http:HttpClient) { }

  user = new UserModel();

  subirPdf = File;

  selectFile: File = null;
  habilitar = true;
  token = TOKEN
  url = URL_SERVICES
  user_id = USER_ID

  alert: boolean;


  ngOnInit(): void {

    this.userService.getUsers().subscribe( (resp:any)=>{
      
      this.user = resp.user

      console.log(this.user);
      
      
    })

  }


  onFileSelected(event){

    this.selectFile = <File>event.target.files[0];
  
    
  }
  
  
  upload(){
    const headers = new HttpHeaders({
      'token': this.token
    });
    
    const fd = new FormData();
  
    
    fd.append('img', this.selectFile, this.selectFile.name)
  
  
  
    this.http.put(`${this.url}/upload/users/` + this.user_id , fd, {
      headers
    })
    .subscribe(resp =>{
      console.log(resp);
     
  
      this.habilitar = false;
      
      this.alert = true

      location.reload()
    });
  
  }


  updatePerfil( f: NgForm){
    
    console.log(f.form.value.password);

    this.userService.updateUser(this.user).subscribe((resp:any) =>{
      console.log(resp);

      this.alert = true

      location.reload()
      
    
     
     /*if(resp){        

        localStorage.clear();
        this.router.navigate(['/login'])

      } */


      
    })

    
  }
}
