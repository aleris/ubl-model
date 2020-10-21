import { FieldMeta } from '../../FieldMeta'

export enum LocationField {
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

export const LocationFieldMetaID = new FieldMeta<LocationField>(
  LocationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this location, e.g., the EAN Location Number, GLN.',
  '0..1',
  undefined,
  '5790002221134'
)

export const LocationFieldMetaDescription = new FieldMeta<LocationField>(
  LocationField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this location.',
  '0..n',
  undefined,
  undefined
)

export const LocationFieldMetaConditions = new FieldMeta<LocationField>(
  LocationField.Conditions,
  'Conditions',
  'Conditions',
  'Text',
  'Free-form text describing the physical conditions of the location.',
  '0..n',
  undefined,
  undefined
)

export const LocationFieldMetaCountrySubentity = new FieldMeta<LocationField>(
  LocationField.CountrySubentity,
  'CountrySubentity',
  'Country Subentity',
  'Text',
  'A territorial division of a country, such as a county or state, expressed as text.',
  '0..1',
  'AdministrativeArea, State, Country, Shire, Canton',
  'Florida , Tamilnadu'
)

export const LocationFieldMetaCountrySubentityCode = new FieldMeta<LocationField>(
  LocationField.CountrySubentityCode,
  'CountrySubentityCode',
  'Country Subentity Code',
  'Code',
  'A territorial division of a country, such as a county or state, expressed as a code.',
  '0..1',
  'AdministrativeAreaCode, State Code',
  undefined
)

export const LocationFieldMetaLocationTypeCode = new FieldMeta<LocationField>(
  LocationField.LocationTypeCode,
  'LocationTypeCode',
  'Location Type Code',
  'Code',
  'A code signifying the type of location.',
  '0..1',
  undefined,
  undefined
)

export const LocationFieldMetaInformationURI = new FieldMeta<LocationField>(
  LocationField.InformationURI,
  'InformationURI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of a document providing information about this location.',
  '0..1',
  undefined,
  undefined
)

export const LocationFieldMetaName = new FieldMeta<LocationField>(
  LocationField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this location.',
  '0..1',
  undefined,
  'winter 2005 collection'
)

export const LocationFieldMetaValidityPeriod = new FieldMeta<LocationField>(
  LocationField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'A period during which this location can be used (e.g., for delivery).',
  '0..n',
  undefined,
  undefined
)

export const LocationFieldMetaAddress = new FieldMeta<LocationField>(
  LocationField.Address,
  'Address',
  'Address',
  'Address',
  'The address of this location.',
  '0..1',
  undefined,
  undefined
)

export const LocationFieldMetaSubsidiaryLocation = new FieldMeta<LocationField>(
  LocationField.SubsidiaryLocation,
  'SubsidiaryLocation',
  'Location',
  'Location',
  'A location subsidiary to this location.',
  '0..n',
  undefined,
  undefined
)

export const LocationFieldMetaLocationCoordinate = new FieldMeta<LocationField>(
  LocationField.LocationCoordinate,
  'LocationCoordinate',
  'Location Coordinate',
  'LocationCoordinate',
  'The geographical coordinates of this location.',
  '0..n',
  undefined,
  undefined
)

export class LocationFieldMeta {
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
