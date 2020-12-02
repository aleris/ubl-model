import fs from 'fs'
import { CodeFile } from './CodeGenerator'

export class CodeFileWriter {
  public readonly genDirPath: string
  public counter = 0

  constructor(public readonly rootDirPath: string, public readonly version: string) {
    this.genDirPath = `${this.rootDirPath}/${this.version}`
    fs.mkdirSync(this.genDirPath, { recursive: true })
  }

  write(codeFile: CodeFile) {
    const dir = `${this.genDirPath}/${codeFile.dirPath}`
    fs.mkdirSync(dir, { recursive: true })
    const path = `${dir}/${codeFile.fileName}`
    console.log(`Writing ${path}`)
    fs.writeFileSync(path, codeFile.content)
    this.counter++
  }
}
