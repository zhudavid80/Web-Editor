import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "./node_modules/src/app/component/dev/basic/style-basic/style-basic.component";

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    
  }

}