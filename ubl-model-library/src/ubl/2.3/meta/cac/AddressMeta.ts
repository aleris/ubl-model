import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressLineType } from './AddressLineMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CountryType } from './CountryMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationCoordinateType } from './LocationCoordinateMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AddressField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  AddressTypeCode = 'AddressTypeCode',
  AddressFormatCode = 'AddressFormatCode',
  Postbox = 'Postbox',
  Floor = 'Floor',
  Room = 'Room',
  StreetName = 'StreetName',
  AdditionalStreetName = 'AdditionalStreetName',
  BlockName = 'BlockName',
  BuildingName = 'BuildingName',
  BuildingNumber = 'BuildingNumber',
  Description = 'Description',
  InhouseMail = 'InhouseMail',
  Department = 'Department',
  MarkAttention = 'MarkAttention',
  MarkCare = 'MarkCare',
  PlotIdentification = 'PlotIdentification',
  CitySubdivisionName = 'CitySubdivisionName',
  CityName = 'CityName',
  PostalZone = 'PostalZone',
  CountrySubentity = 'CountrySubentity',
  CountrySubentityCode = 'CountrySubentityCode',
  Region = 'Region',
  District = 'District',
  TimezoneOffset = 'TimezoneOffset',
  AddressLine = 'AddressLine',
  Country = 'Country',
  LocationCoordinate = 'LocationCoordinate'
}

