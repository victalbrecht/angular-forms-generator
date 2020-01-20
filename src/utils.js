export class Utils {
  camelizeString(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  getInputCardsValues() {
    return [...document.getElementById('inputs').children].length ?
      [...document.getElementById('inputs').children].map(x => {
        return {
          name: this.camelizeString(x.children[0].children[0].children[0].value),
          rawName: x.children[0].children[0].children[0].value,
          type: this.camelizeString(x.children[0].children[1].children[0].children[0].value),
          required: x.children[0].children[2].children[0].children[0].children[0].checked
        }
      }) : [];
  }
}