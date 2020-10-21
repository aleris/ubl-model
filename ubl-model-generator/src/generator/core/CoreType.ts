import { extractTypeName, formatComment, mapPrimitiveType } from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { CoreTypeAttribute } from './CoreTypeAttribute'

export class CoreType {
  public readonly typeName: string
  public readonly resolvedType: string

  constructor(
    public name: string,
    public base: string,
    public documentation: Documentation,
    public attributes: Array<CoreTypeAttribute>
  ) {
    this.typeName = extractTypeName(this.name)
    this.resolvedType = mapPrimitiveType(this.documentation.primitiveType)
  }

  static fromJsonNode(jsonNode: any) {
    const attributes = jsonNode['xsd:simpleContent'][0]['xsd:extension'][0]['xsd:attribute']
      .map((attributeNode: any) => CoreTypeAttribute.fromJsonNode(attributeNode))
    return new CoreType(
      jsonNode.$['name'],
      jsonNode['xsd:simpleContent'][0]['xsd:extension'][0].$['base'],
      Documentation.fromTypeJsonNode(jsonNode),
      attributes
    )
  }

  asCodeString(version: string) {
    return CoreTypeFormatterFactory.create(version).asCodeString(version, this)
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
  ${name}Format: string | undefined
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
  format: string | undefined
}
`
  }
}
