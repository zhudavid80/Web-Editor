import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { SettingObject } from 'src/app/editor/model/setting-object.module';
import { SettingStyle } from 'src/app/editor/model/setting-style.model';
import { SettingDate } from 'src/app/editor/model/setting-data.model';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();
  style: SettingStyle;
  data: SettingDate;
  chartOption: EChartOption;
  ngStyle: any = {};
  showMoreBool: boolean;
  iconUrl: string;
  constructor() {
  }

  ngOnInit() {
    this.initData()
  }

  initData() {
    this.style = this.settingObj['style']
    this.data =  this.settingObj['data']
  }
  
  // 拖拽辅助线边框位置 -1px，因为辅助线宽度1px
  expandUnit(param, other ?: string) {
    let paramVal = !other ? this.style[param] : (this.style[param] + this.style[other]);  //无边框计算方式
    paramVal = this.hasBorderWidth(paramVal, param, other);
    return paramVal + 'px'; 
  }

  //有边框辅助位置计算
  hasBorderWidth(paramVal, param, other ?: string) {
    let _other = 0;
    if(other === 'height' || other === 'width') {
      let _bordWidth = this.style['borderWidth'] * 2 -1|| 0;
      let _padd = this.style['padding'] * 2 || 0;
      _other = _bordWidth + _padd;
    }
    paramVal = paramVal +  _other;
    return paramVal;
  }
  
  compEvent(event) {
    event['dynamicData'] = this.settingObj;
    this.onChildComponentChange.emit(event);
    event.stopPropagation();
  }

  inputVal(event) {
    let text = event.target && event.target.innerHTML && event.target.innerHTML.trim();
    this.data['text_val'] = text;
  }

  inputState(event) {
    this.settingObj['editeabled'] = true;
  }
  
  getBorderRadius(val = 0) {
    return val + '%';
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
