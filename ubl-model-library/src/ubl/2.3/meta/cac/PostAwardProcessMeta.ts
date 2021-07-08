import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PostAwardProcessField {
  UBLExtensions = 'UBLExtensions',
  ElectronicCatalogueUsageIndicator = 'ElectronicCatalogueUsageIndicator',
  ElectronicInvoiceAcceptedIndicator = 'ElectronicInvoiceAcceptedIndicator',
  ElectronicOrderUsageIndicator = 'ElectronicOrderUsageIndicator',
  ElectronicPaymentUsageIndicator = 'ElectronicPaymentUsageIndicator'
}

export const PostAwardProcessFieldMetaUBLExtensions = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PostAwardProcessFieldMetaElectronicCatalogueUsageIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicCatalogueUsageIndicator,
  'ElectronicCatalogueUsageIndicator',
  'Electronic Catalogue Usage',
  IndicatorType.name,
  'An indicator to specify whether an electronic catalogue will be used during the post award phase.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PostAwardProcessFieldMetaElectronicInvoiceAcceptedIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicInvoiceAcceptedIndicator,
  'ElectronicInvoiceAcceptedIndicator',
  'Electronic Invoice Accepted',
  IndicatorType.name,
  'An indicator on whether the electronic invoice is allowed for this process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PostAwardProcessFieldMetaElectronicOrderUsageIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicOrderUsageIndicator,
  'ElectronicOrderUsageIndicator',
  'Electronic Order Usage',
  IndicatorType.name,
  'An indicator on whether electronic ordering shall be used in the post award process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PostAwardProcessFieldMetaElectronicPaymentUsageIndicator = new FieldMeta<PostAwardProcessField>(
  PostAwardProcessField.ElectronicPaymentUsageIndicator,
  'ElectronicPaymentUsageIndicator',
  'Electronic Payment Usage',
  IndicatorType.name,
  'An indicator on whether electronic payment shall be used in the post award process.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class PostAwardProcessFieldMeta {
  public static readonly UBLExtensions = PostAwardProcessFieldMetaUBLExtensions
  public static readonly ElectronicCatalogueUsageIndicator = PostAwardProcessFieldMetaElectronicCatalogueUsageIndicator
  public static readonly ElectronicInvoiceAcceptedIndicator = PostAwardProcessFieldMetaElectronicInvoiceAcceptedIndicator
  public static readonly ElectronicOrderUsageIndicator = PostAwardProcessFieldMetaElectronicOrderUsageIndicator
  public static readonly ElectronicPaymentUsageIndicator = PostAwardProcessFieldMetaElectronicPaymentUsageIndicator
}

export const PostAwardProcessFieldMap = new Map([
  [PostAwardProcessField.UBLExtensions, PostAwardProcessFieldMetaUBLExtensions],
  [PostAwardProcessField.ElectronicCatalogueUsageIndicator, PostAwardProcessFieldMetaElectronicCatalogueUsageIndicator],
  [PostAwardProcessField.ElectronicInvoiceAcceptedIndicator, PostAwardProcessFieldMetaElectronicInvoiceAcceptedIndicator],
  [PostAwardProcessField.ElectronicOrderUsageIndicator, PostAwardProcessFieldMetaElectronicOrderUsageIndicator],
  [PostAwardProcessField.ElectronicPaymentUsageIndicator, PostAwardProcessFieldMetaElectronicPaymentUsageIndicator]
])

export const PostAwardProcessType: Type<PostAwardProcessField> = {
  name: 'PostAwardProcess',
  label: 'Post Award Process',
  module: TypeModule.cac,
  definition: 'A class to describe a post award process. These processes following the agreement on a contract for supply of goods or services ( for example, after the awarding of a tender).',
  fields: PostAwardProcessFieldMap,
}
