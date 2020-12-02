import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemIdentification } from  '../../model/cac/ItemIdentification'
import { ItemIdentificationFieldMeta } from  '../../meta/cac/ItemIdentificationMeta'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PhysicalAttributeDisplay from './PhysicalAttributeDisplay'
import { PhysicalAttribute } from '../../model/cac/PhysicalAttribute'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ItemIdentification
  meta: FieldMeta<T>
}

export default function ItemIdentificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemIdentificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemIdentificationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.ExtendedID} 
          value={value.ExtendedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemIdentificationFieldMeta.ExtendedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.BarcodeSymbologyID} 
          value={value.BarcodeSymbologyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemIdentificationFieldMeta.BarcodeSymbologyID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.IssuerScopeID} 
          value={value.IssuerScopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemIdentificationFieldMeta.IssuerScopeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.PhysicalAttribute} 
          value={value.PhysicalAttribute}
          itemDisplay={ (itemValue: PhysicalAttribute, key: string | number) =>
            <PhysicalAttributeDisplay key={key} meta={ItemIdentificationFieldMeta.PhysicalAttribute} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={ItemIdentificationFieldMeta.MeasurementDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemIdentificationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ItemIdentificationFieldMeta.IssuerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
