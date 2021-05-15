import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ClassificationCategory } from  '../../model/cac/ClassificationCategory'
import { ClassificationCategoryFieldMeta } from  '../../meta/cac/ClassificationCategoryMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ClassificationCategory | undefined
  meta: FieldMeta<T>
}

export default function ClassificationCategoryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ClassificationCategory">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ClassificationCategoryFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ClassificationCategoryFieldMeta.Name}
          />

          <TextDisplay
            label="Code Value"
            value={value.CodeValue?.[0]}
            meta={ClassificationCategoryFieldMeta.CodeValue}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ClassificationCategoryFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ClassificationCategoryFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ClassificationCategory ubl-CategorizesClassificationCategory"
            label="Categorizes Classification Category"
            items={value.CategorizesClassificationCategory}
            meta={ClassificationCategoryFieldMeta.CategorizesClassificationCategory} 
            itemDisplay={ (itemValue: ClassificationCategory, key: string | number) =>
              <ClassificationCategoryDisplay
                key={key}
                label="Categorizes Classification Category"
                value={itemValue}
                meta={ClassificationCategoryFieldMeta.CategorizesClassificationCategory}
              />
            }
          />
        </div>
    </div>
  )
}
