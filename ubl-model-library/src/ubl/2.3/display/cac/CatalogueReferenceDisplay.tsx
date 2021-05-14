import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CatalogueReference
  meta: FieldMeta<T>
}

export default function CatalogueReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CatalogueReference ubl-CatalogueReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CatalogueReference ubl-UBLExtensions"
          meta={CatalogueReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Identifier ubl-ID"
          meta={CatalogueReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Identifier ubl-UUID"
          meta={CatalogueReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Date ubl-IssueDate"
          meta={CatalogueReferenceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Time ubl-IssueTime"
          meta={CatalogueReferenceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Date ubl-RevisionDate"
          meta={CatalogueReferenceFieldMeta.RevisionDate} 
          value={value.RevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Revision Date"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.RevisionDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Time ubl-RevisionTime"
          meta={CatalogueReferenceFieldMeta.RevisionTime} 
          value={value.RevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Revision Time"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.RevisionTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Text ubl-Note"
          meta={CatalogueReferenceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Text ubl-Description"
          meta={CatalogueReferenceFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Identifier ubl-VersionID"
          meta={CatalogueReferenceFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueReference ubl-Identifier ubl-PreviousVersionID"
          meta={CatalogueReferenceFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version"
              value={itemValue}
              meta={CatalogueReferenceFieldMeta.PreviousVersionID}
            />
          }
        />
        </div>
    </div>
  )
}
