import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastLine } from  '../../model/cac/ForecastLine'
import { ForecastLineFieldMeta } from  '../../meta/cac/ForecastLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SalesItemDisplay from './SalesItemDisplay'
import { SalesItem } from '../../model/cac/SalesItem'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ForecastLine | undefined
  meta: FieldMeta<T>
}

export default function ForecastLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ForecastLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ForecastLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ForecastLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ForecastLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ForecastLineFieldMeta.Note}
              />
            }
          />

          <IndicatorDisplay
            label="Frozen Document Indicator"
            value={value.FrozenDocumentIndicator?.[0]}
            meta={ForecastLineFieldMeta.FrozenDocumentIndicator}
          />

          <CodeDisplay
            label="Forecast Type Code"
            value={value.ForecastTypeCode?.[0]}
            meta={ForecastLineFieldMeta.ForecastTypeCode}
          />

          <PeriodDisplay
            label="Forecast Period"
            value={value.ForecastPeriod?.[0]}
            meta={ForecastLineFieldMeta.ForecastPeriod}
          />

          <SalesItemDisplay
            label="Sales Item"
            value={value.SalesItem?.[0]}
            meta={ForecastLineFieldMeta.SalesItem}
          />
        </div>
    </div>
  )
}
