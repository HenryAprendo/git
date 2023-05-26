import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-proxy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent {


}

interface Message {
  message1: string;
  message2: string;
}

const target:Message = {
  message1: 'Hello',
  message2: 'everyone',
};

const handler = {
  get: (target:Message, prop:string, receiver:string ) => {
    if(prop === 'message2'){
      return 'World'
    }

    return Reflect.get(target,prop);
  },
};

const proxy1 = new Proxy(target,handler);

console.log(proxy1.message1)
console.log(proxy1.message2)

const array = [1,2,3];
console.log(array);



// Validador

interface Age {
  age: number;
}

const obj:Age = {
  age: 40
}

const validator = {
  set: (obj:Age, prop:string, value:number) => {
    console.log('Value ' + value);
    if(prop === 'age'){
      if(!Number.isInteger(value)){
        throw new TypeError('La edad no es un entero');
      }
      if(value > 200){
        throw new RangeError('La edad parece invalida');
      }
    }

    obj.age = value;

    return true;
  }
}

const person = new Proxy(obj, validator);
console.log(person.age)

person.age = 100;

console.log(person.age);



















