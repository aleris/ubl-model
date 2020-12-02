import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ExceptionNotificationLine
  meta: FieldMeta<T>
}

export default function ExceptionNotificationLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ExceptionNotificationLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionNotificationLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExceptionNotificationLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExceptionNotificationLineFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.ExceptionStatusCode} 
          value={value.ExceptionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionNotificationLineFieldMeta.ExceptionStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.CollaborationPriorityCode} 
          value={value.CollaborationPriorityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionNotificationLineFieldMeta.CollaborationPriorityCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.ResolutionCode} 
          value={value.ResolutionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionNotificationLineFieldMeta.ResolutionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.ComparedValueMeasure} 
          value={value.ComparedValueMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ExceptionNotificationLineFieldMeta.ComparedValueMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.SourceValueMeasure} 
          value={value.SourceValueMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ExceptionNotificationLineFieldMeta.SourceValueMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.VarianceQuantity} 
          value={value.VarianceQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ExceptionNotificationLineFieldMeta.VarianceQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionNotificationLineFieldMeta.SupplyChainActivityTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionNotificationLineFieldMeta.PerformanceMetricTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.ExceptionObservationPeriod} 
          value={value.ExceptionObservationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ExceptionNotificationLineFieldMeta.ExceptionObservationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ExceptionNotificationLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.ForecastException} 
          value={value.ForecastException}
          itemDisplay={ (itemValue: ForecastException, key: string | number) =>
            <ForecastExceptionDisplay key={key} meta={ExceptionNotificationLineFieldMeta.ForecastException} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionNotificationLineFieldMeta.SupplyItem} 
          value={value.SupplyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={ExceptionNotificationLineFieldMeta.SupplyItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
