import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: ItemIdentification | undefined
  meta: FieldMeta<T>
}

export default function ItemIdentificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemIdentification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemIdentificationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ItemIdentificationFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Extended Identifier"
            value={value.ExtendedID?.[0]}
            meta={ItemIdentificationFieldMeta.ExtendedID}
          />

          <IdentifierDisplay
            label="Barcode Symbology Identifier"
            value={value.BarcodeSymbologyID?.[0]}
            meta={ItemIdentificationFieldMeta.BarcodeSymbologyID}
          />

          <IdentifierDisplay
            label="Issuer Scope Identifier"
            value={value.IssuerScopeID?.[0]}
            meta={ItemIdentificationFieldMeta.IssuerScopeID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PhysicalAttribute"
            label="Physical Attribute"
            items={value.PhysicalAttribute}
            meta={ItemIdentificationFieldMeta.PhysicalAttribute} 
            itemDisplay={ (itemValue: PhysicalAttribute, key: string | number) =>
              <PhysicalAttributeDisplay
                key={key}
                label="Physical Attribute"
                value={itemValue}
                meta={ItemIdentificationFieldMeta.PhysicalAttribute}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension ubl-MeasurementDimension"
            label="Measurement Dimension"
            items={value.MeasurementDimension}
            meta={ItemIdentificationFieldMeta.MeasurementDimension} 
            itemDisplay={ (itemValue: Dimension, key: string | number) =>
              <DimensionDisplay
                key={key}
                label="Measurement Dimension"
                value={itemValue}
                meta={ItemIdentificationFieldMeta.MeasurementDimension}
              />
            }
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={ItemIdentificationFieldMeta.IssuerParty}
          />
        </div>
    </div>
  )
}
