import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectUtilityService {

  constructor() { }
  getPathData(schema, path) {
    let pList = path.split('.');
    let len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      let elem = pList[i];
      if (!schema[elem]) schema[elem] = {}
      schema = schema[elem];
    }

    return schema[pList[len - 1]];
  }
}
