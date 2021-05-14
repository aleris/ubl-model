import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ProjectReference
  meta: FieldMeta<T>
}

export default function ProjectReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ProjectReference ubl-ProjectReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProjectReference ubl-UBLExtensions"
          meta={ProjectReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProjectReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProjectReference ubl-Identifier ubl-ID"
          meta={ProjectReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ProjectReferenceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProjectReference ubl-Identifier ubl-UUID"
          meta={ProjectReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ProjectReferenceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProjectReference ubl-Date ubl-IssueDate"
          meta={ProjectReferenceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ProjectReferenceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProjectReference ubl-WorkPhaseReference"
          meta={ProjectReferenceFieldMeta.WorkPhaseReference} 
          value={value.WorkPhaseReference}
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
