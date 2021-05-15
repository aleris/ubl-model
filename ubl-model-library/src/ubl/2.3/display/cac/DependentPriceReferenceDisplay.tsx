import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: DependentPriceReference | undefined
  meta: FieldMeta<T>
}

export default function DependentPriceReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DependentPriceReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DependentPriceReferenceFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Percent"
            value={value.Percent?.[0]}
            meta={DependentPriceReferenceFieldMeta.Percent}
          />

          <AddressDisplay
            label="Location Address"
            value={value.LocationAddress?.[0]}
            meta={DependentPriceReferenceFieldMeta.LocationAddress}
          />

          <LineReferenceDisplay
            label="Dependent Line Reference"
            value={value.DependentLineReference?.[0]}
            meta={DependentPriceReferenceFieldMeta.DependentLineReference}
          />
        </div>
    </div>
  )
}
