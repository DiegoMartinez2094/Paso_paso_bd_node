import { Transform, Type, Expose } from "class-transformer";


export class user {
  @Expose ({name:"nombre"}) // tomar la variable
  @Transform(({value})=>{
    let data = /^[a-zA-Z]+$/.test(value);
    if(data && typeof value === "string"){
        return String (value);
    }else throw { status: 401, message: "el parametro user esta mal escrito"}

  }) 
  NOM: string

  @Expose({name:"email"})
  @Transform(({value})=>{
    let data = /^[\w-]+(.[\w-]+)@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)(.[a-zA-Z]{2,})$/.test(value);
    if(data && typeof value === "string"){
        return String (value);
    }else throw { status: 402, message: "el parametro email esta mal escrito"}
  })
  EMAIL: string

  @Expose({name:"estado"})
  @Transform(({value})=>{
    let data =  /^[0-9]+$/g.test(value)
    if(data && typeof value === "number"){
        return Number (value);
    }else throw { status: 403, message: "el parametro estado esta mal escrito"}
  })
  ESTADO: Number

  constructor(p1:string, p2:string, p3:Number){
    this.NOM = p1;
    this.EMAIL = p2;
    this.ESTADO = p3;
   }
}

// en otra terminal escribir el comando npm run tsc 
