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

  _templateDocument(ito) {
    let tr = document.createElement("tr");
    let tdColor = document.createElement("td");
    tdColor.textContent = ito.color;

    let tdBrand = document.createElement("td");
    tdBrand.textContent = ito.brand;

    let tdHinban = document.createElement("td");
    tdHinban.textContent = ito.hinban;

    tr.appendChild(tdColor);
    tr.appendChild(tdBrand);
    tr.appendChild(tdHinban);
  
    this._element.appendChild(tr);
  }

  update(ito) {

    this._element.innerHTML = this._template(ito);
  }
}
