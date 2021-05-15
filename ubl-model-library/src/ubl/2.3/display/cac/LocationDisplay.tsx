import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Location | undefined
  meta: FieldMeta<T>
}

export default function LocationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Location">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LocationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={LocationFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={LocationFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={LocationFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Conditions"
            label="Conditions"
            items={value.Conditions}
            meta={LocationFieldMeta.Conditions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Conditions"
                value={itemValue}
                meta={LocationFieldMeta.Conditions}
              />
            }
          />

          <TextDisplay
            label="Country Subentity"
            value={value.CountrySubentity?.[0]}
            meta={LocationFieldMeta.CountrySubentity}
          />

          <CodeDisplay
            label="Country Subentity Code"
            value={value.CountrySubentityCode?.[0]}
            meta={LocationFieldMeta.CountrySubentityCode}
          />

          <CodeDisplay
            label="Location Type Code"
            value={value.LocationTypeCode?.[0]}
            meta={LocationFieldMeta.LocationTypeCode}
          />

          <IdentifierDisplay
            label="Information URI"
            value={value.InformationURI?.[0]}
            meta={LocationFieldMeta.InformationURI}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={LocationFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={LocationFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={LocationFieldMeta.ValidityPeriod}
              />
            }
          />

          <AddressDisplay
            label="Address"
            value={value.Address?.[0]}
            meta={LocationFieldMeta.Address}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Location ubl-SubsidiaryLocation"
            label="Subsidiary Location"
            items={value.SubsidiaryLocation}
            meta={LocationFieldMeta.SubsidiaryLocation} 
            itemDisplay={ (itemValue: Location, key: string | number) =>
              <LocationDisplay
                key={key}
                label="Subsidiary Location"
                value={itemValue}
                meta={LocationFieldMeta.SubsidiaryLocation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LocationCoordinate"
            label="Location Coordinate"
            items={value.LocationCoordinate}
            meta={LocationFieldMeta.LocationCoordinate} 
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
