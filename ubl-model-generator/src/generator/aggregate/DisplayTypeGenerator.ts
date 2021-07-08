import * as fs from 'fs'
import path from 'path'
import { indent } from '../type-gen-utils'
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
            fileName: `${file.name.replace(/\.tsxt$/, '.tsx').replace(/\.tst$/, '.ts')}`,
            content: fs.readFileSync(path.resolve(`src/generator/globals/2.3/display/cbc/${file.name}`)).toString()
          })),
        ...fs.readdirSync(path.resolve('src/generator/globals/2.3/display'), { withFileTypes: true })
          .filter(file => file.isFile())
          .map(file => ({
          dirPath: `display`,
          fileName: `${file.name.replace(/\.tsxt$/, '.tsx').replace(/\.tst$/, '.ts')}`,
          content: fs.readFileSync(path.resolve(`src/generator/globals/2.3/display/${file.name}`)).toString()
        })),
        ...fs.readdirSync(path.resolve('src/generator/globals/2.3/display/templates'), { withFileTypes: true })
          .filter(file => file.isFile())
          .map(file => ({
            dirPath: `display/templates`,
            fileName: `${file.name.replace(/\.tsxt$/, '.tsx').replace(/\.tst$/, '.ts')}`,
            content: fs.readFileSync(path.resolve(`src/generator/globals/2.3/display/templates/${file.name}`)).toString()
          })),
      ]
  }

  asCodeFiles(aggregateType: AggregateType) {
    return [this.asCodeStyle(aggregateType), this.asCodeScript(aggregateType)]
  }

  asCodeStyle(aggregateType: AggregateType) {
    return {
      dirPath: `display/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}Display.scss`,
      content: `.${aggregateType.typeName} {
}
`
    }
  }

  asCodeScript(aggregateType: AggregateType) {
    const imports = this.aggregateFieldDisplayCodeGenerator.getImports(aggregateType, 'Display', 'Display')
    const code = `import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ${aggregateType.typeName} } from  '../../model/${aggregateType.module}/${aggregateType.typeName}'
import { ${aggregateType.typeName}Field, ${aggregateType.typeName}FieldMeta, ${aggregateType.typeName}TypeName } from  '../../meta/${aggregateType.module}/${aggregateType.typeName}Meta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
${imports}
type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<${aggregateType.typeName}, void>
  ${aggregateType.propertyName}: ${aggregateType.typeName}[] | undefined
  renderContext: RenderContext
}

export const ${aggregateType.typeName}SubElementsMap: SubElementsTemplatesMap<${aggregateType.typeName}Field, ${aggregateType.typeName}, void> = new Map([
${aggregateType
    .fields
    .map(field => indent(`[\n  ${aggregateType.typeName}Field.${field.fieldName},\n${indent(this.aggregateFieldDisplayCodeGenerator.asCodeString(aggregateType, field), 1)}\n]`, 2))
    .join(',\n\n')}
]) 

export function ${aggregateType.typeName}Display<TFieldMeta>({ meta, fieldConfig, ${aggregateType.propertyName}, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ${aggregateType.typeName}TypeName,
    meta,
    fieldConfig,
    ${aggregateType.propertyName},
    renderContext,
    ${aggregateType.typeName}SubElementsMap,
  )
}
`
    return {
      dirPath: `display/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}Display.tsx`,
      content: code
    }
  }
}
