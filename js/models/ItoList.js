class ItoList {
  constructor() {
    this._list = [];
  }

  get list() {
    return [].concat(this._list);
  }

  //   リストの最後にデータを追加
  addItem(ito) {
    this._list.push(ito);
  }

  //糸リストからデータを削除
  deleteItem(ito) {
    let itemIndex = -1;
    for (let i = 0; (i = this._list.length); i++) {
      if (JSON.stringify(ito) == JSON.stringify(this._list[i])) {
        itemIndex = i;
        break;
      }
    }

    if (itemIndex >= 0) {
      this._list.splice(itemIndex, 1);
    }
  }

  //   糸のリストをクリアする
  clear() {
    this._list = []; //配列初期化
  }
}
