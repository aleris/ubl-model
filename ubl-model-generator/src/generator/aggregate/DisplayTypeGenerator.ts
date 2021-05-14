import * as fs from 'fs'
import path from 'path'
import { AggregateType } from './AggregateType'
import { CodeFile, TypeCodeGenerator } from '../CodeGenerator'
import { DisplayFieldGenerator } from './DisplayFieldGenerator'

export class DisplayTypeGenerator implements TypeCodeGenerator<AggregateType> {

  private readonly aggregateFieldDisplayCodeGenerator = new DisplayFieldGenerator()

  globals(): CodeFile[] {
      return [
        ...fs.readdirSync(path.resolve('src/generator/globals/2.3/display/cbc'), { withFileTypes: true })
          .filter(file => file.isFile())
          .map(file => ({
            dirPath: `display/cbc`,
            fileName: `${file.name.replace(/\.tsxt$/, '.tsx')}`,
            content: fs.readFileSync(path.resolve(`src/generator/globals/2.3/display/cbc/${file.name}`)).toString()
          })),
        ...fs.readdirSync(path.resolve('src/generator/globals/2.3/display'), { withFileTypes: true })
          .filter(file => file.isFile())
          .map(file => ({
          dirPath: `display`,
          fileName: `${file.name.replace(/\.tsxt$/, '.tsx')}`,
          content: fs.readFileSync(path.resolve(`src/generator/globals/2.3/display/${file.name}`)).toString()
        }))
      ]
  }

  asCodeString(aggregateType: AggregateType) {
    const className = `ubl-${aggregateType.module} ubl-${aggregateType.typeName} ubl-${aggregateType.name}`
    const imports = this.getImports(aggregateType)
    const code = `import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ${aggregateType.typeName} } from  '../../model/${aggregateType.module}/${aggregateType.typeName}'
import { ${aggregateType.typeName}FieldMeta } from  '../../meta/${aggregateType.module}/${aggregateType.typeName}Meta'
${imports}

type Props<T> = {
  label: string
  value: ${aggregateType.typeName}
  meta: FieldMeta<T>
}

export default function ${aggregateType.typeName}Display<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="${className}">
        <div className="title">{label}</div>
        <div className="child-attributes">
${aggregateType
  .fields
  .map(field => this.aggregateFieldDisplayCodeGenerator.asCodeString(aggregateType, field))
  .join('\n\n')}
        </div>
    </div>
  )
}
`
    return {
      dirPath: `display/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}Display.tsx`,
      content: code
    }
  }

  private getImports(aggregateType: AggregateType) {
    const importFields = this.getImportFields(aggregateType)
    const imports = importFields.length == 0
      ? ''
      : `${
      importFields
        .map(field => this.aggregateFieldDisplayCodeGenerator.asImportString(aggregateType, field))
        .join('\n')}`
    return imports
  }

  private getImportFields(aggregateType: AggregateType) {
    const withoutSelf = aggregateType.fields.filter(field => field.resolvedType.name !== aggregateType.typeName)
    const withTypeKey = withoutSelf.map(field => ({ type: field.resolvedType.name, field }))
    const sorted = withTypeKey.sort(
      (a, b) => a.type.localeCompare(b.type)
    )
    const unique = new Map(sorted.map(fieldWithType => [fieldWithType.type, fieldWithType.field]))
    return Array.from(unique.values())
  }
}
