import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Address
  meta: FieldMeta<T>
}

export default function AddressDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Address ubl-AddressType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Address ubl-UBLExtensions"
          meta={AddressFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AddressFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Identifier ubl-ID"
          meta={AddressFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={AddressFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Code ubl-AddressTypeCode"
          meta={AddressFieldMeta.AddressTypeCode} 
          value={value.AddressTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Address Type Code"
              value={itemValue}
              meta={AddressFieldMeta.AddressTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Code ubl-AddressFormatCode"
          meta={AddressFieldMeta.AddressFormatCode} 
          value={value.AddressFormatCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Address Format Code"
              value={itemValue}
              meta={AddressFieldMeta.AddressFormatCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-Postbox"
          meta={AddressFieldMeta.Postbox} 
          value={value.Postbox}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Postbox"
              value={itemValue}
              meta={AddressFieldMeta.Postbox}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-Floor"
          meta={AddressFieldMeta.Floor} 
          value={value.Floor}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Floor"
              value={itemValue}
              meta={AddressFieldMeta.Floor}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-Room"
          meta={AddressFieldMeta.Room} 
          value={value.Room}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Room"
              value={itemValue}
              meta={AddressFieldMeta.Room}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-StreetName"
          meta={AddressFieldMeta.StreetName} 
          value={value.StreetName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Street Name"
              value={itemValue}
              meta={AddressFieldMeta.StreetName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-AdditionalStreetName"
          meta={AddressFieldMeta.AdditionalStreetName} 
          value={value.AdditionalStreetName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Additional Street Name"
              value={itemValue}
              meta={AddressFieldMeta.AdditionalStreetName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-BlockName"
          meta={AddressFieldMeta.BlockName} 
          value={value.BlockName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Block Name"
              value={itemValue}
              meta={AddressFieldMeta.BlockName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-BuildingName"
          meta={AddressFieldMeta.BuildingName} 
          value={value.BuildingName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Building Name"
              value={itemValue}
              meta={AddressFieldMeta.BuildingName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-BuildingNumber"
          meta={AddressFieldMeta.BuildingNumber} 
          value={value.BuildingNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Building Number"
              value={itemValue}
              meta={AddressFieldMeta.BuildingNumber}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-Description"
          meta={AddressFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={AddressFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-InhouseMail"
          meta={AddressFieldMeta.InhouseMail} 
          value={value.InhouseMail}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Inhouse Mail"
              value={itemValue}
              meta={AddressFieldMeta.InhouseMail}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-Department"
          meta={AddressFieldMeta.Department} 
          value={value.Department}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Department"
              value={itemValue}
              meta={AddressFieldMeta.Department}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-MarkAttention"
          meta={AddressFieldMeta.MarkAttention} 
          value={value.MarkAttention}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Mark Attention"
              value={itemValue}
              meta={AddressFieldMeta.MarkAttention}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-MarkCare"
          meta={AddressFieldMeta.MarkCare} 
          value={value.MarkCare}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Mark Care"
              value={itemValue}
              meta={AddressFieldMeta.MarkCare}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-PlotIdentification"
          meta={AddressFieldMeta.PlotIdentification} 
          value={value.PlotIdentification}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Plot Identification"
              value={itemValue}
              meta={AddressFieldMeta.PlotIdentification}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-CitySubdivisionName"
          meta={AddressFieldMeta.CitySubdivisionName} 
          value={value.CitySubdivisionName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="City Subdivision Name"
              value={itemValue}
              meta={AddressFieldMeta.CitySubdivisionName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-CityName"
          meta={AddressFieldMeta.CityName} 
          value={value.CityName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="City Name"
              value={itemValue}
              meta={AddressFieldMeta.CityName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-PostalZone"
          meta={AddressFieldMeta.PostalZone} 
          value={value.PostalZone}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Postal Zone"
              value={itemValue}
              meta={AddressFieldMeta.PostalZone}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-CountrySubentity"
          meta={AddressFieldMeta.CountrySubentity} 
          value={value.CountrySubentity}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Country Subentity"
              value={itemValue}
              meta={AddressFieldMeta.CountrySubentity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Code ubl-CountrySubentityCode"
          meta={AddressFieldMeta.CountrySubentityCode} 
          value={value.CountrySubentityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Country Subentity Code"
              value={itemValue}
              meta={AddressFieldMeta.CountrySubentityCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-Region"
          meta={AddressFieldMeta.Region} 
          value={value.Region}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Region"
              value={itemValue}
              meta={AddressFieldMeta.Region}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-District"
          meta={AddressFieldMeta.District} 
          value={value.District}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="District"
              value={itemValue}
              meta={AddressFieldMeta.District}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Address ubl-Text ubl-TimezoneOffset"
          meta={AddressFieldMeta.TimezoneOffset} 
          value={value.TimezoneOffset}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Timezone Offset"
              value={itemValue}
              meta={AddressFieldMeta.TimezoneOffset}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Address ubl-AddressLine"
          meta={AddressFieldMeta.AddressLine} 
          value={value.AddressLine}
          itemDisplay={ (itemValue: AddressLine, key: string | number) =>
            <AddressLineDisplay
              key={key}
              label="Address Line"
              value={itemValue}
              meta={AddressFieldMeta.AddressLine}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Address ubl-Country"
          meta={AddressFieldMeta.Country} 
          value={value.Country}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Country"
              value={itemValue}
              meta={AddressFieldMeta.Country}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Address ubl-LocationCoordinate"
          meta={AddressFieldMeta.LocationCoordinate} 
          value={value.LocationCoordinate}
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
