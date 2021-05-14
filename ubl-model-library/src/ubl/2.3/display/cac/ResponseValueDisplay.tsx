import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ResponseValue
  meta: FieldMeta<T>
}

export default function ResponseValueDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ResponseValue ubl-ResponseValueType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ResponseValue ubl-UBLExtensions"
          meta={ResponseValueFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ResponseValueFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Identifier ubl-ID"
          meta={ResponseValueFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ResponseValueFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Text ubl-Description"
          meta={ResponseValueFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ResponseValueFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Text ubl-Response"
          meta={ResponseValueFieldMeta.Response} 
          value={value.Response}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Response Text"
              value={itemValue}
              meta={ResponseValueFieldMeta.Response}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Amount ubl-ResponseAmount"
          meta={ResponseValueFieldMeta.ResponseAmount} 
          value={value.ResponseAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Response Amount"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-BinaryObject ubl-ResponseBinaryObject"
          meta={ResponseValueFieldMeta.ResponseBinaryObject} 
          value={value.ResponseBinaryObject}
          itemDisplay={ (itemValue: BinaryObject, key: string | number) =>
            <BinaryObjectDisplay
              key={key}
              label="Response Binary Object"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseBinaryObject}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Code ubl-ResponseCode"
          meta={ResponseValueFieldMeta.ResponseCode} 
          value={value.ResponseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Response Code"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Date ubl-ResponseDate"
          meta={ResponseValueFieldMeta.ResponseDate} 
          value={value.ResponseDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Response Date"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Identifier ubl-ResponseID"
          meta={ResponseValueFieldMeta.ResponseID} 
          value={value.ResponseID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Response Identifier"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Indicator ubl-ResponseIndicator"
          meta={ResponseValueFieldMeta.ResponseIndicator} 
          value={value.ResponseIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Response Indicator"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Measure ubl-ResponseMeasure"
          meta={ResponseValueFieldMeta.ResponseMeasure} 
          value={value.ResponseMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Response Measure"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Numeric ubl-ResponseNumeric"
          meta={ResponseValueFieldMeta.ResponseNumeric} 
          value={value.ResponseNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Response Numeric"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Quantity ubl-ResponseQuantity"
          meta={ResponseValueFieldMeta.ResponseQuantity} 
          value={value.ResponseQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Response Quantity"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Time ubl-ResponseTime"
          meta={ResponseValueFieldMeta.ResponseTime} 
          value={value.ResponseTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Response Time"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ResponseValue ubl-Identifier ubl-ResponseURI"
          meta={ResponseValueFieldMeta.ResponseURI} 
          value={value.ResponseURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Response URI"
              value={itemValue}
              meta={ResponseValueFieldMeta.ResponseURI}
            />
          }
        />
        </div>
    </div>
  )
}
