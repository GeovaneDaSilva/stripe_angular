export class UserModel {

    _id:string;
    id:string;
    nombre:string;
    email:string;
    password:string;
    confirmPassrowd:string;
    img:string;
    role:string;
    phone:string;
    n_buzon:string;
    message:string;
    address:string;

    termino:boolean;


constructor(){

        this.termino = false;
    }


}