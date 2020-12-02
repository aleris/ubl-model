import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DependentPriceReference
  meta: FieldMeta<T>
}

export default function DependentPriceReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DependentPriceReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DependentPriceReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DependentPriceReferenceFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={DependentPriceReferenceFieldMeta.Percent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DependentPriceReferenceFieldMeta.LocationAddress} 
          value={value.LocationAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={DependentPriceReferenceFieldMeta.LocationAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DependentPriceReferenceFieldMeta.DependentLineReference} 
          value={value.DependentLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={DependentPriceReferenceFieldMeta.DependentLineReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
