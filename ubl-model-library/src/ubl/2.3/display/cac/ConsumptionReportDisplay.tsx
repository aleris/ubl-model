import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ConsumptionReport
  meta: FieldMeta<T>
}

export default function ConsumptionReportDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsumptionReportFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsumptionReportFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ConsumptionType} 
          value={value.ConsumptionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionReportFieldMeta.ConsumptionType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ConsumptionTypeCode} 
          value={value.ConsumptionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionReportFieldMeta.ConsumptionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionReportFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.TotalConsumedQuantity} 
          value={value.TotalConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionReportFieldMeta.TotalConsumedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.BasicConsumedQuantity} 
          value={value.BasicConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionReportFieldMeta.BasicConsumedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ResidentOccupantsNumeric} 
          value={value.ResidentOccupantsNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ConsumptionReportFieldMeta.ResidentOccupantsNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ConsumersEnergyLevelCode} 
          value={value.ConsumersEnergyLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionReportFieldMeta.ConsumersEnergyLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ConsumersEnergyLevel} 
          value={value.ConsumersEnergyLevel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionReportFieldMeta.ConsumersEnergyLevel} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ResidenceType} 
          value={value.ResidenceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionReportFieldMeta.ResidenceType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ResidenceTypeCode} 
          value={value.ResidenceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionReportFieldMeta.ResidenceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.HeatingType} 
          value={value.HeatingType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionReportFieldMeta.HeatingType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.HeatingTypeCode} 
          value={value.HeatingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionReportFieldMeta.HeatingTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ConsumptionReportFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.GuidanceDocumentReference} 
          value={value.GuidanceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ConsumptionReportFieldMeta.GuidanceDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ConsumptionReportFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ConsumptionReportReference} 
          value={value.ConsumptionReportReference}
          itemDisplay={ (itemValue: ConsumptionReportReference, key: string | number) =>
            <ConsumptionReportReferenceDisplay key={key} meta={ConsumptionReportFieldMeta.ConsumptionReportReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionReportFieldMeta.ConsumptionHistory} 
          value={value.ConsumptionHistory}
          itemDisplay={ (itemValue: ConsumptionHistory, key: string | number) =>
            <ConsumptionHistoryDisplay key={key} meta={ConsumptionReportFieldMeta.ConsumptionHistory} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
