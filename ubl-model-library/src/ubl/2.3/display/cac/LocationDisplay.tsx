import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Location
  meta: FieldMeta<T>
}

export default function LocationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LocationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LocationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LocationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LocationFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.Conditions} 
          value={value.Conditions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LocationFieldMeta.Conditions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.CountrySubentity} 
          value={value.CountrySubentity}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LocationFieldMeta.CountrySubentity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.CountrySubentityCode} 
          value={value.CountrySubentityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LocationFieldMeta.CountrySubentityCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.LocationTypeCode} 
          value={value.LocationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LocationFieldMeta.LocationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.InformationURI} 
          value={value.InformationURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LocationFieldMeta.InformationURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LocationFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={LocationFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={LocationFieldMeta.Address} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.SubsidiaryLocation} 
          value={value.SubsidiaryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={LocationFieldMeta.SubsidiaryLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationFieldMeta.LocationCoordinate} 
          value={value.LocationCoordinate}
          itemDisplay={ (itemValue: LocationCoordinate, key: string | number) =>
            <LocationCoordinateDisplay key={key} meta={LocationFieldMeta.LocationCoordinate} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
