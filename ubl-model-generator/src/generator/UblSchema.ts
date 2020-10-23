import fs from "fs"
import * as xml2js from 'xml2js'

export class UblSchema {
  constructor(public readonly version: string) { }

  private parser = new xml2js.Parser()

  async readAsJson(name: string) {
    const content = fs.readFileSync(`./ubl-schema/UBL-${this.version}/xsd/${name}-${this.version}.xsd`)
    return await this.parser.parseStringPromise(content)
  }

  listMainDocFileNames() {
    return fs.readdirSync(`./ubl-schema/UBL-${this.version}/xsd/maindoc`)
      .map(path => `maindoc/${path.replace(/-\d.+$/, '')}`)
  }
}
