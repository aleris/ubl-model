import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PriceList
  meta: FieldMeta<T>
}

export default function PriceListDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PriceListFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PriceListFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceListFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriceListFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceListFieldMeta.StatusCode} 
          value={value.StatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PriceListFieldMeta.StatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceListFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PriceListFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceListFieldMeta.PreviousPriceList} 
          value={value.PreviousPriceList}
          itemDisplay={ (itemValue: PriceList, key: string | number) =>
            <PriceListDisplay key={key} meta={PriceListFieldMeta.PreviousPriceList} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
