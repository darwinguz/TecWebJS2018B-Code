//import en JS
//const component = require('@angular/core').Component

//import en TS cuando la libreria esta en JS
import * as httpserver from 'http-server';

import {createServer} from 'http-server';

//import en TS
import { Component } from '@angular/core';

//decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  //@OtroDecorador()
  title = 'videos';

  //@DecoradorMetodo()
  //metodo(){}

}
