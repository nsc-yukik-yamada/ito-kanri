class ItoList {
  constructor() {
    this._list = [];
  }

get list(){
    return [].concat(this._list);
}

//   リストの最後にデータを追加
  addItem(ito) {
    this._list.push(ito);
  }

//   糸のリストをクリアする
clear(){
    this._list = []; //配列初期化
}


}
