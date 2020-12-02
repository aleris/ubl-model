import { formatComment } from '../type-gen-utils'
import { CodeFile, TypeCodeGenerator } from '../CodeGenerator'
import { CoreType } from './CoreType'
import { UblModule } from '../UblModule'

export class CoreModelGenerator implements TypeCodeGenerator<CoreType> {
  constructor(public readonly version: string) {}

  globals(): CodeFile[] {
    // there are no Date and Time separate types defined in UBL, see note in UBL-UnqualifiedDataTypes-2.2.xsd
    // however for JSON representation it is expected to have separate types similar with DateTime one
    return [{
      dirPath: `model/${UblModule.cbc}`,
      fileName: 'Date.ts',
      content: new DateAndTimeType().asCodeString(this.version, 'Date')
    }, {
      dirPath: `model/${UblModule.cbc}`,
      fileName: 'Time.ts',
      content: new DateAndTimeType().asCodeString(this.version, 'Time')
    }]
  }

  asCodeString(coreType: CoreType) {
    const code = CoreTypeFormatterFactory.create(this.version).asCodeString(this.version, coreType)
    return {
      dirPath: `model/${UblModule.cbc}`,
      fileName: `${coreType.typeName}.ts`,
      content: code
    }
  }
}

interface CodeTypeFormatter {
  asCodeString(version: string, type: CoreType): string
}

class CoreTypeFormatterFactory {
  static create(version: string) {
    switch (version) {
      case '2.0':
      case '2.1':
        return new CoreTypeFormatterV20()
      case '2.2':
      case '2.3':
        return new CoreTypeFormatterV22()
      default:
        throw new Error(`version ${version} not supported`)
    }
  }
}

class CoreTypeFormatterV20 implements CodeTypeFormatter {
  constructor() { }

  asCodeString(version: string, coreType: CoreType) {
    return `/**${
      formatComment(' * ', coreType.documentation.definition)
    }
 */
export interface ${coreType.typeName} {
  /**
   * ${coreType.documentation.representationTermName}
   */
  ${coreType.typeName}Content: ${coreType.resolvedType}

${coreType.attributes.map(attribute => attribute.asCodeString(version, coreType)).join('\n\n')}
}
`
  }
}

class CoreTypeFormatterV22 implements CodeTypeFormatter {
  constructor() { }

  asCodeString(version: string, coreType: CoreType) {
    return `/**${
      formatComment(' * ', coreType.documentation.definition)
    }
 */
export interface ${coreType.typeName} {
  /**
   * ${coreType.documentation.representationTermName}
   */
  _: ${coreType.resolvedType}

${coreType.attributes.map(attribute => attribute.asCodeString(version, coreType)).join('\n\n')}
}
`
  }
}

export class DateAndTimeType {
  asCodeString(version: string, name: string) {
    return DateAndTimeTypeFormatterFactory.create(version).asCodeString(name)
  }
}

interface DateAndTimeTypeFormatter {
  asCodeString(name: string): string
}

class DateAndTimeTypeFormatterFactory {
  static create(version: string) {
    switch (version) {
      case '2.0':
      case '2.1':
        return new DateAndTimeTypeFormatterV20()
      case '2.2':
      case '2.3':
        return new DateAndTimeTypeFormatterV22()
      default:
        throw new Error(`version ${version} not supported`)
    }
  }
}

class DateAndTimeTypeFormatterV20 implements DateAndTimeTypeFormatter {
  asCodeString(name: string): string {
    return `/**
 * A particular ${
      name.toLowerCase()
    } point in the progression of time together with the relevant supplementary information.
 */
export interface ${name} {
  /**
   * ${name}
   */
  ${name}Content: string

  /**
   * The format of the ${name.toLowerCase()} content
   * Text
   */
  ${name}Format?: string | undefined
}
`
  }
}

class DateAndTimeTypeFormatterV22 implements DateAndTimeTypeFormatter {
  asCodeString(name: string): string {
    return `/**
 * A particular ${
      name.toLowerCase()
    } point in the progression of time together with the relevant supplementary information.
 */
export interface ${name} {
  /**
   * ${name}
   */
  _: string

  /**
   * The format of the ${name.toLowerCase()} content
   * Text
   */
  format?: string | undefined
}
`
  }
}
