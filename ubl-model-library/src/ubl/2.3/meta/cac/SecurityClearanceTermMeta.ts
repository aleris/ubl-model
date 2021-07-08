import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum SecurityClearanceTermField {
  UBLExtensions = 'UBLExtensions',
  Code = 'Code',
  Description = 'Description'
}

export const SecurityClearanceTermFieldMetaUBLExtensions = new FieldMeta<SecurityClearanceTermField>(
  SecurityClearanceTermField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SecurityClearanceTermFieldMetaCode = new FieldMeta<SecurityClearanceTermField>(
  SecurityClearanceTermField.Code,
  'Code',
  'Code',
  CodeType.name,
  'A code signifying the security clearance requirement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SecurityClearanceTermFieldMetaDescription = new FieldMeta<SecurityClearanceTermField>(
  SecurityClearanceTermField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of the security clearance requirement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class SecurityClearanceTermFieldMeta {
  public static readonly UBLExtensions = SecurityClearanceTermFieldMetaUBLExtensions
  public static readonly Code = SecurityClearanceTermFieldMetaCode
  public static readonly Description = SecurityClearanceTermFieldMetaDescription
}

export const SecurityClearanceTermFieldMap = new Map([
  [SecurityClearanceTermField.UBLExtensions, SecurityClearanceTermFieldMetaUBLExtensions],
  [SecurityClearanceTermField.Code, SecurityClearanceTermFieldMetaCode],
  [SecurityClearanceTermField.Description, SecurityClearanceTermFieldMetaDescription]
])

export const SecurityClearanceTermType: Type<SecurityClearanceTermField> = {
  name: 'SecurityClearanceTerm',
  label: 'Security Clearance Term',
  module: TypeModule.cac,
  definition: 'A class to specify security clearance terms.',
  fields: SecurityClearanceTermFieldMap,
}
