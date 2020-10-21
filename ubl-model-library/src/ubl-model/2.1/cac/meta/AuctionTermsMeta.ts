import { FieldMeta } from '../../FieldMeta'

export enum AuctionTermsField {
  AuctionConstraintIndicator = 'AuctionConstraintIndicator',
  JustificationDescription = 'JustificationDescription',
  Description = 'Description',
  ProcessDescription = 'ProcessDescription',
  ConditionsDescription = 'ConditionsDescription',
  ElectronicDeviceDescription = 'ElectronicDeviceDescription',
  AuctionURI = 'AuctionURI'
}

export const AuctionTermsFieldMetaAuctionConstraintIndicator = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.AuctionConstraintIndicator,
  'AuctionConstraintIndicator',
  'Constraint',
  'Indicator',
  'Indicates whether an electronic auction will be used before the awarding of a contract (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const AuctionTermsFieldMetaJustificationDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.JustificationDescription,
  'JustificationDescription',
  'Description',
  'Text',
  'Text describing a justification for the use of an auction in awarding the tender.',
  '0..n',
  undefined,
  undefined
)

export const AuctionTermsFieldMetaDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.Description,
  'Description',
  'Description',
  'Text',
  'Text for tenderers describing terms governing the auction.',
  '0..n',
  undefined,
  undefined
)

export const AuctionTermsFieldMetaProcessDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.ProcessDescription,
  'ProcessDescription',
  'Description',
  'Text',
  'Text describing the auction process.',
  '0..n',
  undefined,
  undefined
)

export const AuctionTermsFieldMetaConditionsDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.ConditionsDescription,
  'ConditionsDescription',
  'Description',
  'Text',
  'Text describing the conditions under which the tenderers will be able to bid as part of the auction.',
  '0..n',
  undefined,
  undefined
)

export const AuctionTermsFieldMetaElectronicDeviceDescription = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.ElectronicDeviceDescription,
  'ElectronicDeviceDescription',
  'Description',
  'Text',
  'Text describing an electronic device used for the auction, including associated connectivity specifications.',
  '0..n',
  undefined,
  undefined
)

export const AuctionTermsFieldMetaAuctionURI = new FieldMeta<AuctionTermsField>(
  AuctionTermsField.AuctionURI,
  'AuctionURI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of the electronic device used for the auction.',
  '0..1',
  undefined,
  undefined
)

export class AuctionTermsFieldMeta {
  public static readonly AuctionConstraintIndicator = AuctionTermsFieldMetaAuctionConstraintIndicator
  public static readonly JustificationDescription = AuctionTermsFieldMetaJustificationDescription
  public static readonly Description = AuctionTermsFieldMetaDescription
  public static readonly ProcessDescription = AuctionTermsFieldMetaProcessDescription
  public static readonly ConditionsDescription = AuctionTermsFieldMetaConditionsDescription
  public static readonly ElectronicDeviceDescription = AuctionTermsFieldMetaElectronicDeviceDescription
  public static readonly AuctionURI = AuctionTermsFieldMetaAuctionURI
}

export const AuctionTermsFieldMap = new Map([
  [AuctionTermsField.AuctionConstraintIndicator, AuctionTermsFieldMetaAuctionConstraintIndicator],
  [AuctionTermsField.JustificationDescription, AuctionTermsFieldMetaJustificationDescription],
  [AuctionTermsField.Description, AuctionTermsFieldMetaDescription],
  [AuctionTermsField.ProcessDescription, AuctionTermsFieldMetaProcessDescription],
  [AuctionTermsField.ConditionsDescription, AuctionTermsFieldMetaConditionsDescription],
  [AuctionTermsField.ElectronicDeviceDescription, AuctionTermsFieldMetaElectronicDeviceDescription],
  [AuctionTermsField.AuctionURI, AuctionTermsFieldMetaAuctionURI]
])
