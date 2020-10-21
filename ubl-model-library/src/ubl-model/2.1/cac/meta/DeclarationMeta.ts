import { FieldMeta } from '../../FieldMeta'

export enum DeclarationField {
  Name = 'Name',
  DeclarationTypeCode = 'DeclarationTypeCode',
  Description = 'Description',
  EvidenceSupplied = 'EvidenceSupplied'
}

export const DeclarationFieldMetaName = new FieldMeta<DeclarationField>(
  DeclarationField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this declaration.',
  '0..n',
  undefined,
  undefined
)

export const DeclarationFieldMetaDeclarationTypeCode = new FieldMeta<DeclarationField>(
  DeclarationField.DeclarationTypeCode,
  'DeclarationTypeCode',
  'Declaration Type Code',
  'Code',
  'A code signifying the type of this declaration.',
  '0..1',
  undefined,
  undefined
)

export const DeclarationFieldMetaDescription = new FieldMeta<DeclarationField>(
  DeclarationField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this declaration.',
  '0..n',
  undefined,
  undefined
)

export const DeclarationFieldMetaEvidenceSupplied = new FieldMeta<DeclarationField>(
  DeclarationField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  'EvidenceSupplied',
  'The evidence supporting this declaration.',
  '0..n',
  undefined,
  undefined
)

export class DeclarationFieldMeta {
  public static readonly Name = DeclarationFieldMetaName
  public static readonly DeclarationTypeCode = DeclarationFieldMetaDeclarationTypeCode
  public static readonly Description = DeclarationFieldMetaDescription
  public static readonly EvidenceSupplied = DeclarationFieldMetaEvidenceSupplied
}

export const DeclarationFieldMap = new Map([
  [DeclarationField.Name, DeclarationFieldMetaName],
  [DeclarationField.DeclarationTypeCode, DeclarationFieldMetaDeclarationTypeCode],
  [DeclarationField.Description, DeclarationFieldMetaDescription],
  [DeclarationField.EvidenceSupplied, DeclarationFieldMetaEvidenceSupplied]
])
