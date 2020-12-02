import { FieldMeta } from '../FieldMeta'

export enum ProcurementAdditionalTypeField {
  UBLExtensions = 'UBLExtensions',
  ProcurementTypeCode = 'ProcurementTypeCode'
}

export const ProcurementAdditionalTypeFieldMetaUBLExtensions = new FieldMeta<ProcurementAdditionalTypeField>(
  ProcurementAdditionalTypeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProcurementAdditionalTypeFieldMetaProcurementTypeCode = new FieldMeta<ProcurementAdditionalTypeField>(
  ProcurementAdditionalTypeField.ProcurementTypeCode,
  'ProcurementTypeCode',
  'Procurement Type Code',
  'Code',
  'A code signifying the type of procurement project (e.g., goods, works, services).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export class ProcurementAdditionalTypeFieldMeta {
  public static readonly UBLExtensions = ProcurementAdditionalTypeFieldMetaUBLExtensions
  public static readonly ProcurementTypeCode = ProcurementAdditionalTypeFieldMetaProcurementTypeCode
}

export const ProcurementAdditionalTypeFieldMap = new Map([
  [ProcurementAdditionalTypeField.UBLExtensions, ProcurementAdditionalTypeFieldMetaUBLExtensions],
  [ProcurementAdditionalTypeField.ProcurementTypeCode, ProcurementAdditionalTypeFieldMetaProcurementTypeCode]
])
