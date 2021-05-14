import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExceptionNotificationLine } from  '../../model/cac/ExceptionNotificationLine'
import { ExceptionNotificationLineFieldMeta } from  '../../meta/cac/ExceptionNotificationLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ForecastExceptionDisplay from './ForecastExceptionDisplay'
import { ForecastException } from '../../model/cac/ForecastException'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
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
  value: ExceptionNotificationLine
  meta: FieldMeta<T>
}

export default function ExceptionNotificationLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ExceptionNotificationLine ubl-ExceptionNotificationLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ExceptionNotificationLine ubl-UBLExtensions"
          meta={ExceptionNotificationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Identifier ubl-ID"
          meta={ExceptionNotificationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Text ubl-Note"
          meta={ExceptionNotificationLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Text ubl-Description"
          meta={ExceptionNotificationLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Code ubl-ExceptionStatusCode"
          meta={ExceptionNotificationLineFieldMeta.ExceptionStatusCode} 
          value={value.ExceptionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Exception Status Code"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.ExceptionStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Code ubl-CollaborationPriorityCode"
          meta={ExceptionNotificationLineFieldMeta.CollaborationPriorityCode} 
          value={value.CollaborationPriorityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Collaboration Priority Code"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.CollaborationPriorityCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Code ubl-ResolutionCode"
          meta={ExceptionNotificationLineFieldMeta.ResolutionCode} 
          value={value.ResolutionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Resolution Code"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.ResolutionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Measure ubl-ComparedValueMeasure"
          meta={ExceptionNotificationLineFieldMeta.ComparedValueMeasure} 
          value={value.ComparedValueMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Compared Value"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.ComparedValueMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Measure ubl-SourceValueMeasure"
          meta={ExceptionNotificationLineFieldMeta.SourceValueMeasure} 
          value={value.SourceValueMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Source Value"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.SourceValueMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Quantity ubl-VarianceQuantity"
          meta={ExceptionNotificationLineFieldMeta.VarianceQuantity} 
          value={value.VarianceQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Variance"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.VarianceQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Code ubl-SupplyChainActivityTypeCode"
          meta={ExceptionNotificationLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Supply Chain Activity Type Code"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.SupplyChainActivityTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionNotificationLine ubl-Code ubl-PerformanceMetricTypeCode"
          meta={ExceptionNotificationLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Performance Metric Type Code"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.PerformanceMetricTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExceptionNotificationLine ubl-Period ubl-ExceptionObservationPeriod"
          meta={ExceptionNotificationLineFieldMeta.ExceptionObservationPeriod} 
          value={value.ExceptionObservationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Exception Observation Period"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.ExceptionObservationPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExceptionNotificationLine ubl-DocumentReference"
          meta={ExceptionNotificationLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExceptionNotificationLine ubl-ForecastException"
          meta={ExceptionNotificationLineFieldMeta.ForecastException} 
          value={value.ForecastException}
          itemDisplay={ (itemValue: ForecastException, key: string | number) =>
            <ForecastExceptionDisplay
              key={key}
              label="Forecast Exception"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.ForecastException}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExceptionNotificationLine ubl-Item ubl-SupplyItem"
          meta={ExceptionNotificationLineFieldMeta.SupplyItem} 
          value={value.SupplyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Supply Item"
              value={itemValue}
              meta={ExceptionNotificationLineFieldMeta.SupplyItem}
            />
          }
        />
        </div>
    </div>
  )
}
