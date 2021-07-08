import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationCoordinateType } from './LocationCoordinateMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LocationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Description = 'Description',
  Conditions = 'Conditions',
  CountrySubentity = 'CountrySubentity',
  CountrySubentityCode = 'CountrySubentityCode',
  LocationTypeCode = 'LocationTypeCode',
  InformationURI = 'InformationURI',
  Name = 'Name',
  ValidityPeriod = 'ValidityPeriod',
  Address = 'Address',
  SubsidiaryLocation = 'SubsidiaryLocation',
  LocationCoordinate = 'LocationCoordinate'
}

export const LocationFieldMetaUBLExtensions = new FieldMeta<LocationField>(
  LocationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LocationFieldMetaID = new FieldMeta<LocationField>(
  LocationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this location, e.g., the EAN Location Number, GLN.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5790002221134'
)

export const LocationFieldMetaDescription = new FieldMeta<LocationField>(
  LocationField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this location.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationFieldMetaConditions = new FieldMeta<LocationField>(
  LocationField.Conditions,
  'Conditions',
  'Conditions',
  TextType.name,
  'Free-form text describing the physical conditions of the location.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationFieldMetaCountrySubentity = new FieldMeta<LocationField>(
  LocationField.CountrySubentity,
  'CountrySubentity',
  'Country Subentity',
  TextType.name,
  'A territorial division of a country, such as a county or state, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'AdministrativeArea, State, Country, Shire, Canton',
  'Florida , Tamilnadu'
)

export const LocationFieldMetaCountrySubentityCode = new FieldMeta<LocationField>(
  LocationField.CountrySubentityCode,
  'CountrySubentityCode',
  'Country Subentity Code',
  CodeType.name,
  'A territorial division of a country, such as a county or state, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'AdministrativeAreaCode, State Code',
  undefined
)

export const LocationFieldMetaLocationTypeCode = new FieldMeta<LocationField>(
  LocationField.LocationTypeCode,
  'LocationTypeCode',
  'Location Type Code',
  CodeType.name,
  'A code signifying the type of location.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationFieldMetaInformationURI = new FieldMeta<LocationField>(
  LocationField.InformationURI,
  'InformationURI',
  'Information URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of a document providing information about this location.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationFieldMetaName = new FieldMeta<LocationField>(
  LocationField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this location.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'winter 2005 collection'
)

export const LocationFieldMetaValidityPeriod = new FieldMeta<LocationField>(
  LocationField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period during which this location can be used (e.g., for delivery).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const LocationFieldMetaAddress = new FieldMeta<LocationField>(
  LocationField.Address,
  'Address',
  'Address',
  AddressType.name,
  'The address of this location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const LocationFieldMetaSubsidiaryLocation = new FieldMeta<LocationField>(
  LocationField.SubsidiaryLocation,
  'SubsidiaryLocation',
  'Subsidiary Location',
  LocationType.name,
  'A location subsidiary to this location.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const LocationFieldMetaLocationCoordinate = new FieldMeta<LocationField>(
  LocationField.LocationCoordinate,
  'LocationCoordinate',
  'Location Coordinate',
  LocationCoordinateType.name,
  'The geographical coordinates of this location.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class LocationFieldMeta {
  public static readonly UBLExtensions = LocationFieldMetaUBLExtensions
  public static readonly ID = LocationFieldMetaID
  public static readonly Description = LocationFieldMetaDescription
  public static readonly Conditions = LocationFieldMetaConditions
  public static readonly CountrySubentity = LocationFieldMetaCountrySubentity
  public static readonly CountrySubentityCode = LocationFieldMetaCountrySubentityCode
  public static readonly LocationTypeCode = LocationFieldMetaLocationTypeCode
  public static readonly InformationURI = LocationFieldMetaInformationURI
  public static readonly Name = LocationFieldMetaName
  public static readonly ValidityPeriod = LocationFieldMetaValidityPeriod
  public static readonly Address = LocationFieldMetaAddress
  public static readonly SubsidiaryLocation = LocationFieldMetaSubsidiaryLocation
  public static readonly LocationCoordinate = LocationFieldMetaLocationCoordinate
}

export const LocationFieldMap = new Map([
  [LocationField.UBLExtensions, LocationFieldMetaUBLExtensions],
  [LocationField.ID, LocationFieldMetaID],
  [LocationField.Description, LocationFieldMetaDescription],
  [LocationField.Conditions, LocationFieldMetaConditions],
  [LocationField.CountrySubentity, LocationFieldMetaCountrySubentity],
  [LocationField.CountrySubentityCode, LocationFieldMetaCountrySubentityCode],
  [LocationField.LocationTypeCode, LocationFieldMetaLocationTypeCode],
  [LocationField.InformationURI, LocationFieldMetaInformationURI],
  [LocationField.Name, LocationFieldMetaName],
  [LocationField.ValidityPeriod, LocationFieldMetaValidityPeriod],
  [LocationField.Address, LocationFieldMetaAddress],
  [LocationField.SubsidiaryLocation, LocationFieldMetaSubsidiaryLocation],
  [LocationField.LocationCoordinate, LocationFieldMetaLocationCoordinate]
])

export const LocationType: Type<LocationField> = {
  name: 'Location',
  label: 'Location',
  module: TypeModule.cac,
  definition: 'A class to describe a location.',
  fields: LocationFieldMap,
}
