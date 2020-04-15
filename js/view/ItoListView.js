class ItoListView {
  constructor(element) {
    this._element = element;
  }

  _template(ito) {
    return `<tr class="ito">
        <td>${ito.color}</td>
        <td>${ito.brand}</td>
        <td>${ito.hinban}</td>
        </tr>`;
  }

  // htmlを更新する
  update(ito) {

    this._element.innerHTML = this._template(ito);
  }

// テーブル追加
  _templateDocument(ito) {
    // trタグを作成
    let tr = document.createElement("tr");

    // tdタグに各要素を格納
    let tdColor = document.createElement("td");
    tdColor.textContent = ito.color;

    let tdBrand = document.createElement("td");
    tdBrand.textContent = ito.brand;

    let tdHinban = document.createElement("td");
    tdHinban.textContent = ito.hinban;

    // trタグの内部にtdタグを格納
    tr.appendChild(tdColor);
    tr.appendChild(tdBrand);
    tr.appendChild(tdHinban);
  
    // 今までのテーブルに新規登録分を追加
    this._element.appendChild(tr);
  }


  // 糸テーブルのクリア
  clear(){
    this._element.innerHTML = " ";

  }

  // 画面から選択したものを削除する
  deleteItem(){
    

  }
}
