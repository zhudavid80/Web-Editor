import { Component, OnInit, Input } from "@angular/core";
import { SettingStyle } from "src/app/editor/model/setting-style.model";
import { BasicComponent } from "../basic/basic.component";
import { EmitSubService } from "src/app/providers/emit-sub.service";

@Component({
  selector: 'app-style-basic',
  templateUrl: './style-basic.component.html',
  styleUrls: ['./style-basic.component.scss']
})
export class StyleBasicComponent implements OnInit {
  @Input() style: SettingStyle;
  showMoreBool:boolean;
  iconUrl:string;

  constructor() {}

  ngOnInit() {

  }

  initParentData() {
    this.showMoreBool = true; 
    this.initIcon();
  }

  showMoreFun() {
    this.showMoreBool = !this.showMoreBool;
    this.initIcon();
  }

  initIcon() {
    this.iconUrl = this.showMoreBool ? './../../../../../../assets/icons/up.svg' :  './../../../../../../assets/icons/down.svg' ;
  }
}