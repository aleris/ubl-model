import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ClassificationCategory } from  '../../model/cac/ClassificationCategory'
import { ClassificationCategoryFieldMeta } from  '../../meta/cac/ClassificationCategoryMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ClassificationCategory
  meta: FieldMeta<T>
}

export default function ClassificationCategoryDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ClassificationCategoryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ClassificationCategoryFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationCategoryFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClassificationCategoryFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationCategoryFieldMeta.CodeValue} 
          value={value.CodeValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClassificationCategoryFieldMeta.CodeValue} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationCategoryFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClassificationCategoryFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClassificationCategoryFieldMeta.CategorizesClassificationCategory} 
          value={value.CategorizesClassificationCategory}
          itemDisplay={ (itemValue: ClassificationCategory, key: string | number) =>
            <ClassificationCategoryDisplay key={key} meta={ClassificationCategoryFieldMeta.CategorizesClassificationCategory} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
