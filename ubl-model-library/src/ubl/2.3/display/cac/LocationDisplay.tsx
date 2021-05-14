import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Location } from  '../../model/cac/Location'
import { LocationFieldMeta } from  '../../meta/cac/LocationMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationCoordinateDisplay from './LocationCoordinateDisplay'
import { LocationCoordinate } from '../../model/cac/LocationCoordinate'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Location
  meta: FieldMeta<T>
}

export default function LocationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Location ubl-LocationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Location ubl-UBLExtensions"
          meta={LocationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LocationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Location ubl-Identifier ubl-ID"
          meta={LocationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={LocationFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Location ubl-Text ubl-Description"
          meta={LocationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={LocationFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Location ubl-Text ubl-Conditions"
          meta={LocationFieldMeta.Conditions} 
          value={value.Conditions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Conditions"
              value={itemValue}
              meta={LocationFieldMeta.Conditions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Location ubl-Text ubl-CountrySubentity"
          meta={LocationFieldMeta.CountrySubentity} 
          value={value.CountrySubentity}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Country Subentity"
              value={itemValue}
              meta={LocationFieldMeta.CountrySubentity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Location ubl-Code ubl-CountrySubentityCode"
          meta={LocationFieldMeta.CountrySubentityCode} 
          value={value.CountrySubentityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Country Subentity Code"
              value={itemValue}
              meta={LocationFieldMeta.CountrySubentityCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Location ubl-Code ubl-LocationTypeCode"
          meta={LocationFieldMeta.LocationTypeCode} 
          value={value.LocationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Location Type Code"
              value={itemValue}
              meta={LocationFieldMeta.LocationTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Location ubl-Identifier ubl-InformationURI"
          meta={LocationFieldMeta.InformationURI} 
          value={value.InformationURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Information URI"
              value={itemValue}
              meta={LocationFieldMeta.InformationURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Location ubl-Text ubl-Name"
          meta={LocationFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={LocationFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Location ubl-Period ubl-ValidityPeriod"
          meta={LocationFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={LocationFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Location ubl-Address"
          meta={LocationFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Address"
              value={itemValue}
              meta={LocationFieldMeta.Address}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Location ubl-SubsidiaryLocation"
          meta={LocationFieldMeta.SubsidiaryLocation} 
          value={value.SubsidiaryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Subsidiary Location"
              value={itemValue}
              meta={LocationFieldMeta.SubsidiaryLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Location ubl-LocationCoordinate"
          meta={LocationFieldMeta.LocationCoordinate} 
          value={value.LocationCoordinate}
          itemDisplay={ (itemValue: LocationCoordinate, key: string | number) =>
            <LocationCoordinateDisplay
              key={key}
              label="Location Coordinate"
              value={itemValue}
              meta={LocationFieldMeta.LocationCoordinate}
            />
          }
        />
        </div>
    </div>
  )
}
