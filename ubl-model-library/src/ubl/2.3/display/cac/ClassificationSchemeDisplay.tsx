import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ClassificationScheme } from  '../../model/cac/ClassificationScheme'
import { ClassificationSchemeFieldMeta } from  '../../meta/cac/ClassificationSchemeMeta'
import ClassificationCategoryDisplay from './ClassificationCategoryDisplay'
import { ClassificationCategory } from '../../model/cac/ClassificationCategory'
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
  value: ClassificationScheme | undefined
  meta: FieldMeta<T>
}

export default function ClassificationSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ClassificationScheme">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ClassificationSchemeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ClassificationSchemeFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ClassificationSchemeFieldMeta.UUID}
          />

          <DateDisplay
            label="Last Revision Date"
            value={value.LastRevisionDate?.[0]}
            meta={ClassificationSchemeFieldMeta.LastRevisionDate}
          />

          <TimeDisplay
            label="Last Revision Time"
            value={value.LastRevisionTime?.[0]}
            meta={ClassificationSchemeFieldMeta.LastRevisionTime}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ClassificationSchemeFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ClassificationSchemeFieldMeta.Note}
              />
            }
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ClassificationSchemeFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ClassificationSchemeFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ClassificationSchemeFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Agency Identifier"
            value={value.AgencyID?.[0]}
            meta={ClassificationSchemeFieldMeta.AgencyID}
          />

          <TextDisplay
            label="Agency Name"
            value={value.AgencyName?.[0]}
            meta={ClassificationSchemeFieldMeta.AgencyName}
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={ClassificationSchemeFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="URI"
            value={value.URI?.[0]}
            meta={ClassificationSchemeFieldMeta.URI}
          />

          <IdentifierDisplay
            label="Scheme URI"
            value={value.SchemeURI?.[0]}
            meta={ClassificationSchemeFieldMeta.SchemeURI}
          />

          <IdentifierDisplay
            label="Language"
            value={value.LanguageID?.[0]}
            meta={ClassificationSchemeFieldMeta.LanguageID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ClassificationCategory"
            label="Classification Category"
            items={value.ClassificationCategory}
            meta={ClassificationSchemeFieldMeta.ClassificationCategory} 
            itemDisplay={ (itemValue: ClassificationCategory, key: string | number) =>
              <ClassificationCategoryDisplay
                key={key}
                label="Classification Category"
                value={itemValue}
                meta={ClassificationSchemeFieldMeta.ClassificationCategory}
              />
            }
          />
        </div>
    </div>
  )
}
