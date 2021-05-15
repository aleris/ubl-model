import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: ProjectReference | undefined
  meta: FieldMeta<T>
}

export default function ProjectReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ProjectReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProjectReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ProjectReferenceFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ProjectReferenceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ProjectReferenceFieldMeta.IssueDate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-WorkPhaseReference"
            label="Work Phase Reference"
            items={value.WorkPhaseReference}
            meta={ProjectReferenceFieldMeta.WorkPhaseReference} 
            itemDisplay={ (itemValue: WorkPhaseReference, key: string | number) =>
              <WorkPhaseReferenceDisplay
                key={key}
                label="Work Phase Reference"
                value={itemValue}
                meta={ProjectReferenceFieldMeta.WorkPhaseReference}
              />
            }
          />
        </div>
    </div>
  )
}
