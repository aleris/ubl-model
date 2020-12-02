import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CatalogueReference
  meta: FieldMeta<T>
}

export default function CatalogueReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CatalogueReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueReferenceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueReferenceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CatalogueReferenceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CatalogueReferenceFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.RevisionDate} 
          value={value.RevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CatalogueReferenceFieldMeta.RevisionDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.RevisionTime} 
          value={value.RevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CatalogueReferenceFieldMeta.RevisionTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueReferenceFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueReferenceFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueReferenceFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueReferenceFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueReferenceFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
