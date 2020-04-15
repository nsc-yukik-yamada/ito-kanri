class ItoController {
  // 入力した値を受け取る
  constructor() {
    let selector = document.querySelector.bind(document);
    this._inputColor = selector("#color");
    this._inputBrand = selector("#brand");
    this._inputHinban = selector("#hinban");

    this._itoList = new ItoList();
    this._itoListView = new ItoListView(selector(".ito-table"));
  }

  // 糸を登録する。
  addIto(event) {
    event.preventDefault();

    // 入力チェック
    let valid = this._isValidInput();

    // チェック項目が真の場合更新
    if (valid == true) {
      let ito = new Ito(
        this._inputColor.value,
        this._inputBrand.value,
        this._inputHinban.value
      );

      this._itoList.addItem(ito);

      console.log(this._itoList);

      // 画面更新
      // this._itoListView.update(ito);
      this._itoListView._templateDocument(ito);
      this.clearForm(); //入力フォームのクリア
      
    } // エラーがある場合アラートでエラー内容を変換
    else {
      alert("メーカー名、品番は必須入力です。");
    }
  }

  // テーブルをクリアする
  clearIto() {
    // event.preventDefault();

    this._itoList.clear();
    this._itoListView.clear();
  }

  // 糸を一つ削除する
  deleteIto() {
    this.itoList.deleteItem();
    // 画面からデータを消す
    this._itoListView.delete();
  }

  // 入力値を初期値に戻す
  clearForm() {
    this._inputColor.value = "#000000";
    this._inputBrand.value = "";
    this._inputHinban.value = "";
  }

  //入力チェック
  _isValidInput() {
    let valid = false;
    let validBrand = false;
    let validHinban = false;

    //ブランドのブランクチェック
    if (this._inputBrand.value != "") {
      validBrand = true;
    }
    // 品番のブランクチェック
    if (this._inputHinban.value != "") {
      validHinban = true;
    }

    // 全てのチェックが真の場合に真を返す
    if (validBrand == true && validHinban == true) {
      valid = true;
    }
    return valid;
  }
}
