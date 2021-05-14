import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: WorkPhaseReference
  meta: FieldMeta<T>
}

export default function WorkPhaseReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-WorkPhaseReference ubl-WorkPhaseReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-WorkPhaseReference ubl-UBLExtensions"
          meta={WorkPhaseReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={WorkPhaseReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WorkPhaseReference ubl-Identifier ubl-ID"
          meta={WorkPhaseReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={WorkPhaseReferenceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WorkPhaseReference ubl-Code ubl-WorkPhaseCode"
          meta={WorkPhaseReferenceFieldMeta.WorkPhaseCode} 
          value={value.WorkPhaseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Work Phase Code"
              value={itemValue}
              meta={WorkPhaseReferenceFieldMeta.WorkPhaseCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-WorkPhaseReference ubl-Text ubl-WorkPhase"
          meta={WorkPhaseReferenceFieldMeta.WorkPhase} 
          value={value.WorkPhase}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Work Phase"
              value={itemValue}
              meta={WorkPhaseReferenceFieldMeta.WorkPhase}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WorkPhaseReference ubl-Numeric ubl-ProgressPercent"
          meta={WorkPhaseReferenceFieldMeta.ProgressPercent} 
          value={value.ProgressPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Progress Percent"
              value={itemValue}
              meta={WorkPhaseReferenceFieldMeta.ProgressPercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WorkPhaseReference ubl-Date ubl-StartDate"
          meta={WorkPhaseReferenceFieldMeta.StartDate} 
          value={value.StartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Start Date"
              value={itemValue}
              meta={WorkPhaseReferenceFieldMeta.StartDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WorkPhaseReference ubl-Date ubl-EndDate"
          meta={WorkPhaseReferenceFieldMeta.EndDate} 
          value={value.EndDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="End Date"
              value={itemValue}
              meta={WorkPhaseReferenceFieldMeta.EndDate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-WorkPhaseReference ubl-DocumentReference ubl-WorkOrderDocumentReference"
          meta={WorkPhaseReferenceFieldMeta.WorkOrderDocumentReference} 
          value={value.WorkOrderDocumentReference}
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
