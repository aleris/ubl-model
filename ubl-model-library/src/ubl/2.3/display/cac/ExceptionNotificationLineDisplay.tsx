import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ExceptionNotificationLine | undefined
  meta: FieldMeta<T>
}

export default function ExceptionNotificationLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ExceptionNotificationLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ExceptionNotificationLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ExceptionNotificationLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ExceptionNotificationLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ExceptionNotificationLineFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ExceptionNotificationLineFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ExceptionNotificationLineFieldMeta.Description}
              />
            }
          />

          <CodeDisplay
            label="Exception Status Code"
            value={value.ExceptionStatusCode?.[0]}
            meta={ExceptionNotificationLineFieldMeta.ExceptionStatusCode}
          />

          <CodeDisplay
            label="Collaboration Priority Code"
            value={value.CollaborationPriorityCode?.[0]}
            meta={ExceptionNotificationLineFieldMeta.CollaborationPriorityCode}
          />

          <CodeDisplay
            label="Resolution Code"
            value={value.ResolutionCode?.[0]}
            meta={ExceptionNotificationLineFieldMeta.ResolutionCode}
          />

          <MeasureDisplay
            label="Compared Value"
            value={value.ComparedValueMeasure?.[0]}
            meta={ExceptionNotificationLineFieldMeta.ComparedValueMeasure}
          />

          <MeasureDisplay
            label="Source Value"
            value={value.SourceValueMeasure?.[0]}
            meta={ExceptionNotificationLineFieldMeta.SourceValueMeasure}
          />

          <QuantityDisplay
            label="Variance"
            value={value.VarianceQuantity?.[0]}
            meta={ExceptionNotificationLineFieldMeta.VarianceQuantity}
          />

          <CodeDisplay
            label="Supply Chain Activity Type Code"
            value={value.SupplyChainActivityTypeCode?.[0]}
            meta={ExceptionNotificationLineFieldMeta.SupplyChainActivityTypeCode}
          />

          <CodeDisplay
            label="Performance Metric Type Code"
            value={value.PerformanceMetricTypeCode?.[0]}
            meta={ExceptionNotificationLineFieldMeta.PerformanceMetricTypeCode}
          />

          <PeriodDisplay
            label="Exception Observation Period"
            value={value.ExceptionObservationPeriod?.[0]}
            meta={ExceptionNotificationLineFieldMeta.ExceptionObservationPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={ExceptionNotificationLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={ExceptionNotificationLineFieldMeta.DocumentReference}
              />
            }
          />

          <ForecastExceptionDisplay
            label="Forecast Exception"
            value={value.ForecastException?.[0]}
            meta={ExceptionNotificationLineFieldMeta.ForecastException}
          />

          <ItemDisplay
            label="Supply Item"
            value={value.SupplyItem?.[0]}
            meta={ExceptionNotificationLineFieldMeta.SupplyItem}
          />
        </div>
    </div>
  )
}
