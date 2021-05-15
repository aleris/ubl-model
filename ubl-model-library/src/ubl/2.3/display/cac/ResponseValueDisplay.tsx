import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ResponseValue } from  '../../model/cac/ResponseValue'
import { ResponseValueFieldMeta } from  '../../meta/cac/ResponseValueMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BinaryObjectDisplay from '../cbc/BinaryObjectDisplay'
import { BinaryObject } from '../../model/cbc/BinaryObject'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ResponseValue | undefined
  meta: FieldMeta<T>
}

export default function ResponseValueDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ResponseValue">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ResponseValueFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ResponseValueFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ResponseValueFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ResponseValueFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Response"
            label="Response Text"
            items={value.Response}
            meta={ResponseValueFieldMeta.Response} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Response Text"
                value={itemValue}
                meta={ResponseValueFieldMeta.Response}
              />
            }
          />

          <AmountDisplay
            label="Response Amount"
            value={value.ResponseAmount?.[0]}
            meta={ResponseValueFieldMeta.ResponseAmount}
          />

          <BinaryObjectDisplay
            label="Response Binary Object"
            value={value.ResponseBinaryObject?.[0]}
            meta={ResponseValueFieldMeta.ResponseBinaryObject}
          />

          <CodeDisplay
            label="Response Code"
            value={value.ResponseCode?.[0]}
            meta={ResponseValueFieldMeta.ResponseCode}
          />

          <DateDisplay
            label="Response Date"
            value={value.ResponseDate?.[0]}
            meta={ResponseValueFieldMeta.ResponseDate}
          />

          <IdentifierDisplay
            label="Response Identifier"
            value={value.ResponseID?.[0]}
            meta={ResponseValueFieldMeta.ResponseID}
          />

          <IndicatorDisplay
            label="Response Indicator"
            value={value.ResponseIndicator?.[0]}
            meta={ResponseValueFieldMeta.ResponseIndicator}
          />

          <MeasureDisplay
            label="Response Measure"
            value={value.ResponseMeasure?.[0]}
            meta={ResponseValueFieldMeta.ResponseMeasure}
          />

          <NumericDisplay
            label="Response Numeric"
            value={value.ResponseNumeric?.[0]}
            meta={ResponseValueFieldMeta.ResponseNumeric}
          />

          <QuantityDisplay
            label="Response Quantity"
            value={value.ResponseQuantity?.[0]}
            meta={ResponseValueFieldMeta.ResponseQuantity}
          />

          <TimeDisplay
            label="Response Time"
            value={value.ResponseTime?.[0]}
            meta={ResponseValueFieldMeta.ResponseTime}
          />

          <IdentifierDisplay
            label="Response URI"
            value={value.ResponseURI?.[0]}
            meta={ResponseValueFieldMeta.ResponseURI}
          />
        </div>
    </div>
  )
}
