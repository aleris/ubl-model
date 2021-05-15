import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionReport } from  '../../model/cac/ConsumptionReport'
import { ConsumptionReportFieldMeta } from  '../../meta/cac/ConsumptionReportMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ConsumptionHistoryDisplay from './ConsumptionHistoryDisplay'
import { ConsumptionHistory } from '../../model/cac/ConsumptionHistory'
import ConsumptionReportReferenceDisplay from './ConsumptionReportReferenceDisplay'
import { ConsumptionReportReference } from '../../model/cac/ConsumptionReportReference'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
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
  value: ConsumptionReport | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionReportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ConsumptionReport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionReportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ConsumptionReportFieldMeta.ID}
          />

          <TextDisplay
            label="Consumption Type"
            value={value.ConsumptionType?.[0]}
            meta={ConsumptionReportFieldMeta.ConsumptionType}
          />

          <CodeDisplay
            label="Consumption Type Code"
            value={value.ConsumptionTypeCode?.[0]}
            meta={ConsumptionReportFieldMeta.ConsumptionTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ConsumptionReportFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ConsumptionReportFieldMeta.Description}
              />
            }
          />

          <QuantityDisplay
            label="Total Consumed Quantity"
            value={value.TotalConsumedQuantity?.[0]}
            meta={ConsumptionReportFieldMeta.TotalConsumedQuantity}
          />

          <QuantityDisplay
            label="Basic Consumed Quantity"
            value={value.BasicConsumedQuantity?.[0]}
            meta={ConsumptionReportFieldMeta.BasicConsumedQuantity}
          />

          <NumericDisplay
            label="Resident Occupants Numeric"
            value={value.ResidentOccupantsNumeric?.[0]}
            meta={ConsumptionReportFieldMeta.ResidentOccupantsNumeric}
          />

          <CodeDisplay
            label="Consumers Energy Level Code"
            value={value.ConsumersEnergyLevelCode?.[0]}
            meta={ConsumptionReportFieldMeta.ConsumersEnergyLevelCode}
          />

          <TextDisplay
            label="Consumers Energy Level"
            value={value.ConsumersEnergyLevel?.[0]}
            meta={ConsumptionReportFieldMeta.ConsumersEnergyLevel}
          />

          <TextDisplay
            label="Residence Type"
            value={value.ResidenceType?.[0]}
            meta={ConsumptionReportFieldMeta.ResidenceType}
          />

          <CodeDisplay
            label="Residence Type Code"
            value={value.ResidenceTypeCode?.[0]}
            meta={ConsumptionReportFieldMeta.ResidenceTypeCode}
          />

          <TextDisplay
            label="Heating Type"
            value={value.HeatingType?.[0]}
            meta={ConsumptionReportFieldMeta.HeatingType}
          />

          <CodeDisplay
            label="Heating Type Code"
            value={value.HeatingTypeCode?.[0]}
            meta={ConsumptionReportFieldMeta.HeatingTypeCode}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={ConsumptionReportFieldMeta.Period}
          />

          <DocumentReferenceDisplay
            label="Guidance Document Reference"
            value={value.GuidanceDocumentReference?.[0]}
            meta={ConsumptionReportFieldMeta.GuidanceDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Document Reference"
            value={value.DocumentReference?.[0]}
            meta={ConsumptionReportFieldMeta.DocumentReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ConsumptionReportReference"
            label="Consumption Report Reference"
            items={value.ConsumptionReportReference}
            meta={ConsumptionReportFieldMeta.ConsumptionReportReference} 
            itemDisplay={ (itemValue: ConsumptionReportReference, key: string | number) =>
              <ConsumptionReportReferenceDisplay
                key={key}
                label="Consumption Report Reference"
                value={itemValue}
                meta={ConsumptionReportFieldMeta.ConsumptionReportReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ConsumptionHistory"
            label="Consumption History"
            items={value.ConsumptionHistory}
            meta={ConsumptionReportFieldMeta.ConsumptionHistory} 
            itemDisplay={ (itemValue: ConsumptionHistory, key: string | number) =>
              <ConsumptionHistoryDisplay
                key={key}
                label="Consumption History"
                value={itemValue}
                meta={ConsumptionReportFieldMeta.ConsumptionHistory}
              />
            }
          />
        </div>
    </div>
  )
}
