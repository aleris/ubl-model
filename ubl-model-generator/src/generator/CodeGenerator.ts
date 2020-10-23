export interface CodeFile {
  dirPath: string
  fileName: string
  content: string
}

export interface TypeCodeGenerator<T> {
  globals(): CodeFile[]
  asCodeString(type: T): CodeFile
}

export interface FieldCodeGenerator<T, F> {
  asCodeString(type: T, fieldType: F): string
  asImportString(type: T, fieldType: F): string
}
