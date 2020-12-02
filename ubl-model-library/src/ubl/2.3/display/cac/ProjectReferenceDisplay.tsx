import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProjectReference } from  '../../model/cac/ProjectReference'
import { ProjectReferenceFieldMeta } from  '../../meta/cac/ProjectReferenceMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import WorkPhaseReferenceDisplay from './WorkPhaseReferenceDisplay'
import { WorkPhaseReference } from '../../model/cac/WorkPhaseReference'

type Params<T> = {
  value: ProjectReference
  meta: FieldMeta<T>
}

export default function ProjectReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ProjectReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ProjectReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProjectReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProjectReferenceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProjectReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProjectReferenceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProjectReferenceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ProjectReferenceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProjectReferenceFieldMeta.WorkPhaseReference} 
          value={value.WorkPhaseReference}
          itemDisplay={ (itemValue: WorkPhaseReference, key: string | number) =>
            <WorkPhaseReferenceDisplay key={key} meta={ProjectReferenceFieldMeta.WorkPhaseReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
