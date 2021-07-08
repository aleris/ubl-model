import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AuctionTermsField {
  UBLExtensions = 'UBLExtensions',
  AuctionConstraintIndicator = 'AuctionConstraintIndicator',
  JustificationDescription = 'JustificationDescription',
  Description = 'Description',
  ProcessDescription = 'ProcessDescription',
  ConditionsDescription = 'ConditionsDescription',
  ElectronicDeviceDescription = 'ElectronicDeviceDescription',
  AuctionURI = 'AuctionURI'
}

export const AuctionTermsFieldMetaUBLExtensions = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AuctionTermsFieldMetaAuctionConstraintIndicator = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.AuctionConstraintIndicator,
  'AuctionConstraintIndicator',
  'Auction Constraint',
  IndicatorType.name,
  'Indicates whether an electronic auction will be used before the awarding of a contract (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuctionTermsFieldMetaJustificationDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.JustificationDescription,
  'JustificationDescription',
  'Justification Description',
  TextType.name,
  'Text describing a justification for the use of an auction in awarding the tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuctionTermsFieldMetaDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text for tenderers describing terms governing the auction.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuctionTermsFieldMetaProcessDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.ProcessDescription,
  'ProcessDescription',
  'Process Description',
  TextType.name,
  'Text describing the auction process.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuctionTermsFieldMetaConditionsDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.ConditionsDescription,
  'ConditionsDescription',
  'Conditions Description',
  TextType.name,
  'Text describing the conditions under which the tenderers will be able to bid as part of the auction.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuctionTermsFieldMetaElectronicDeviceDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.ElectronicDeviceDescription,
  'ElectronicDeviceDescription',
  'Electronic Device Description',
  TextType.name,
  'Text describing an electronic device used for the auction, including associated connectivity specifications.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AuctionTermsFieldMetaAuctionURI = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.AuctionURI,
  'AuctionURI',
  'Auction URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of the electronic device used for the auction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class AuctionTermsFieldMeta {
  public static readonly UBLExtensions = AuctionTermsFieldMetaUBLExtensions
  public static readonly AuctionConstraintIndicator = AuctionTermsFieldMetaAuctionConstraintIndicator
  public static readonly JustificationDescription = AuctionTermsFieldMetaJustificationDescription
  public static readonly Description = AuctionTermsFieldMetaDescription
  public static readonly ProcessDescription = AuctionTermsFieldMetaProcessDescription
  public static readonly ConditionsDescription = AuctionTermsFieldMetaConditionsDescription
  public static readonly ElectronicDeviceDescription = AuctionTermsFieldMetaElectronicDeviceDescription
  public static readonly AuctionURI = AuctionTermsFieldMetaAuctionURI
}

export const AuctionTermsFieldMap = new Map([
  [AuctionTermsField.UBLExtensions, AuctionTermsFieldMetaUBLExtensions],
  [AuctionTermsField.AuctionConstraintIndicator, AuctionTermsFieldMetaAuctionConstraintIndicator],
  [AuctionTermsField.JustificationDescription, AuctionTermsFieldMetaJustificationDescription],
  [AuctionTermsField.Description, AuctionTermsFieldMetaDescription],
  [AuctionTermsField.ProcessDescription, AuctionTermsFieldMetaProcessDescription],
  [AuctionTermsField.ConditionsDescription, AuctionTermsFieldMetaConditionsDescription],
  [AuctionTermsField.ElectronicDeviceDescription, AuctionTermsFieldMetaElectronicDeviceDescription],
  [AuctionTermsField.AuctionURI, AuctionTermsFieldMetaAuctionURI]
])

export const AuctionTermsType: Type<AuctionTermsField> = {
  name: 'AuctionTerms',
  label: 'Auction Terms',
  module: TypeModule.cac,
  definition: 'A class to describe the terms to be fulfilled by tenderers if an auction is to be executed before the awarding of a tender.',
  fields: AuctionTermsFieldMap,
}
