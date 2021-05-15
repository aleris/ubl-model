import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Address } from  '../../model/cac/Address'
import { AddressFieldMeta } from  '../../meta/cac/AddressMeta'
import AddressLineDisplay from './AddressLineDisplay'
import { AddressLine } from '../../model/cac/AddressLine'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationCoordinateDisplay from './LocationCoordinateDisplay'
import { LocationCoordinate } from '../../model/cac/LocationCoordinate'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Address | undefined
  meta: FieldMeta<T>
}

export default function AddressDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Address">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AddressFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={AddressFieldMeta.ID}
          />

          <CodeDisplay
            label="Address Type Code"
            value={value.AddressTypeCode?.[0]}
            meta={AddressFieldMeta.AddressTypeCode}
          />

          <CodeDisplay
            label="Address Format Code"
            value={value.AddressFormatCode?.[0]}
            meta={AddressFieldMeta.AddressFormatCode}
          />

          <TextDisplay
            label="Postbox"
            value={value.Postbox?.[0]}
            meta={AddressFieldMeta.Postbox}
          />

          <TextDisplay
            label="Floor"
            value={value.Floor?.[0]}
            meta={AddressFieldMeta.Floor}
          />

          <TextDisplay
            label="Room"
            value={value.Room?.[0]}
            meta={AddressFieldMeta.Room}
          />

          <TextDisplay
            label="Street Name"
            value={value.StreetName?.[0]}
            meta={AddressFieldMeta.StreetName}
          />

          <TextDisplay
            label="Additional Street Name"
            value={value.AdditionalStreetName?.[0]}
            meta={AddressFieldMeta.AdditionalStreetName}
          />

          <TextDisplay
            label="Block Name"
            value={value.BlockName?.[0]}
            meta={AddressFieldMeta.BlockName}
          />

          <TextDisplay
            label="Building Name"
            value={value.BuildingName?.[0]}
            meta={AddressFieldMeta.BuildingName}
          />

          <TextDisplay
            label="Building Number"
            value={value.BuildingNumber?.[0]}
            meta={AddressFieldMeta.BuildingNumber}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={AddressFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={AddressFieldMeta.Description}
              />
            }
          />

          <TextDisplay
            label="Inhouse Mail"
            value={value.InhouseMail?.[0]}
            meta={AddressFieldMeta.InhouseMail}
          />

          <TextDisplay
            label="Department"
            value={value.Department?.[0]}
            meta={AddressFieldMeta.Department}
          />

          <TextDisplay
            label="Mark Attention"
            value={value.MarkAttention?.[0]}
            meta={AddressFieldMeta.MarkAttention}
          />

          <TextDisplay
            label="Mark Care"
            value={value.MarkCare?.[0]}
            meta={AddressFieldMeta.MarkCare}
          />

          <TextDisplay
            label="Plot Identification"
            value={value.PlotIdentification?.[0]}
            meta={AddressFieldMeta.PlotIdentification}
          />

          <TextDisplay
            label="City Subdivision Name"
            value={value.CitySubdivisionName?.[0]}
            meta={AddressFieldMeta.CitySubdivisionName}
          />

          <TextDisplay
            label="City Name"
            value={value.CityName?.[0]}
            meta={AddressFieldMeta.CityName}
          />

          <TextDisplay
            label="Postal Zone"
            value={value.PostalZone?.[0]}
            meta={AddressFieldMeta.PostalZone}
          />

          <TextDisplay
            label="Country Subentity"
            value={value.CountrySubentity?.[0]}
            meta={AddressFieldMeta.CountrySubentity}
          />

          <CodeDisplay
            label="Country Subentity Code"
            value={value.CountrySubentityCode?.[0]}
            meta={AddressFieldMeta.CountrySubentityCode}
          />

          <TextDisplay
            label="Region"
            value={value.Region?.[0]}
            meta={AddressFieldMeta.Region}
          />

          <TextDisplay
            label="District"
            value={value.District?.[0]}
            meta={AddressFieldMeta.District}
          />

          <TextDisplay
            label="Timezone Offset"
            value={value.TimezoneOffset?.[0]}
            meta={AddressFieldMeta.TimezoneOffset}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AddressLine"
            label="Address Line"
            items={value.AddressLine}
            meta={AddressFieldMeta.AddressLine} 
            itemDisplay={ (itemValue: AddressLine, key: string | number) =>
              <AddressLineDisplay
                key={key}
                label="Address Line"
                value={itemValue}
                meta={AddressFieldMeta.AddressLine}
              />
            }
          />

          <CountryDisplay
            label="Country"
            value={value.Country?.[0]}
            meta={AddressFieldMeta.Country}
          />

          <ElementListDisplay
            className="ubl-cac ubl-LocationCoordinate"
            label="Location Coordinate"
            items={value.LocationCoordinate}
            meta={AddressFieldMeta.LocationCoordinate} 
            itemDisplay={ (itemValue: LocationCoordinate, key: string | number) =>
              <LocationCoordinateDisplay
                key={key}
                label="Location Coordinate"
                value={itemValue}
                meta={AddressFieldMeta.LocationCoordinate}
              />
            }
          />
        </div>
    </div>
  )
}
