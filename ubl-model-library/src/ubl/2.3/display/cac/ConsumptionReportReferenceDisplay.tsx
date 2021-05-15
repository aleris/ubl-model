import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ConsumptionReportReference | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionReportReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ConsumptionReportReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionReportReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Consumption Report Identifier"
            value={value.ConsumptionReportID?.[0]}
            meta={ConsumptionReportReferenceFieldMeta.ConsumptionReportID}
          />

          <TextDisplay
            label="Consumption Type"
            value={value.ConsumptionType?.[0]}
            meta={ConsumptionReportReferenceFieldMeta.ConsumptionType}
          />

          <CodeDisplay
            label="Consumption Type Code"
            value={value.ConsumptionTypeCode?.[0]}
            meta={ConsumptionReportReferenceFieldMeta.ConsumptionTypeCode}
          />

          <QuantityDisplay
            label="Total Consumed Quantity"
            value={value.TotalConsumedQuantity?.[0]}
            meta={ConsumptionReportReferenceFieldMeta.TotalConsumedQuantity}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={ConsumptionReportReferenceFieldMeta.Period}
          />
        </div>
    </div>
  )
}
