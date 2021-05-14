import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DependentPriceReference } from  '../../model/cac/DependentPriceReference'
import { DependentPriceReferenceFieldMeta } from  '../../meta/cac/DependentPriceReferenceMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DependentPriceReference
  meta: FieldMeta<T>
}

export default function DependentPriceReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DependentPriceReference ubl-DependentPriceReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DependentPriceReference ubl-UBLExtensions"
          meta={DependentPriceReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DependentPriceReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DependentPriceReference ubl-Numeric ubl-Percent"
          meta={DependentPriceReferenceFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Percent"
              value={itemValue}
              meta={DependentPriceReferenceFieldMeta.Percent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DependentPriceReference ubl-Address ubl-LocationAddress"
          meta={DependentPriceReferenceFieldMeta.LocationAddress} 
          value={value.LocationAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Location Address"
              value={itemValue}
              meta={DependentPriceReferenceFieldMeta.LocationAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DependentPriceReference ubl-LineReference ubl-DependentLineReference"
          meta={DependentPriceReferenceFieldMeta.DependentLineReference} 
          value={value.DependentLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Dependent Line Reference"
              value={itemValue}
              meta={DependentPriceReferenceFieldMeta.DependentLineReference}
            />
          }
        />
        </div>
    </div>
  )
}
