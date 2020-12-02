import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ResponseValue
  meta: FieldMeta<T>
}

export default function ResponseValueDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ResponseValueFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ResponseValueFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ResponseValueFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ResponseValueFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.Response} 
          value={value.Response}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ResponseValueFieldMeta.Response} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseAmount} 
          value={value.ResponseAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ResponseValueFieldMeta.ResponseAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseBinaryObject} 
          value={value.ResponseBinaryObject}
          itemDisplay={ (itemValue: BinaryObject, key: string | number) =>
            <BinaryObjectDisplay key={key} meta={ResponseValueFieldMeta.ResponseBinaryObject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseCode} 
          value={value.ResponseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ResponseValueFieldMeta.ResponseCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseDate} 
          value={value.ResponseDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ResponseValueFieldMeta.ResponseDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseID} 
          value={value.ResponseID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ResponseValueFieldMeta.ResponseID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseIndicator} 
          value={value.ResponseIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ResponseValueFieldMeta.ResponseIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseMeasure} 
          value={value.ResponseMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ResponseValueFieldMeta.ResponseMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseNumeric} 
          value={value.ResponseNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ResponseValueFieldMeta.ResponseNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseQuantity} 
          value={value.ResponseQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ResponseValueFieldMeta.ResponseQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseTime} 
          value={value.ResponseTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ResponseValueFieldMeta.ResponseTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseValueFieldMeta.ResponseURI} 
          value={value.ResponseURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ResponseValueFieldMeta.ResponseURI} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
