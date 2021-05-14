import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ClassificationCategory } from  '../../model/cac/ClassificationCategory'
import { ClassificationCategoryFieldMeta } from  '../../meta/cac/ClassificationCategoryMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ClassificationCategory
  meta: FieldMeta<T>
}

export default function ClassificationCategoryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ClassificationCategory ubl-ClassificationCategoryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ClassificationCategory ubl-UBLExtensions"
          meta={ClassificationCategoryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ClassificationCategoryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationCategory ubl-Text ubl-Name"
          meta={ClassificationCategoryFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ClassificationCategoryFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ClassificationCategory ubl-Text ubl-CodeValue"
          meta={ClassificationCategoryFieldMeta.CodeValue} 
          value={value.CodeValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Code Value"
              value={itemValue}
              meta={ClassificationCategoryFieldMeta.CodeValue}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ClassificationCategory ubl-Text ubl-Description"
          meta={ClassificationCategoryFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ClassificationCategoryFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ClassificationCategory ubl-CategorizesClassificationCategory"
          meta={ClassificationCategoryFieldMeta.CategorizesClassificationCategory} 
          value={value.CategorizesClassificationCategory}
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
