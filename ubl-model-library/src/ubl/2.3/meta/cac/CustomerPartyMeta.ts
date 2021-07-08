import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContactType } from './ContactMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CustomerPartyField {
  UBLExtensions = 'UBLExtensions',
  CustomerAssignedAccountID = 'CustomerAssignedAccountID',
  SupplierAssignedAccountID = 'SupplierAssignedAccountID',
  AdditionalAccountID = 'AdditionalAccountID',
  Party = 'Party',
  DeliveryContact = 'DeliveryContact',
  AccountingContact = 'AccountingContact',
  BuyerContact = 'BuyerContact'
}

export const CustomerPartyFieldMetaUBLExtensions = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CustomerPartyFieldMetaCustomerAssignedAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.CustomerAssignedAccountID,
  'CustomerAssignedAccountID',
  'Customer Assigned Account Identifier',
  IdentifierType.name,
  'An identifier for the customer\'s account, assigned by the customer itself.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CustomerPartyFieldMetaSupplierAssignedAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.SupplierAssignedAccountID,
  'SupplierAssignedAccountID',
  'Supplier Assigned Account Identifier',
  IdentifierType.name,
  'An identifier for the customer\'s account, assigned by the supplier.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CustomerPartyFieldMetaAdditionalAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.AdditionalAccountID,
  'AdditionalAccountID',
  'Additional Account Identifier',
  IdentifierType.name,
  'An identifier for the customer\'s account, assigned by a third party.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CustomerPartyFieldMetaParty = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The customer party itself.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CustomerPartyFieldMetaDeliveryContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.DeliveryContact,
  'DeliveryContact',
  'Delivery Contact',
  ContactType.name,
  'A customer contact for deliveries.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CustomerPartyFieldMetaAccountingContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.AccountingContact,
  'AccountingContact',
  'Accounting Contact',
  ContactType.name,
  'A customer contact for accounting.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CustomerPartyFieldMetaBuyerContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.BuyerContact,
  'BuyerContact',
  'Buyer Contact',
  ContactType.name,
  'A customer contact for purchasing.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class CustomerPartyFieldMeta {
  public static readonly UBLExtensions = CustomerPartyFieldMetaUBLExtensions
  public static readonly CustomerAssignedAccountID = CustomerPartyFieldMetaCustomerAssignedAccountID
  public static readonly SupplierAssignedAccountID = CustomerPartyFieldMetaSupplierAssignedAccountID
  public static readonly AdditionalAccountID = CustomerPartyFieldMetaAdditionalAccountID
  public static readonly Party = CustomerPartyFieldMetaParty
  public static readonly DeliveryContact = CustomerPartyFieldMetaDeliveryContact
  public static readonly AccountingContact = CustomerPartyFieldMetaAccountingContact
  public static readonly BuyerContact = CustomerPartyFieldMetaBuyerContact
}

export const CustomerPartyFieldMap = new Map([
  [CustomerPartyField.UBLExtensions, CustomerPartyFieldMetaUBLExtensions],
  [CustomerPartyField.CustomerAssignedAccountID, CustomerPartyFieldMetaCustomerAssignedAccountID],
  [CustomerPartyField.SupplierAssignedAccountID, CustomerPartyFieldMetaSupplierAssignedAccountID],
  [CustomerPartyField.AdditionalAccountID, CustomerPartyFieldMetaAdditionalAccountID],
  [CustomerPartyField.Party, CustomerPartyFieldMetaParty],
  [CustomerPartyField.DeliveryContact, CustomerPartyFieldMetaDeliveryContact],
  [CustomerPartyField.AccountingContact, CustomerPartyFieldMetaAccountingContact],
  [CustomerPartyField.BuyerContact, CustomerPartyFieldMetaBuyerContact]
])

export const CustomerPartyType: Type<CustomerPartyField> = {
  name: 'CustomerParty',
  label: 'Customer Party',
  module: TypeModule.cac,
  definition: 'A class to describe a customer party.',
  fields: CustomerPartyFieldMap,
}
