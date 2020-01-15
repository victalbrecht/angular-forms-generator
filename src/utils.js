export class Utils {
  normalizeString(string) { return string.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
}