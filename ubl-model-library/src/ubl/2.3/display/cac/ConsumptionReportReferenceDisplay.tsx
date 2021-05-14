import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: ConsumptionReportReference
  meta: FieldMeta<T>
}

export default function ConsumptionReportReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ConsumptionReportReference ubl-ConsumptionReportReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ConsumptionReportReference ubl-UBLExtensions"
          meta={ConsumptionReportReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionReportReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReportReference ubl-Identifier ubl-ConsumptionReportID"
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionReportID} 
          value={value.ConsumptionReportID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Consumption Report Identifier"
              value={itemValue}
              meta={ConsumptionReportReferenceFieldMeta.ConsumptionReportID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReportReference ubl-Text ubl-ConsumptionType"
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionType} 
          value={value.ConsumptionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Consumption Type"
              value={itemValue}
              meta={ConsumptionReportReferenceFieldMeta.ConsumptionType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReportReference ubl-Code ubl-ConsumptionTypeCode"
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionTypeCode} 
          value={value.ConsumptionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Consumption Type Code"
              value={itemValue}
              meta={ConsumptionReportReferenceFieldMeta.ConsumptionTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReportReference ubl-Quantity ubl-TotalConsumedQuantity"
          meta={ConsumptionReportReferenceFieldMeta.TotalConsumedQuantity} 
          value={value.TotalConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Consumed Quantity"
              value={itemValue}
              meta={ConsumptionReportReferenceFieldMeta.TotalConsumedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionReportReference ubl-Period"
          meta={ConsumptionReportReferenceFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={ConsumptionReportReferenceFieldMeta.Period}
            />
          }
        />
        </div>
    </div>
  )
}
