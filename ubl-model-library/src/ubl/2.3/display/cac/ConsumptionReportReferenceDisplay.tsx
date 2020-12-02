import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionReportReference } from  '../../model/cac/ConsumptionReportReference'
import { ConsumptionReportReferenceFieldMeta } from  '../../meta/cac/ConsumptionReportReferenceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ConsumptionReportReference
  meta: FieldMeta<T>
}

export default function ConsumptionReportReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsumptionReportReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsumptionReportReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionReportID} 
          value={value.ConsumptionReportID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsumptionReportReferenceFieldMeta.ConsumptionReportID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionType} 
          value={value.ConsumptionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionReportReferenceFieldMeta.ConsumptionType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionTypeCode} 
          value={value.ConsumptionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionReportReferenceFieldMeta.ConsumptionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportReferenceFieldMeta.TotalConsumedQuantity} 
          value={value.TotalConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionReportReferenceFieldMeta.TotalConsumedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportReferenceFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ConsumptionReportReferenceFieldMeta.Period} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
