import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaCustomerAssignedAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.CustomerAssignedAccountID,
  'CustomerAssignedAccountID',
  'Customer Assigned Account Identifier',
  'Identifier',
  'An identifier for the customer\'s account, assigned by the customer itself.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaSupplierAssignedAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.SupplierAssignedAccountID,
  'SupplierAssignedAccountID',
  'Supplier Assigned Account Identifier',
  'Identifier',
  'An identifier for the customer\'s account, assigned by the supplier.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaAdditionalAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.AdditionalAccountID,
  'AdditionalAccountID',
  'Additional Account Identifier',
  'Identifier',
  'An identifier for the customer\'s account, assigned by a third party.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaParty = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The customer party itself.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaDeliveryContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.DeliveryContact,
  'DeliveryContact',
  'Delivery Contact',
  'Contact',
  'A customer contact for deliveries.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaAccountingContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.AccountingContact,
  'AccountingContact',
  'Accounting Contact',
  'Contact',
  'A customer contact for accounting.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaBuyerContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.BuyerContact,
  'BuyerContact',
  'Buyer Contact',
  'Contact',
  'A customer contact for purchasing.',
  '0..1',
  'cac',
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
