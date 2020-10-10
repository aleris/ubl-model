export class PrefixedName {
  public readonly prefix: string
  public readonly name: string

  constructor(public readonly prefixedName: string) {
    this.prefix = PrefixedName.extractPrefix(prefixedName)
    this.name = PrefixedName.extractNameWithoutPrefix(prefixedName)
  }

  static from(prefix: string, name: string) {
    return new PrefixedName(`${prefix}:${name}`)
  }

  hasPrefix(prefix: string) {
    return this.prefix === prefix
  }

  static extractNameWithoutPrefix(prefixedName: string) {
    const from = prefixedName.indexOf(":")
    if (from === -1) {
      return prefixedName
    }
    return prefixedName.substr(from + 1)
  }

  static  extractPrefix(prefixedName: string) {
    const to = prefixedName.indexOf(":")
    if (to === -1) {
      return ''
    }
    return prefixedName.substr(0, to)
  }

  asUnknownName() {
    return new PrefixedName(`unk:${this.prefixedName.replace(':', '_')}`)
  }
}
