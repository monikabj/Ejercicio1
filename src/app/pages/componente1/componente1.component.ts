import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  title = 'Componentes';
  //propiedades
  producto = {
   id:0,
   descripcion:'',
   precio:0
}
listaProductos =[
 {id:1,descripcion:'Wisky ',precio:50.0},
 {id:2,descripcion:'Margaritas',precio:1000.0},
 {id:3,descripcion:'Vodka',precio:198.00},
 {id:4,descripcion:'Ron',precio:200.0},
   ];
 
 
   //funcion para agregar un producto al arreglo
 agregarProducto(){
   if(this.producto.id ==0){
     alert('El ID del producto no puede ser cero');
     return;
   }
   //verificar que el id no exista
   for(let i=0; i < this.listaProductos.length; i++){
     if(this.producto.id == this.listaProductos[i].id){
       alert('Ya existe un producto con este ID');
       return;
     }
   }
 
   //damos de alta el producto
   this.listaProductos.push({
     id:this.producto.id,
     descripcion:this.producto.descripcion,
     precio:this.producto.precio
   });
 
   //resetar el producto
   this.producto.id=0;
   this.producto.descripcion='';
   this.producto.precio=0;
 }
 
 //funcio para selecionar un producto de la tabla;
 seleccionarProducto(
   productoSeleccionado:{id:number;descripcion:string;precio:number}){
     this.producto.id=productoSeleccionado.id;
     this.producto.descripcion=productoSeleccionado.descripcion;
     this.producto.precio=productoSeleccionado.precio;
   }
 
   //funcion para modificar un producto existente
   modificarProducto(){
     for(let i=0; i < this.listaProductos.length; i++){
       if(this.producto.id == this.listaProductos[i].id){
         this.listaProductos[i].descripcion=this.producto.descripcion;
         this.listaProductos[i].precio=this.producto.precio;
         
 
         this.producto.id=0;
         this.producto.descripcion='';
         this.producto.precio=0;
         return
       }
     }
     alert('No existe un producto con este ID');
   }
 
   //funcion para eliminar un producto de la tabla
   eliminarProducto(id:number){
     for(let i=0; i < this.listaProductos.length; i++){
       if(id == this.listaProductos[i].id){
         this.listaProductos.splice(i,1);
         return;
       }
     }
   }
 
 }

