import { FieldMeta } from '../../FieldMeta'

export enum CustomsDeclarationField {
  ID = 'ID',
  IssuerParty = 'IssuerParty'
}

export const CustomsDeclarationFieldMetaID = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier associated with customs related procedures.',
  '1',
  undefined,
  'CUST001 3333-44-123'
)

export const CustomsDeclarationFieldMetaIssuerParty = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.IssuerParty,
  'IssuerParty',
  'Party',
  'Party',
  'Describes the party issuing the customs declaration.',
  '0..1',
  undefined,
  undefined
)

export class CustomsDeclarationFieldMeta {
  public static readonly ID = CustomsDeclarationFieldMetaID
  public static readonly IssuerParty = CustomsDeclarationFieldMetaIssuerParty
}

export const CustomsDeclarationFieldMap = new Map([
  [CustomsDeclarationField.ID, CustomsDeclarationFieldMetaID],
  [CustomsDeclarationField.IssuerParty, CustomsDeclarationFieldMetaIssuerParty]
])
