import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ItemIdentification
  meta: FieldMeta<T>
}

export default function ItemIdentificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemIdentification ubl-ItemIdentificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemIdentification ubl-UBLExtensions"
          meta={ItemIdentificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemIdentification ubl-Identifier ubl-ID"
          meta={ItemIdentificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemIdentification ubl-Identifier ubl-ExtendedID"
          meta={ItemIdentificationFieldMeta.ExtendedID} 
          value={value.ExtendedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Extended Identifier"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.ExtendedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemIdentification ubl-Identifier ubl-BarcodeSymbologyID"
          meta={ItemIdentificationFieldMeta.BarcodeSymbologyID} 
          value={value.BarcodeSymbologyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Barcode Symbology Identifier"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.BarcodeSymbologyID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemIdentification ubl-Identifier ubl-IssuerScopeID"
          meta={ItemIdentificationFieldMeta.IssuerScopeID} 
          value={value.IssuerScopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Issuer Scope Identifier"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.IssuerScopeID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemIdentification ubl-PhysicalAttribute"
          meta={ItemIdentificationFieldMeta.PhysicalAttribute} 
          value={value.PhysicalAttribute}
          itemDisplay={ (itemValue: PhysicalAttribute, key: string | number) =>
            <PhysicalAttributeDisplay
              key={key}
              label="Physical Attribute"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.PhysicalAttribute}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemIdentification ubl-Dimension ubl-MeasurementDimension"
          meta={ItemIdentificationFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Measurement Dimension"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.MeasurementDimension}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemIdentification ubl-Party ubl-IssuerParty"
          meta={ItemIdentificationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={ItemIdentificationFieldMeta.IssuerParty}
            />
          }
        />
        </div>
    </div>
  )
}
