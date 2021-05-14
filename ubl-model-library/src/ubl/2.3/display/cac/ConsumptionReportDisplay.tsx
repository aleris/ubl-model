import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ConsumptionReport
  meta: FieldMeta<T>
}

export default function ConsumptionReportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ConsumptionReport ubl-ConsumptionReportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ConsumptionReport ubl-UBLExtensions"
          meta={ConsumptionReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Identifier ubl-ID"
          meta={ConsumptionReportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Text ubl-ConsumptionType"
          meta={ConsumptionReportFieldMeta.ConsumptionType} 
          value={value.ConsumptionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Consumption Type"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ConsumptionType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Code ubl-ConsumptionTypeCode"
          meta={ConsumptionReportFieldMeta.ConsumptionTypeCode} 
          value={value.ConsumptionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Consumption Type Code"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ConsumptionTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Text ubl-Description"
          meta={ConsumptionReportFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Quantity ubl-TotalConsumedQuantity"
          meta={ConsumptionReportFieldMeta.TotalConsumedQuantity} 
          value={value.TotalConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Consumed Quantity"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.TotalConsumedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Quantity ubl-BasicConsumedQuantity"
          meta={ConsumptionReportFieldMeta.BasicConsumedQuantity} 
          value={value.BasicConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Basic Consumed Quantity"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.BasicConsumedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Numeric ubl-ResidentOccupantsNumeric"
          meta={ConsumptionReportFieldMeta.ResidentOccupantsNumeric} 
          value={value.ResidentOccupantsNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Resident Occupants Numeric"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ResidentOccupantsNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Code ubl-ConsumersEnergyLevelCode"
          meta={ConsumptionReportFieldMeta.ConsumersEnergyLevelCode} 
          value={value.ConsumersEnergyLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Consumers Energy Level Code"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ConsumersEnergyLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Text ubl-ConsumersEnergyLevel"
          meta={ConsumptionReportFieldMeta.ConsumersEnergyLevel} 
          value={value.ConsumersEnergyLevel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Consumers Energy Level"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ConsumersEnergyLevel}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Text ubl-ResidenceType"
          meta={ConsumptionReportFieldMeta.ResidenceType} 
          value={value.ResidenceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Residence Type"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ResidenceType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Code ubl-ResidenceTypeCode"
          meta={ConsumptionReportFieldMeta.ResidenceTypeCode} 
          value={value.ResidenceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Residence Type Code"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ResidenceTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Text ubl-HeatingType"
          meta={ConsumptionReportFieldMeta.HeatingType} 
          value={value.HeatingType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Heating Type"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.HeatingType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionReport ubl-Code ubl-HeatingTypeCode"
          meta={ConsumptionReportFieldMeta.HeatingTypeCode} 
          value={value.HeatingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Heating Type Code"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.HeatingTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionReport ubl-Period"
          meta={ConsumptionReportFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.Period}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionReport ubl-DocumentReference ubl-GuidanceDocumentReference"
          meta={ConsumptionReportFieldMeta.GuidanceDocumentReference} 
          value={value.GuidanceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Guidance Document Reference"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.GuidanceDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionReport ubl-DocumentReference"
          meta={ConsumptionReportFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ConsumptionReport ubl-ConsumptionReportReference"
          meta={ConsumptionReportFieldMeta.ConsumptionReportReference} 
          value={value.ConsumptionReportReference}
          itemDisplay={ (itemValue: ConsumptionReportReference, key: string | number) =>
            <ConsumptionReportReferenceDisplay
              key={key}
              label="Consumption Report Reference"
              value={itemValue}
              meta={ConsumptionReportFieldMeta.ConsumptionReportReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ConsumptionReport ubl-ConsumptionHistory"
          meta={ConsumptionReportFieldMeta.ConsumptionHistory} 
          value={value.ConsumptionHistory}
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
