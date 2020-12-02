import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { WorkPhaseReference } from  '../../model/cac/WorkPhaseReference'
import { WorkPhaseReferenceFieldMeta } from  '../../meta/cac/WorkPhaseReferenceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: WorkPhaseReference
  meta: FieldMeta<T>
}

export default function WorkPhaseReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={WorkPhaseReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WorkPhaseReferenceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.WorkPhaseCode} 
          value={value.WorkPhaseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={WorkPhaseReferenceFieldMeta.WorkPhaseCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.WorkPhase} 
          value={value.WorkPhase}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WorkPhaseReferenceFieldMeta.WorkPhase} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.ProgressPercent} 
          value={value.ProgressPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={WorkPhaseReferenceFieldMeta.ProgressPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.StartDate} 
          value={value.StartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={WorkPhaseReferenceFieldMeta.StartDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.EndDate} 
          value={value.EndDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={WorkPhaseReferenceFieldMeta.EndDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WorkPhaseReferenceFieldMeta.WorkOrderDocumentReference} 
          value={value.WorkOrderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={WorkPhaseReferenceFieldMeta.WorkOrderDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
