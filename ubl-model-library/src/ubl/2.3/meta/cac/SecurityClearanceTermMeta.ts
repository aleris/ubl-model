import { FieldMeta } from '../FieldMeta'

export enum SecurityClearanceTermField {
  UBLExtensions = 'UBLExtensions',
  Code = 'Code',
  Description = 'Description'
}

export const SecurityClearanceTermFieldMetaUBLExtensions = new FieldMeta<SecurityClearanceTermField>(
  SecurityClearanceTermField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SecurityClearanceTermFieldMetaCode = new FieldMeta<SecurityClearanceTermField>(
  SecurityClearanceTermField.Code,
  'Code',
  'Code',
  'Code',
  'A code signifying the security clearance requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const SecurityClearanceTermFieldMetaDescription = new FieldMeta<SecurityClearanceTermField>(
  SecurityClearanceTermField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the security clearance requirement.',
  '0..n',
  'cbc',
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
