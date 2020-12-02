import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Address
  meta: FieldMeta<T>
}

export default function AddressDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AddressFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AddressFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AddressFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.AddressTypeCode} 
          value={value.AddressTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AddressFieldMeta.AddressTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.AddressFormatCode} 
          value={value.AddressFormatCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AddressFieldMeta.AddressFormatCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.Postbox} 
          value={value.Postbox}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.Postbox} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.Floor} 
          value={value.Floor}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.Floor} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.Room} 
          value={value.Room}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.Room} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.StreetName} 
          value={value.StreetName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.StreetName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.AdditionalStreetName} 
          value={value.AdditionalStreetName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.AdditionalStreetName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.BlockName} 
          value={value.BlockName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.BlockName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.BuildingName} 
          value={value.BuildingName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.BuildingName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.BuildingNumber} 
          value={value.BuildingNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.BuildingNumber} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.InhouseMail} 
          value={value.InhouseMail}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.InhouseMail} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.Department} 
          value={value.Department}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.Department} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.MarkAttention} 
          value={value.MarkAttention}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.MarkAttention} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.MarkCare} 
          value={value.MarkCare}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.MarkCare} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.PlotIdentification} 
          value={value.PlotIdentification}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.PlotIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.CitySubdivisionName} 
          value={value.CitySubdivisionName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.CitySubdivisionName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.CityName} 
          value={value.CityName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.CityName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.PostalZone} 
          value={value.PostalZone}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.PostalZone} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.CountrySubentity} 
          value={value.CountrySubentity}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.CountrySubentity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.CountrySubentityCode} 
          value={value.CountrySubentityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AddressFieldMeta.CountrySubentityCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.Region} 
          value={value.Region}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.Region} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.District} 
          value={value.District}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.District} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.TimezoneOffset} 
          value={value.TimezoneOffset}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AddressFieldMeta.TimezoneOffset} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.AddressLine} 
          value={value.AddressLine}
          itemDisplay={ (itemValue: AddressLine, key: string | number) =>
            <AddressLineDisplay key={key} meta={AddressFieldMeta.AddressLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.Country} 
          value={value.Country}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={AddressFieldMeta.Country} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AddressFieldMeta.LocationCoordinate} 
          value={value.LocationCoordinate}
          itemDisplay={ (itemValue: LocationCoordinate, key: string | number) =>
            <LocationCoordinateDisplay key={key} meta={AddressFieldMeta.LocationCoordinate} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
