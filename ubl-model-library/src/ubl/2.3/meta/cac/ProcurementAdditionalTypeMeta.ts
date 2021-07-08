import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ProcurementAdditionalTypeField {
  UBLExtensions = 'UBLExtensions',
  ProcurementTypeCode = 'ProcurementTypeCode'
}

export const ProcurementAdditionalTypeFieldMetaUBLExtensions = new FieldMeta<ProcurementAdditionalTypeField>(
  ProcurementAdditionalTypeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProcurementAdditionalTypeFieldMetaProcurementTypeCode = new FieldMeta<ProcurementAdditionalTypeField>(
  ProcurementAdditionalTypeField.ProcurementTypeCode,
  'ProcurementTypeCode',
  'Procurement Type Code',
  CodeType.name,
  'A code signifying the type of procurement project (e.g., goods, works, services).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const ProcurementAdditionalTypeType: Type<ProcurementAdditionalTypeField> = {
  name: 'ProcurementAdditionalType',
  label: 'Procurement Additional Type',
  module: TypeModule.cac,
  definition: 'A class to describe additional types for a procurement project',
  fields: ProcurementAdditionalTypeFieldMap,
}
