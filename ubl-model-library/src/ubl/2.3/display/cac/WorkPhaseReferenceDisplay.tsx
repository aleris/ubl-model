import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: WorkPhaseReference | undefined
  meta: FieldMeta<T>
}

export default function WorkPhaseReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-WorkPhaseReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={WorkPhaseReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={WorkPhaseReferenceFieldMeta.ID}
          />

          <CodeDisplay
            label="Work Phase Code"
            value={value.WorkPhaseCode?.[0]}
            meta={WorkPhaseReferenceFieldMeta.WorkPhaseCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-WorkPhase"
            label="Work Phase"
            items={value.WorkPhase}
            meta={WorkPhaseReferenceFieldMeta.WorkPhase} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Work Phase"
                value={itemValue}
                meta={WorkPhaseReferenceFieldMeta.WorkPhase}
              />
            }
          />

          <NumericDisplay
            label="Progress Percent"
            value={value.ProgressPercent?.[0]}
            meta={WorkPhaseReferenceFieldMeta.ProgressPercent}
          />

          <DateDisplay
            label="Start Date"
            value={value.StartDate?.[0]}
            meta={WorkPhaseReferenceFieldMeta.StartDate}
          />

          <DateDisplay
            label="End Date"
            value={value.EndDate?.[0]}
            meta={WorkPhaseReferenceFieldMeta.EndDate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-WorkOrderDocumentReference"
            label="Work Order Document Reference"
            items={value.WorkOrderDocumentReference}
            meta={WorkPhaseReferenceFieldMeta.WorkOrderDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Work Order Document Reference"
                value={itemValue}
                meta={WorkPhaseReferenceFieldMeta.WorkOrderDocumentReference}
              />
            }
          />
        </div>
    </div>
  )
}