export const AddressFieldMetaUBLExtensions = new FieldMeta<AddressField>(
  AddressField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AddressFieldMetaID = new FieldMeta<AddressField>(
  AddressField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this address within an agreed scheme of address identifiers.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'DetailsKey',
  undefined
)

export const AddressFieldMetaAddressTypeCode = new FieldMeta<AddressField>(
  AddressField.AddressTypeCode,
  'AddressTypeCode',
  'Address Type Code',
  CodeType.name,
  'A mutually agreed code signifying the type of this address.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AddressFieldMetaAddressFormatCode = new FieldMeta<AddressField>(
  AddressField.AddressFormatCode,
  'AddressFormatCode',
  'Address Format Code',
  CodeType.name,
  'A mutually agreed code signifying the format of this address.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AddressFieldMetaPostbox = new FieldMeta<AddressField>(
  AddressField.Postbox,
  'Postbox',
  'Postbox',
  TextType.name,
  'A post office box number registered for postal delivery by a postal service provider.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'PostBox, PO Box',
  '123'
)

export const AddressFieldMetaFloor = new FieldMeta<AddressField>(
  AddressField.Floor,
  'Floor',
  'Floor',
  TextType.name,
  'An identifiable floor of a building.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'SubPremiseNumber',
  '30'
)

export const AddressFieldMetaRoom = new FieldMeta<AddressField>(
  AddressField.Room,
  'Room',
  'Room',
  TextType.name,
  'An identifiable room, suite, or apartment of a building.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'SubPremiseNumber',
  'Reception'
)

export const AddressFieldMetaStreetName = new FieldMeta<AddressField>(
  AddressField.StreetName,
  'StreetName',
  'Street Name',
  TextType.name,
  'The name of the street, road, avenue, way, etc. to which the number of the building is attached.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Thoroughfare',
  'Kwun Tong Road'
)

export const AddressFieldMetaAdditionalStreetName = new FieldMeta<AddressField>(
  AddressField.AdditionalStreetName,
  'AdditionalStreetName',
  'Additional Street Name',
  TextType.name,
  'An additional street name used to further clarify the address.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Thoroughfare',
  'Cnr Aberdeen Road'
)

export const AddressFieldMetaBlockName = new FieldMeta<AddressField>(
  AddressField.BlockName,
  'BlockName',
  'Block Name',
  TextType.name,
  'The name of the block (an area surrounded by streets and usually containing several buildings) in which this address is located.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Seabird'
)

export const AddressFieldMetaBuildingName = new FieldMeta<AddressField>(
  AddressField.BuildingName,
  'BuildingName',
  'Building Name',
  TextType.name,
  'The name of a building.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'BuildingName',
  'Plot 421'
)

export const AddressFieldMetaBuildingNumber = new FieldMeta<AddressField>(
  AddressField.BuildingNumber,
  'BuildingNumber',
  'Building Number',
  TextType.name,
  'The number of a building within the street.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'PremiseNumber',
  '388'
)

export const AddressFieldMetaDescription = new FieldMeta<AddressField>(
  AddressField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this address for clarification or specificity',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AddressFieldMetaInhouseMail = new FieldMeta<AddressField>(
  AddressField.InhouseMail,
  'InhouseMail',
  'Inhouse Mail',
  TextType.name,
  'The specific identifable location within a building where mail is delivered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'MailStop',
  undefined
)

export const AddressFieldMetaDepartment = new FieldMeta<AddressField>(
  AddressField.Department,
  'Department',
  'Department',
  TextType.name,
  'The department of the addressee.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Department',
  'Accounts Payable'
)

export const AddressFieldMetaMarkAttention = new FieldMeta<AddressField>(
  AddressField.MarkAttention,
  'MarkAttention',
  'Mark Attention',
  TextType.name,
  'The name, expressed as text, of a person or department in an organization to whose attention incoming mail is directed; corresponds to the printed forms "for the attention of", "FAO", and ATTN:".',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AddressFieldMetaMarkCare = new FieldMeta<AddressField>(
  AddressField.MarkCare,
  'MarkCare',
  'Mark Care',
  TextType.name,
  'The name, expressed as text, of a person or organization at this address into whose care incoming mail is entrusted; corresponds to the printed forms "care of" and "c/o".',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AddressFieldMetaPlotIdentification = new FieldMeta<AddressField>(
  AddressField.PlotIdentification,
  'PlotIdentification',
  'Plot Identification',
  TextType.name,
  'An identifier (e.g., a parcel number) for the piece of land associated with this address.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AddressFieldMetaCitySubdivisionName = new FieldMeta<AddressField>(
  AddressField.CitySubdivisionName,
  'CitySubdivisionName',
  'City Subdivision Name',
  TextType.name,
  'The name of the subdivision of a city, town, or village in which this address is located, such as the name of its district or borough.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AddressFieldMetaCityName = new FieldMeta<AddressField>(
  AddressField.CityName,
  'CityName',
  'City Name',
  TextType.name,
  'The name of a city, town, or village.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'LocalityName',
  'Hong Kong'
)

export const AddressFieldMetaPostalZone = new FieldMeta<AddressField>(
  AddressField.PostalZone,
  'PostalZone',
  'Postal Zone',
  TextType.name,
  'The postal identifier for this address according to the relevant national postal service, such as a ZIP code or Post Code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'PostalCodeNumber',
  'SW11 4EW 2500 GG'
)

export const AddressFieldMetaCountrySubentity = new FieldMeta<AddressField>(
  AddressField.CountrySubentity,
  'CountrySubentity',
  'Country Subentity',
  TextType.name,
  'The political or administrative division of a country in which this address is located, such as the name of its county, province, or state, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'AdministrativeArea, State, Country, Shire, Canton',
  'Florida , Tamilnadu'
)

export const AddressFieldMetaCountrySubentityCode = new FieldMeta<AddressField>(
  AddressField.CountrySubentityCode,
  'CountrySubentityCode',
  'Country Subentity Code',
  CodeType.name,
  'The political or administrative division of a country in which this address is located, such as a county, province, or state, expressed as a code (typically nationally agreed).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'AdministrativeAreaCode, State Code',
  undefined
)

export const AddressFieldMetaRegion = new FieldMeta<AddressField>(
  AddressField.Region,
  'Region',
  'Region',
  TextType.name,
  'The recognized geographic or economic region or group of countries in which this address is located.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'LocalityName, Economic Zone',
  'European Union'
)

export const AddressFieldMetaDistrict = new FieldMeta<AddressField>(
  AddressField.District,
  'District',
  'District',
  TextType.name,
  'The district or geographical division of a country or region in which this address is located.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'LocalityName, Area',
  'East Coast'
)

export const AddressFieldMetaTimezoneOffset = new FieldMeta<AddressField>(
  AddressField.TimezoneOffset,
  'TimezoneOffset',
  'Timezone Offset',
  TextType.name,
  'The time zone in which this address is located (as an offset from Universal Coordinated Time (UTC)) at the time of exchange.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '+8:00 -3:00'
)

export const AddressFieldMetaAddressLine = new FieldMeta<AddressField>(
  AddressField.AddressLine,
  'AddressLine',
  'Address Line',
  AddressLineType.name,
  'An unstructured address line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AddressFieldMetaCountry = new FieldMeta<AddressField>(
  AddressField.Country,
  'Country',
  'Country',
  CountryType.name,
  'The country in which this address is situated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AddressFieldMetaLocationCoordinate = new FieldMeta<AddressField>(
  AddressField.LocationCoordinate,
  'LocationCoordinate',
  'Location Coordinate',
  LocationCoordinateType.name,
  'The geographical coordinates of this address.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class AddressFieldMeta {
  public static readonly UBLExtensions = AddressFieldMetaUBLExtensions
  public static readonly ID = AddressFieldMetaID
  public static readonly AddressTypeCode = AddressFieldMetaAddressTypeCode
  public static readonly AddressFormatCode = AddressFieldMetaAddressFormatCode
  public static readonly Postbox = AddressFieldMetaPostbox
  public static readonly Floor = AddressFieldMetaFloor
  public static readonly Room = AddressFieldMetaRoom
  public static readonly StreetName = AddressFieldMetaStreetName
  public static readonly AdditionalStreetName = AddressFieldMetaAdditionalStreetName
  public static readonly BlockName = AddressFieldMetaBlockName
  public static readonly BuildingName = AddressFieldMetaBuildingName
  public static readonly BuildingNumber = AddressFieldMetaBuildingNumber
  public static readonly Description = AddressFieldMetaDescription
  public static readonly InhouseMail = AddressFieldMetaInhouseMail
  public static readonly Department = AddressFieldMetaDepartment
  public static readonly MarkAttention = AddressFieldMetaMarkAttention
  public static readonly MarkCare = AddressFieldMetaMarkCare
  public static readonly PlotIdentification = AddressFieldMetaPlotIdentification
  public static readonly CitySubdivisionName = AddressFieldMetaCitySubdivisionName
  public static readonly CityName = AddressFieldMetaCityName
  public static readonly PostalZone = AddressFieldMetaPostalZone
  public static readonly CountrySubentity = AddressFieldMetaCountrySubentity
  public static readonly CountrySubentityCode = AddressFieldMetaCountrySubentityCode
  public static readonly Region = AddressFieldMetaRegion
  public static readonly District = AddressFieldMetaDistrict
  public static readonly TimezoneOffset = AddressFieldMetaTimezoneOffset
  public static readonly AddressLine = AddressFieldMetaAddressLine
  public static readonly Country = AddressFieldMetaCountry
  public static readonly LocationCoordinate = AddressFieldMetaLocationCoordinate
}

export const AddressFieldMap = new Map([
  [AddressField.UBLExtensions, AddressFieldMetaUBLExtensions],
  [AddressField.ID, AddressFieldMetaID],
  [AddressField.AddressTypeCode, AddressFieldMetaAddressTypeCode],
  [AddressField.AddressFormatCode, AddressFieldMetaAddressFormatCode],
  [AddressField.Postbox, AddressFieldMetaPostbox],
  [AddressField.Floor, AddressFieldMetaFloor],
  [AddressField.Room, AddressFieldMetaRoom],
  [AddressField.StreetName, AddressFieldMetaStreetName],
  [AddressField.AdditionalStreetName, AddressFieldMetaAdditionalStreetName],
  [AddressField.BlockName, AddressFieldMetaBlockName],
  [AddressField.BuildingName, AddressFieldMetaBuildingName],
  [AddressField.BuildingNumber, AddressFieldMetaBuildingNumber],
  [AddressField.Description, AddressFieldMetaDescription],
  [AddressField.InhouseMail, AddressFieldMetaInhouseMail],
  [AddressField.Department, AddressFieldMetaDepartment],
  [AddressField.MarkAttention, AddressFieldMetaMarkAttention],
  [AddressField.MarkCare, AddressFieldMetaMarkCare],
  [AddressField.PlotIdentification, AddressFieldMetaPlotIdentification],
  [AddressField.CitySubdivisionName, AddressFieldMetaCitySubdivisionName],
  [AddressField.CityName, AddressFieldMetaCityName],
  [AddressField.PostalZone, AddressFieldMetaPostalZone],
  [AddressField.CountrySubentity, AddressFieldMetaCountrySubentity],
  [AddressField.CountrySubentityCode, AddressFieldMetaCountrySubentityCode],
  [AddressField.Region, AddressFieldMetaRegion],
  [AddressField.District, AddressFieldMetaDistrict],
  [AddressField.TimezoneOffset, AddressFieldMetaTimezoneOffset],
  [AddressField.AddressLine, AddressFieldMetaAddressLine],
  [AddressField.Country, AddressFieldMetaCountry],
  [AddressField.LocationCoordinate, AddressFieldMetaLocationCoordinate]
])

export const AddressType: Type<AddressField> = {
  name: 'Address',
  label: 'Address',
  module: TypeModule.cac,
  definition: 'A class to define common information related to an address.',
  fields: AddressFieldMap,
}
