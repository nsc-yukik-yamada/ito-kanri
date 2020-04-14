class ItoController {
  // 入力した値を受け取る
  constructor() {
    let selector = document.querySelector.bind(document);
    this._inputColor = selector("#color");
    this._inputBrand = selector("#brand");
    this._inputHinban = selector("#hinban");

    this._itoList = new ItoList();
    this._itoListView = new ItoListView(selector('.ito-table'));
  }

  // 糸を登録する。
  addIto(event) {
    event.preventDefault();

    let ito = new Ito(
      this._inputColor.value,
      this._inputBrand.value,
      this._inputHinban.value
    );

    this._itoList.addItem(ito);

    //   値を保存する

    // console.log(ito);
    console.log(this._itoList);

    // this._itoListView.update(ito);
    this._itoListView._templateDocument(ito);
  }
}
