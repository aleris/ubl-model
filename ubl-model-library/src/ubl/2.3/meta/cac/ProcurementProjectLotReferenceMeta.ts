import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ProcurementProjectLotReferenceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID'
}

export const ProcurementProjectLotReferenceFieldMetaUBLExtensions = new FieldMeta<ProcurementProjectLotReferenceField>(
  ProcurementProjectLotReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProcurementProjectLotReferenceFieldMetaID = new FieldMeta<ProcurementProjectLotReferenceField>(
  ProcurementProjectLotReferenceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this procurement project lot.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ProcurementProjectLotReferenceFieldMeta {
  public static readonly UBLExtensions = ProcurementProjectLotReferenceFieldMetaUBLExtensions
  public static readonly ID = ProcurementProjectLotReferenceFieldMetaID
}

export const ProcurementProjectLotReferenceFieldMap = new Map([
  [ProcurementProjectLotReferenceField.UBLExtensions, ProcurementProjectLotReferenceFieldMetaUBLExtensions],
  [ProcurementProjectLotReferenceField.ID, ProcurementProjectLotReferenceFieldMetaID]
])

export const ProcurementProjectLotReferenceType: Type<ProcurementProjectLotReferenceField> = {
  name: 'ProcurementProjectLotReference',
  label: 'Procurement Project Lot Reference',
  module: TypeModule.cac,
  definition: 'A class to reference to a lot identifier.',
  fields: ProcurementProjectLotReferenceFieldMap,
}
