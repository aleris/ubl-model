import fs from 'fs'

export class GeneratedWriter {
  public readonly genDirPath: string

  constructor(public readonly rootDirPath: string, public readonly version: string) {
    this.genDirPath = `${this.rootDirPath}/${this.version}`
    fs.mkdirSync(this.genDirPath, { recursive: true })
  }

  write(module: string, name: string, content: string) {
    const dir = `${this.genDirPath}/${module}`
    fs.mkdirSync(dir, { recursive: true })
    const path = `${dir}/${name}.ts`
    console.log(`Writing ${path}`)
    fs.writeFileSync(path, content)
  }
}
