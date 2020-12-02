import {
  capitalize,
  formatComment,
  getUseOptionalProps,
  uncapitalize
} from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { CoreType } from './CoreType'

export function mapPrimitiveType(type: CoreType, primitiveType?: string): string {
  // WORKAROUND: these types are mapped to string but in JSON representation have specialized primitive types
  if (type.typeName === 'Indicator') {
    return 'boolean'
  }
  if (type.typeName === 'Numeric') {
    return 'number'
  }
  switch(primitiveType) {
    case 'decimal': return 'number'
    case 'binary': return 'string'
    default: return primitiveType ?? 'unknown'
  }
}

export class CoreTypeAttribute {
  constructor(
    public name: string,
    public type: string,
    public use: string,
    public documentation: Documentation
  ) { }

  static fromJsonNode(jsonNode: any) {
    return new CoreTypeAttribute(
      jsonNode.$['name'],
      jsonNode.$['type'],
      jsonNode.$['use'],
      Documentation.fromTypeJsonNode(jsonNode)
    )
  }

  asCodeString(version: string, coreType: CoreType) {
    return CoreTypeAttributeFormatterFactory.create(version).asCodeString(coreType, this)
  }
}

interface CoreTypeAttributeCodeFormatter {
  asCodeString(coreType: CoreType, coreTypeAttribute: CoreTypeAttribute): string
}

class CoreTypeAttributeFormatterFactory {
  static create(version: string) {
    switch (version) {
      case '2.0':
      case '2.1':
        return new CoreTypeAttributeFormatterV20()
      case '2.2':
      case '2.3':
        return new CoreTypeAttributeFormatterV22()
      default:
        throw new Error(`version ${version} not supported`)
    }
  }
}

class CoreTypeAttributeFormatterV20 implements CoreTypeAttributeCodeFormatter {
  constructor() { }

  asCodeString(coreType: CoreType, coreTypeAttribute: CoreTypeAttribute) {
    const type = mapPrimitiveType(coreType, coreTypeAttribute.documentation.primitiveType)
    const fieldName = this.formatFieldName(coreTypeAttribute.name)
    const { optionalField, optionalUndefined } = getUseOptionalProps(coreTypeAttribute.use)
    return `  /**${
      formatComment('   * ', coreTypeAttribute.documentation.definition)
    }
   * ${
      coreTypeAttribute.documentation.representationTermName
    }${
      formatComment('   * ', coreTypeAttribute.documentation.usageRule)
    }
   */
  ${coreType.typeName}${fieldName}${optionalField}: ${type}${optionalUndefined}`
  }

  private formatFieldName(name: string) {
    return capitalize(name)
      .replace(/ID$/, 'Identifier')
  }
}

class CoreTypeAttributeFormatterV22 implements CoreTypeAttributeCodeFormatter {
  constructor() { }

  asCodeString(coreType: CoreType, coreTypeAttribute: CoreTypeAttribute) {
    const type = mapPrimitiveType(coreType, coreTypeAttribute.documentation.primitiveType)
    const fieldName = uncapitalize(coreTypeAttribute.name)
    const { optionalField, optionalUndefined } = getUseOptionalProps(coreTypeAttribute.use)
    return `  /**${
      formatComment('   * ', coreTypeAttribute.documentation.definition)
    }
   * ${
      coreTypeAttribute.documentation.representationTermName
    }${
      formatComment('   * ', coreTypeAttribute.documentation.usageRule)
    }
   */
  ${fieldName}${optionalField}: ${type}${optionalUndefined}`
  }
}
