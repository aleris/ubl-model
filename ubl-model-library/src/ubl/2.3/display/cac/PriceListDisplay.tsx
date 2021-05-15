import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PriceList } from  '../../model/cac/PriceList'
import { PriceListFieldMeta } from  '../../meta/cac/PriceListMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PriceList | undefined
  meta: FieldMeta<T>
}

export default function PriceListDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PriceList">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PriceListFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PriceListFieldMeta.ID}
          />

          <CodeDisplay
            label="Status Code"
            value={value.StatusCode?.[0]}
            meta={PriceListFieldMeta.StatusCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={PriceListFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={PriceListFieldMeta.ValidityPeriod}
              />
            }
          />

          <PriceListDisplay
            label="Previous Price List"
            value={value.PreviousPriceList?.[0]}
            meta={PriceListFieldMeta.PreviousPriceList}
          />
        </div>
    </div>
  )
}
