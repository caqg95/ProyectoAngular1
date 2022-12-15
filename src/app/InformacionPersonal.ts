export  default interface InformacionPersonal{

    Titulo?:string; 
    Nombre?:string; 
    Profesion?:string; 
    Direccion?:string; 
    Redes?:RedesSociales[];
    Apodo?:string;
    Proyectos?:Proyecto[]
    Acerca?:string;
}

export interface RedesSociales{
    Link?:string;
    Icono?:string;
}

export interface Proyecto{
    Nombre?:string;
    Descrpcion?:string;
    Url?:string;
    Imagen?:string;
}