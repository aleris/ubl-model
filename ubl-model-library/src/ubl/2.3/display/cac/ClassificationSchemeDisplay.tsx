import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ClassificationScheme
  meta: FieldMeta<T>
}

export default function ClassificationSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ClassificationScheme ubl-ClassificationSchemeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ClassificationScheme ubl-UBLExtensions"
          meta={ClassificationSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Identifier ubl-ID"
          meta={ClassificationSchemeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Identifier ubl-UUID"
          meta={ClassificationSchemeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Date ubl-LastRevisionDate"
          meta={ClassificationSchemeFieldMeta.LastRevisionDate} 
          value={value.LastRevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Last Revision Date"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.LastRevisionDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Time ubl-LastRevisionTime"
          meta={ClassificationSchemeFieldMeta.LastRevisionTime} 
          value={value.LastRevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Last Revision Time"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.LastRevisionTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Text ubl-Note"
          meta={ClassificationSchemeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Text ubl-Name"
          meta={ClassificationSchemeFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Text ubl-Description"
          meta={ClassificationSchemeFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Identifier ubl-AgencyID"
          meta={ClassificationSchemeFieldMeta.AgencyID} 
          value={value.AgencyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Agency Identifier"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.AgencyID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Text ubl-AgencyName"
          meta={ClassificationSchemeFieldMeta.AgencyName} 
          value={value.AgencyName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Agency Name"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.AgencyName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Identifier ubl-VersionID"
          meta={ClassificationSchemeFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Identifier ubl-URI"
          meta={ClassificationSchemeFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="URI"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.URI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Identifier ubl-SchemeURI"
          meta={ClassificationSchemeFieldMeta.SchemeURI} 
          value={value.SchemeURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Scheme URI"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.SchemeURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationScheme ubl-Identifier ubl-LanguageID"
          meta={ClassificationSchemeFieldMeta.LanguageID} 
          value={value.LanguageID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Language"
              value={itemValue}
              meta={ClassificationSchemeFieldMeta.LanguageID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ClassificationScheme ubl-ClassificationCategory"
          meta={ClassificationSchemeFieldMeta.ClassificationCategory} 
          value={value.ClassificationCategory}
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
