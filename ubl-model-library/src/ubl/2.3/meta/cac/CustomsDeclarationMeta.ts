import { FieldMeta } from '../FieldMeta'

export enum CustomsDeclarationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ValidityPeriod = 'ValidityPeriod',
  ApplicableTerritoryAddress = 'ApplicableTerritoryAddress',
  Shipment = 'Shipment',
  CustomsExitOfficeLocation = 'CustomsExitOfficeLocation',
  IssuerParty = 'IssuerParty',
  ConsignorParty = 'ConsignorParty',
  ConsigneeParty = 'ConsigneeParty',
  FreightForwarderParty = 'FreightForwarderParty',
  CustomsParty = 'CustomsParty',
  PreviousCustomsDeclaration = 'PreviousCustomsDeclaration',
  AdditionalDocumentReference = 'AdditionalDocumentReference'
}

export const CustomsDeclarationFieldMetaUBLExtensions = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaID = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier associated with customs related procedures.',
  '1',
  'cbc',
  undefined,
  'CUST001 3333-44-123'
)

export const CustomsDeclarationFieldMetaValidityPeriod = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period during which this customs declaration is valid',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaApplicableTerritoryAddress = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.ApplicableTerritoryAddress,
  'ApplicableTerritoryAddress',
  'Applicable Territory Address',
  'Address',
  'The area or region where this customs declaration applies',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaShipment = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'A reference to the shipment of goods being declared',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaCustomsExitOfficeLocation = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.CustomsExitOfficeLocation,
  'CustomsExitOfficeLocation',
  'Customs Exit Office Location',
  'Location',
  'The location of the exit office from where the goods will leave or have left the customs territory',
  '0..1',
  'cac',
  'Customs office of exit',
  undefined
)

export const CustomsDeclarationFieldMetaIssuerParty = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'Describes the party issuing the customs declaration.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaConsignorParty = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  'Party',
  'The party, usually the seller, who is responsible for the consignment',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaConsigneeParty = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.ConsigneeParty,
  'ConsigneeParty',
  'Consignee Party',
  'Party',
  'The party, usually the buyer, who will receive the goods',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaFreightForwarderParty = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  'Party',
  'The freight forwarder or the forwarding agent responsible for the transportation of the goods',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaCustomsParty = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.CustomsParty,
  'CustomsParty',
  'Customs Party',
  'Party',
  'The authority responsible for processing this customs declaration',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaPreviousCustomsDeclaration = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.PreviousCustomsDeclaration,
  'PreviousCustomsDeclaration',
  'Previous Customs Declaration',
  'CustomsDeclaration',
  'A reference to a previous version of this customs declaration',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CustomsDeclarationFieldMetaAdditionalDocumentReference = new FieldMeta<CustomsDeclarationField>(
  CustomsDeclarationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to additional documents relevant or related to this customs declaration',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class CustomsDeclarationFieldMeta {
  public static readonly UBLExtensions = CustomsDeclarationFieldMetaUBLExtensions
  public static readonly ID = CustomsDeclarationFieldMetaID
  public static readonly ValidityPeriod = CustomsDeclarationFieldMetaValidityPeriod
  public static readonly ApplicableTerritoryAddress = CustomsDeclarationFieldMetaApplicableTerritoryAddress
  public static readonly Shipment = CustomsDeclarationFieldMetaShipment
  public static readonly CustomsExitOfficeLocation = CustomsDeclarationFieldMetaCustomsExitOfficeLocation
  public static readonly IssuerParty = CustomsDeclarationFieldMetaIssuerParty
  public static readonly ConsignorParty = CustomsDeclarationFieldMetaConsignorParty
  public static readonly ConsigneeParty = CustomsDeclarationFieldMetaConsigneeParty
  public static readonly FreightForwarderParty = CustomsDeclarationFieldMetaFreightForwarderParty
  public static readonly CustomsParty = CustomsDeclarationFieldMetaCustomsParty
  public static readonly PreviousCustomsDeclaration = CustomsDeclarationFieldMetaPreviousCustomsDeclaration
  public static readonly AdditionalDocumentReference = CustomsDeclarationFieldMetaAdditionalDocumentReference
}

export const CustomsDeclarationFieldMap = new Map([
  [CustomsDeclarationField.UBLExtensions, CustomsDeclarationFieldMetaUBLExtensions],
  [CustomsDeclarationField.ID, CustomsDeclarationFieldMetaID],
  [CustomsDeclarationField.ValidityPeriod, CustomsDeclarationFieldMetaValidityPeriod],
  [CustomsDeclarationField.ApplicableTerritoryAddress, CustomsDeclarationFieldMetaApplicableTerritoryAddress],
  [CustomsDeclarationField.Shipment, CustomsDeclarationFieldMetaShipment],
  [CustomsDeclarationField.CustomsExitOfficeLocation, CustomsDeclarationFieldMetaCustomsExitOfficeLocation],
  [CustomsDeclarationField.IssuerParty, CustomsDeclarationFieldMetaIssuerParty],
  [CustomsDeclarationField.ConsignorParty, CustomsDeclarationFieldMetaConsignorParty],
  [CustomsDeclarationField.ConsigneeParty, CustomsDeclarationFieldMetaConsigneeParty],
  [CustomsDeclarationField.FreightForwarderParty, CustomsDeclarationFieldMetaFreightForwarderParty],
  [CustomsDeclarationField.CustomsParty, CustomsDeclarationFieldMetaCustomsParty],
  [CustomsDeclarationField.PreviousCustomsDeclaration, CustomsDeclarationFieldMetaPreviousCustomsDeclaration],
  [CustomsDeclarationField.AdditionalDocumentReference, CustomsDeclarationFieldMetaAdditionalDocumentReference]
])
