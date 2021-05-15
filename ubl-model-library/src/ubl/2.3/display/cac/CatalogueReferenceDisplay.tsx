import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueReference } from  '../../model/cac/CatalogueReference'
import { CatalogueReferenceFieldMeta } from  '../../meta/cac/CatalogueReferenceMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CatalogueReference | undefined
  meta: FieldMeta<T>
}

export default function CatalogueReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CatalogueReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CatalogueReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CatalogueReferenceFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CatalogueReferenceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={CatalogueReferenceFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={CatalogueReferenceFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Revision Date"
            value={value.RevisionDate?.[0]}
            meta={CatalogueReferenceFieldMeta.RevisionDate}
          />

          <TimeDisplay
            label="Revision Time"
            value={value.RevisionTime?.[0]}
            meta={CatalogueReferenceFieldMeta.RevisionTime}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CatalogueReferenceFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CatalogueReferenceFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CatalogueReferenceFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CatalogueReferenceFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={CatalogueReferenceFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version"
            value={value.PreviousVersionID?.[0]}
            meta={CatalogueReferenceFieldMeta.PreviousVersionID}
          />
        </div>
    </div>
  )
}
