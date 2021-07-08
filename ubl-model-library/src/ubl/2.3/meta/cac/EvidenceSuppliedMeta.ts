import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EvidenceSuppliedField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID'
}

export const EvidenceSuppliedFieldMetaUBLExtensions = new FieldMeta<EvidenceSuppliedField>(
  EvidenceSuppliedField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EvidenceSuppliedFieldMetaID = new FieldMeta<EvidenceSuppliedField>(
  EvidenceSuppliedField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'The identifier of the referenced evidence.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export class EvidenceSuppliedFieldMeta {
  public static readonly UBLExtensions = EvidenceSuppliedFieldMetaUBLExtensions
  public static readonly ID = EvidenceSuppliedFieldMetaID
}

export const EvidenceSuppliedFieldMap = new Map([
  [EvidenceSuppliedField.UBLExtensions, EvidenceSuppliedFieldMetaUBLExtensions],
  [EvidenceSuppliedField.ID, EvidenceSuppliedFieldMetaID]
])

export const EvidenceSuppliedType: Type<EvidenceSuppliedField> = {
  name: 'EvidenceSupplied',
  label: 'Evidence Supplied',
  module: TypeModule.cac,
  definition: 'A reference to evidence.',
  fields: EvidenceSuppliedFieldMap,
}
