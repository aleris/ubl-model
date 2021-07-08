import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContactType } from './ContactMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum SupplierPartyField {
  UBLExtensions = 'UBLExtensions',
  CustomerAssignedAccountID = 'CustomerAssignedAccountID',
  AdditionalAccountID = 'AdditionalAccountID',
  DataSendingCapability = 'DataSendingCapability',
  Party = 'Party',
  DespatchContact = 'DespatchContact',
  AccountingContact = 'AccountingContact',
  SellerContact = 'SellerContact'
}

export const SupplierPartyFieldMetaUBLExtensions = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SupplierPartyFieldMetaCustomerAssignedAccountID = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.CustomerAssignedAccountID,
  'CustomerAssignedAccountID',
  'Customer Assigned Account Identifier',
  IdentifierType.name,
  'An identifier for this supplier party, assigned by the customer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SupplierPartyFieldMetaAdditionalAccountID = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.AdditionalAccountID,
  'AdditionalAccountID',
  'Additional Account Identifier',
  IdentifierType.name,
  'An additional identifier for this supplier party.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SupplierPartyFieldMetaDataSendingCapability = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.DataSendingCapability,
  'DataSendingCapability',
  'Data Sending Capability',
  TextType.name,
  'Text describing the supplier\'s ability to send invoice data via a purchase card provider (e.g., VISA, MasterCard, American Express).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SupplierPartyFieldMetaParty = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The supplier party itself.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SupplierPartyFieldMetaDespatchContact = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.DespatchContact,
  'DespatchContact',
  'Despatch Contact',
  ContactType.name,
  'A contact at this supplier party for despatches (pickups).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SupplierPartyFieldMetaAccountingContact = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.AccountingContact,
  'AccountingContact',
  'Accounting Contact',
  ContactType.name,
  'A contact at this supplier party for accounting.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SupplierPartyFieldMetaSellerContact = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.SellerContact,
  'SellerContact',
  'Seller Contact',
  ContactType.name,
  'The primary contact for this supplier party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class SupplierPartyFieldMeta {
  public static readonly UBLExtensions = SupplierPartyFieldMetaUBLExtensions
  public static readonly CustomerAssignedAccountID = SupplierPartyFieldMetaCustomerAssignedAccountID
  public static readonly AdditionalAccountID = SupplierPartyFieldMetaAdditionalAccountID
  public static readonly DataSendingCapability = SupplierPartyFieldMetaDataSendingCapability
  public static readonly Party = SupplierPartyFieldMetaParty
  public static readonly DespatchContact = SupplierPartyFieldMetaDespatchContact
  public static readonly AccountingContact = SupplierPartyFieldMetaAccountingContact
  public static readonly SellerContact = SupplierPartyFieldMetaSellerContact
}

export const SupplierPartyFieldMap = new Map([
  [SupplierPartyField.UBLExtensions, SupplierPartyFieldMetaUBLExtensions],
  [SupplierPartyField.CustomerAssignedAccountID, SupplierPartyFieldMetaCustomerAssignedAccountID],
  [SupplierPartyField.AdditionalAccountID, SupplierPartyFieldMetaAdditionalAccountID],
  [SupplierPartyField.DataSendingCapability, SupplierPartyFieldMetaDataSendingCapability],
  [SupplierPartyField.Party, SupplierPartyFieldMetaParty],
  [SupplierPartyField.DespatchContact, SupplierPartyFieldMetaDespatchContact],
  [SupplierPartyField.AccountingContact, SupplierPartyFieldMetaAccountingContact],
  [SupplierPartyField.SellerContact, SupplierPartyFieldMetaSellerContact]
])

export const SupplierPartyType: Type<SupplierPartyField> = {
  name: 'SupplierParty',
  label: 'Supplier Party',
  module: TypeModule.cac,
  definition: 'A class to describe a supplier party.',
  fields: SupplierPartyFieldMap,
}
