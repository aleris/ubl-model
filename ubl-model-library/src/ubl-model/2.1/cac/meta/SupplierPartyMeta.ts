import { FieldMeta } from '../../FieldMeta'

export enum SupplierPartyField {
  CustomerAssignedAccountID = 'CustomerAssignedAccountID',
  AdditionalAccountID = 'AdditionalAccountID',
  DataSendingCapability = 'DataSendingCapability',
  Party = 'Party',
  DespatchContact = 'DespatchContact',
  AccountingContact = 'AccountingContact',
  SellerContact = 'SellerContact'
}

export const SupplierPartyFieldMetaCustomerAssignedAccountID = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.CustomerAssignedAccountID,
  'CustomerAssignedAccountID',
  'Account Identifier',
  'Identifier',
  'An identifier for this supplier party, assigned by the customer.',
  '0..1',
  undefined,
  undefined
)

export const SupplierPartyFieldMetaAdditionalAccountID = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.AdditionalAccountID,
  'AdditionalAccountID',
  'Account Identifier',
  'Identifier',
  'An additional identifier for this supplier party.',
  '0..n',
  undefined,
  undefined
)

export const SupplierPartyFieldMetaDataSendingCapability = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.DataSendingCapability,
  'DataSendingCapability',
  'Data Sending Capability',
  'Text',
  'Text describing the supplier\'s ability to send invoice data via a purchase card provider (e.g., VISA, MasterCard, American Express).',
  '0..1',
  undefined,
  undefined
)

export const SupplierPartyFieldMetaParty = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The supplier party itself.',
  '0..1',
  undefined,
  undefined
)

export const SupplierPartyFieldMetaDespatchContact = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.DespatchContact,
  'DespatchContact',
  'Contact',
  'Contact',
  'A contact at this supplier party for despatches (pickups).',
  '0..1',
  undefined,
  undefined
)

export const SupplierPartyFieldMetaAccountingContact = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.AccountingContact,
  'AccountingContact',
  'Contact',
  'Contact',
  'A contact at this supplier party for accounting.',
  '0..1',
  undefined,
  undefined
)

export const SupplierPartyFieldMetaSellerContact = new FieldMeta<SupplierPartyField>(
  SupplierPartyField.SellerContact,
  'SellerContact',
  'Contact',
  'Contact',
  'The primary contact for this supplier party.',
  '0..1',
  undefined,
  undefined
)

export class SupplierPartyFieldMeta {
  public static readonly CustomerAssignedAccountID = SupplierPartyFieldMetaCustomerAssignedAccountID
  public static readonly AdditionalAccountID = SupplierPartyFieldMetaAdditionalAccountID
  public static readonly DataSendingCapability = SupplierPartyFieldMetaDataSendingCapability
  public static readonly Party = SupplierPartyFieldMetaParty
  public static readonly DespatchContact = SupplierPartyFieldMetaDespatchContact
  public static readonly AccountingContact = SupplierPartyFieldMetaAccountingContact
  public static readonly SellerContact = SupplierPartyFieldMetaSellerContact
}

export const SupplierPartyFieldMap = new Map([
  [SupplierPartyField.CustomerAssignedAccountID, SupplierPartyFieldMetaCustomerAssignedAccountID],
  [SupplierPartyField.AdditionalAccountID, SupplierPartyFieldMetaAdditionalAccountID],
  [SupplierPartyField.DataSendingCapability, SupplierPartyFieldMetaDataSendingCapability],
  [SupplierPartyField.Party, SupplierPartyFieldMetaParty],
  [SupplierPartyField.DespatchContact, SupplierPartyFieldMetaDespatchContact],
  [SupplierPartyField.AccountingContact, SupplierPartyFieldMetaAccountingContact],
  [SupplierPartyField.SellerContact, SupplierPartyFieldMetaSellerContact]
])
