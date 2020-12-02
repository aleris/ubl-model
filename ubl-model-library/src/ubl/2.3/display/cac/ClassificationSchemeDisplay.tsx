import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ClassificationScheme
  meta: FieldMeta<T>
}

export default function ClassificationSchemeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ClassificationSchemeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClassificationSchemeFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClassificationSchemeFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.LastRevisionDate} 
          value={value.LastRevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ClassificationSchemeFieldMeta.LastRevisionDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.LastRevisionTime} 
          value={value.LastRevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ClassificationSchemeFieldMeta.LastRevisionTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClassificationSchemeFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClassificationSchemeFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClassificationSchemeFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.AgencyID} 
          value={value.AgencyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClassificationSchemeFieldMeta.AgencyID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.AgencyName} 
          value={value.AgencyName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClassificationSchemeFieldMeta.AgencyName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClassificationSchemeFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClassificationSchemeFieldMeta.URI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.SchemeURI} 
          value={value.SchemeURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClassificationSchemeFieldMeta.SchemeURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.LanguageID} 
          value={value.LanguageID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClassificationSchemeFieldMeta.LanguageID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationSchemeFieldMeta.ClassificationCategory} 
          value={value.ClassificationCategory}
          itemDisplay={ (itemValue: ClassificationCategory, key: string | number) =>
            <ClassificationCategoryDisplay key={key} meta={ClassificationSchemeFieldMeta.ClassificationCategory} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
