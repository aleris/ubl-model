import { FieldMeta } from '../../FieldMeta'

export enum AddressField {
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

export const AddressFieldMetaID = new FieldMeta<AddressField>(
  AddressField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this address within an agreed scheme of address identifiers.',
  '0..1',
  'DetailsKey',
  undefined
)

export const AddressFieldMetaAddressTypeCode = new FieldMeta<AddressField>(
  AddressField.AddressTypeCode,
  'AddressTypeCode',
  'Address Type Code',
  'Code',
  'A mutually agreed code signifying the type of this address.',
  '0..1',
  undefined,
  undefined
)

export const AddressFieldMetaAddressFormatCode = new FieldMeta<AddressField>(
  AddressField.AddressFormatCode,
  'AddressFormatCode',
  'Address Format Code',
  'Code',
  'A mutually agreed code signifying the format of this address.',
  '0..1',
  undefined,
  undefined
)

export const AddressFieldMetaPostbox = new FieldMeta<AddressField>(
  AddressField.Postbox,
  'Postbox',
  'Postbox',
  'Text',
  'A post office box number registered for postal delivery by a postal service provider.',
  '0..1',
  'PostBox, PO Box',
  '123'
)

export const AddressFieldMetaFloor = new FieldMeta<AddressField>(
  AddressField.Floor,
  'Floor',
  'Floor',
  'Text',
  'An identifiable floor of a building.',
  '0..1',
  'SubPremiseNumber',
  '30'
)

export const AddressFieldMetaRoom = new FieldMeta<AddressField>(
  AddressField.Room,
  'Room',
  'Room',
  'Text',
  'An identifiable room, suite, or apartment of a building.',
  '0..1',
  'SubPremiseNumber',
  'Reception'
)

export const AddressFieldMetaStreetName = new FieldMeta<AddressField>(
  AddressField.StreetName,
  'StreetName',
  'Street Name',
  'Text',
  'The name of the street, road, avenue, way, etc. to which the number of the building is attached.',
  '0..1',
  'Thoroughfare',
  'Kwun Tong Road'
)

export const AddressFieldMetaAdditionalStreetName = new FieldMeta<AddressField>(
  AddressField.AdditionalStreetName,
  'AdditionalStreetName',
  'Street Name',
  'Text',
  'An additional street name used to further clarify the address.',
  '0..1',
  'Thoroughfare',
  'Cnr Aberdeen Road'
)

export const AddressFieldMetaBlockName = new FieldMeta<AddressField>(
  AddressField.BlockName,
  'BlockName',
  'Block Name',
  'Text',
  'The name of the block (an area surrounded by streets and usually containing several buildings) in which this address is located.',
  '0..1',
  undefined,
  'Seabird'
)

export const AddressFieldMetaBuildingName = new FieldMeta<AddressField>(
  AddressField.BuildingName,
  'BuildingName',
  'Building Name',
  'Text',
  'The name of a building.',
  '0..1',
  'BuildingName',
  'Plot 421'
)

export const AddressFieldMetaBuildingNumber = new FieldMeta<AddressField>(
  AddressField.BuildingNumber,
  'BuildingNumber',
  'Building Number',
  'Text',
  'The number of a building within the street.',
  '0..1',
  'PremiseNumber',
  '388'
)

export const AddressFieldMetaInhouseMail = new FieldMeta<AddressField>(
  AddressField.InhouseMail,
  'InhouseMail',
  'Mail',
  'Text',
  'The specific identifable location within a building where mail is delivered.',
  '0..1',
  'MailStop',
  undefined
)

export const AddressFieldMetaDepartment = new FieldMeta<AddressField>(
  AddressField.Department,
  'Department',
  'Department',
  'Text',
  'The department of the addressee.',
  '0..1',
  'Department',
  'Accounts Payable'
)

export const AddressFieldMetaMarkAttention = new FieldMeta<AddressField>(
  AddressField.MarkAttention,
  'MarkAttention',
  'Mark Attention',
  'Text',
  'The name, expressed as text, of a person or department in an organization to whose attention incoming mail is directed; corresponds to the printed forms "for the attention of", "FAO", and ATTN:".',
  '0..1',
  undefined,
  undefined
)

export const AddressFieldMetaMarkCare = new FieldMeta<AddressField>(
  AddressField.MarkCare,
  'MarkCare',
  'Mark Care',
  'Text',
  'The name, expressed as text, of a person or organization at this address into whose care incoming mail is entrusted; corresponds to the printed forms "care of" and "c/o".',
  '0..1',
  undefined,
  undefined
)

export const AddressFieldMetaPlotIdentification = new FieldMeta<AddressField>(
  AddressField.PlotIdentification,
  'PlotIdentification',
  'Plot Identification',
  'Text',
  'An identifier (e.g., a parcel number) for the piece of land associated with this address.',
  '0..1',
  undefined,
  undefined
)

export const AddressFieldMetaCitySubdivisionName = new FieldMeta<AddressField>(
  AddressField.CitySubdivisionName,
  'CitySubdivisionName',
  'City Subdivision Name',
  'Text',
  'The name of the subdivision of a city, town, or village in which this address is located, such as the name of its district or borough.',
  '0..1',
  undefined,
  undefined
)

export const AddressFieldMetaCityName = new FieldMeta<AddressField>(
  AddressField.CityName,
  'CityName',
  'City Name',
  'Text',
  'The name of a city, town, or village.',
  '0..1',
  'LocalityName',
  'Hong Kong'
)

export const AddressFieldMetaPostalZone = new FieldMeta<AddressField>(
  AddressField.PostalZone,
  'PostalZone',
  'Zone',
  'Text',
  'The postal identifier for this address according to the relevant national postal service, such as a ZIP code or Post Code.',
  '0..1',
  'PostalCodeNumber',
  'SW11 4EW 2500 GG'
)

export const AddressFieldMetaCountrySubentity = new FieldMeta<AddressField>(
  AddressField.CountrySubentity,
  'CountrySubentity',
  'Country Subentity',
  'Text',
  'The political or administrative division of a country in which this address is located, such as the name of its county, province, or state, expressed as text.',
  '0..1',
  'AdministrativeArea, State, Country, Shire, Canton',
  'Florida , Tamilnadu'
)

export const AddressFieldMetaCountrySubentityCode = new FieldMeta<AddressField>(
  AddressField.CountrySubentityCode,
  'CountrySubentityCode',
  'Country Subentity Code',
  'Code',
  'The political or administrative division of a country in which this address is located, such as a county, province, or state, expressed as a code (typically nationally agreed).',
  '0..1',
  'AdministrativeAreaCode, State Code',
  undefined
)

export const AddressFieldMetaRegion = new FieldMeta<AddressField>(
  AddressField.Region,
  'Region',
  'Region',
  'Text',
  'The recognized geographic or economic region or group of countries in which this address is located.',
  '0..1',
  'LocalityName, Economic Zone',
  'European Union'
)

export const AddressFieldMetaDistrict = new FieldMeta<AddressField>(
  AddressField.District,
  'District',
  'District',
  'Text',
  'The district or geographical division of a country or region in which this address is located.',
  '0..1',
  'LocalityName, Area',
  'East Coast'
)

export const AddressFieldMetaTimezoneOffset = new FieldMeta<AddressField>(
  AddressField.TimezoneOffset,
  'TimezoneOffset',
  'Timezone Offset',
  'Text',
  'The time zone in which this address is located (as an offset from Universal Coordinated Time (UTC)) at the time of exchange.',
  '0..1',
  undefined,
  '+8:00 -3:00'
)

export const AddressFieldMetaAddressLine = new FieldMeta<AddressField>(
  AddressField.AddressLine,
  'AddressLine',
  'Address Line',
  'AddressLine',
  'An unstructured address line.',
  '0..n',
  undefined,
  undefined
)

export const AddressFieldMetaCountry = new FieldMeta<AddressField>(
  AddressField.Country,
  'Country',
  'Country',
  'Country',
  'The country in which this address is situated.',
  '0..1',
  undefined,
  undefined
)

export const AddressFieldMetaLocationCoordinate = new FieldMeta<AddressField>(
  AddressField.LocationCoordinate,
  'LocationCoordinate',
  'Location Coordinate',
  'LocationCoordinate',
  'The geographical coordinates of this address.',
  '0..n',
  undefined,
  undefined
)

export class AddressFieldMeta {
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
