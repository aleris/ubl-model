import { FieldMeta } from '../../FieldMeta'

export enum PostAwardProcessField {
  ElectronicCatalogueUsageIndicator = 'ElectronicCatalogueUsageIndicator',
  ElectronicInvoiceAcceptedIndicator = 'ElectronicInvoiceAcceptedIndicator',
  ElectronicOrderUsageIndicator = 'ElectronicOrderUsageIndicator',
  ElectronicPaymentUsageIndicator = 'ElectronicPaymentUsageIndicator'
}

export const PostAwardProcessFieldMetaElectronicCatalogueUsageIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicCatalogueUsageIndicator,
  'ElectronicCatalogueUsageIndicator',
  'Electronic Catalogue Usage',
  'Indicator',
  'An indicator to specify whether an electronic catalogue will be used during the post award phase.',
  '0..1',
  undefined,
  undefined
)

export const PostAwardProcessFieldMetaElectronicInvoiceAcceptedIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicInvoiceAcceptedIndicator,
  'ElectronicInvoiceAcceptedIndicator',
  'Electronic Invoice Accepted',
  'Indicator',
  'An indicator on whether the electronic invoice is allowed for this process.',
  '0..1',
  undefined,
  undefined
)

export const PostAwardProcessFieldMetaElectronicOrderUsageIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicOrderUsageIndicator,
  'ElectronicOrderUsageIndicator',
  'Electronic Order Usage',
  'Indicator',
  'An indicator on whether electronic ordering shall be used in the post award process.',
  '0..1',
  undefined,
  undefined
)

export const PostAwardProcessFieldMetaElectronicPaymentUsageIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicPaymentUsageIndicator,
  'ElectronicPaymentUsageIndicator',
  'Electronic Payment Usage',
  'Indicator',
  'An indicator on whether electronic payment shall be used in the post award process.',
  '0..n',
  undefined,
  undefined
)

export class PostAwardProcessFieldMeta {
  public static readonly ElectronicCatalogueUsageIndicator = PostAwardProcessFieldMetaElectronicCatalogueUsageIndicator
  public static readonly ElectronicInvoiceAcceptedIndicator = PostAwardProcessFieldMetaElectronicInvoiceAcceptedIndicator
  public static readonly ElectronicOrderUsageIndicator = PostAwardProcessFieldMetaElectronicOrderUsageIndicator
  public static readonly ElectronicPaymentUsageIndicator = PostAwardProcessFieldMetaElectronicPaymentUsageIndicator
}

export const PostAwardProcessFieldMap = new Map([
  [PostAwardProcessField.ElectronicCatalogueUsageIndicator, PostAwardProcessFieldMetaElectronicCatalogueUsageIndicator],
  [PostAwardProcessField.ElectronicInvoiceAcceptedIndicator, PostAwardProcessFieldMetaElectronicInvoiceAcceptedIndicator],
  [PostAwardProcessField.ElectronicOrderUsageIndicator, PostAwardProcessFieldMetaElectronicOrderUsageIndicator],
  [PostAwardProcessField.ElectronicPaymentUsageIndicator, PostAwardProcessFieldMetaElectronicPaymentUsageIndicator]
])
