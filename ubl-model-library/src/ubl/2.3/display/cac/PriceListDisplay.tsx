import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PriceList
  meta: FieldMeta<T>
}

export default function PriceListDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PriceList ubl-PriceListType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PriceList ubl-UBLExtensions"
          meta={PriceListFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PriceListFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriceList ubl-Identifier ubl-ID"
          meta={PriceListFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PriceListFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriceList ubl-Code ubl-StatusCode"
          meta={PriceListFieldMeta.StatusCode} 
          value={value.StatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Status Code"
              value={itemValue}
              meta={PriceListFieldMeta.StatusCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PriceList ubl-Period ubl-ValidityPeriod"
          meta={PriceListFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={PriceListFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PriceList ubl-PreviousPriceList"
          meta={PriceListFieldMeta.PreviousPriceList} 
          value={value.PreviousPriceList}
          itemDisplay={ (itemValue: PriceList, key: string | number) =>
            <PriceListDisplay
              key={key}
              label="Previous Price List"
              value={itemValue}
              meta={PriceListFieldMeta.PreviousPriceList}
            />
          }
        />
        </div>
    </div>
  )
}
