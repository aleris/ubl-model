import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ForecastLine
  meta: FieldMeta<T>
}

export default function ForecastLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ForecastLine ubl-ForecastLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ForecastLine ubl-UBLExtensions"
          meta={ForecastLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ForecastLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastLine ubl-Identifier ubl-ID"
          meta={ForecastLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ForecastLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ForecastLine ubl-Text ubl-Note"
          meta={ForecastLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ForecastLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastLine ubl-Indicator ubl-FrozenDocumentIndicator"
          meta={ForecastLineFieldMeta.FrozenDocumentIndicator} 
          value={value.FrozenDocumentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Frozen Document Indicator"
              value={itemValue}
              meta={ForecastLineFieldMeta.FrozenDocumentIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastLine ubl-Code ubl-ForecastTypeCode"
          meta={ForecastLineFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Type Code"
              value={itemValue}
              meta={ForecastLineFieldMeta.ForecastTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastLine ubl-Period ubl-ForecastPeriod"
          meta={ForecastLineFieldMeta.ForecastPeriod} 
          value={value.ForecastPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Forecast Period"
              value={itemValue}
              meta={ForecastLineFieldMeta.ForecastPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastLine ubl-SalesItem"
          meta={ForecastLineFieldMeta.SalesItem} 
          value={value.SalesItem}
          itemDisplay={ (itemValue: SalesItem, key: string | number) =>
            <SalesItemDisplay
              key={key}
              label="Sales Item"
              value={itemValue}
              meta={ForecastLineFieldMeta.SalesItem}
            />
          }
        />
        </div>
    </div>
  )
}
