import { FieldMeta } from '../../FieldMeta'

export enum CustomerPartyField {
  CustomerAssignedAccountID = 'CustomerAssignedAccountID',
  SupplierAssignedAccountID = 'SupplierAssignedAccountID',
  AdditionalAccountID = 'AdditionalAccountID',
  Party = 'Party',
  DeliveryContact = 'DeliveryContact',
  AccountingContact = 'AccountingContact',
  BuyerContact = 'BuyerContact'
}

export const CustomerPartyFieldMetaCustomerAssignedAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.CustomerAssignedAccountID,
  'CustomerAssignedAccountID',
  'Account Identifier',
  'Identifier',
  'An identifier for the customer\'s account, assigned by the customer itself.',
  '0..1',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaSupplierAssignedAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.SupplierAssignedAccountID,
  'SupplierAssignedAccountID',
  'Account Identifier',
  'Identifier',
  'An identifier for the customer\'s account, assigned by the supplier.',
  '0..1',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaAdditionalAccountID = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.AdditionalAccountID,
  'AdditionalAccountID',
  'Account Identifier',
  'Identifier',
  'An identifier for the customer\'s account, assigned by a third party.',
  '0..n',
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
  undefined,
  undefined
)

export const CustomerPartyFieldMetaDeliveryContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.DeliveryContact,
  'DeliveryContact',
  'Contact',
  'Contact',
  'A customer contact for deliveries.',
  '0..1',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaAccountingContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.AccountingContact,
  'AccountingContact',
  'Contact',
  'Contact',
  'A customer contact for accounting.',
  '0..1',
  undefined,
  undefined
)

export const CustomerPartyFieldMetaBuyerContact = new FieldMeta<CustomerPartyField>(
  CustomerPartyField.BuyerContact,
  'BuyerContact',
  'Contact',
  'Contact',
  'A customer contact for purchasing.',
  '0..1',
  undefined,
  undefined
)

export class CustomerPartyFieldMeta {
  public static readonly CustomerAssignedAccountID = CustomerPartyFieldMetaCustomerAssignedAccountID
  public static readonly SupplierAssignedAccountID = CustomerPartyFieldMetaSupplierAssignedAccountID
  public static readonly AdditionalAccountID = CustomerPartyFieldMetaAdditionalAccountID
  public static readonly Party = CustomerPartyFieldMetaParty
  public static readonly DeliveryContact = CustomerPartyFieldMetaDeliveryContact
  public static readonly AccountingContact = CustomerPartyFieldMetaAccountingContact
  public static readonly BuyerContact = CustomerPartyFieldMetaBuyerContact
}

export const CustomerPartyFieldMap = new Map([
  [CustomerPartyField.CustomerAssignedAccountID, CustomerPartyFieldMetaCustomerAssignedAccountID],
  [CustomerPartyField.SupplierAssignedAccountID, CustomerPartyFieldMetaSupplierAssignedAccountID],
  [CustomerPartyField.AdditionalAccountID, CustomerPartyFieldMetaAdditionalAccountID],
  [CustomerPartyField.Party, CustomerPartyFieldMetaParty],
  [CustomerPartyField.DeliveryContact, CustomerPartyFieldMetaDeliveryContact],
  [CustomerPartyField.AccountingContact, CustomerPartyFieldMetaAccountingContact],
  [CustomerPartyField.BuyerContact, CustomerPartyFieldMetaBuyerContact]
])
