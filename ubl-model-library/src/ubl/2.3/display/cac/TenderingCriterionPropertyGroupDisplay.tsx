import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterionPropertyGroup } from  '../../model/cac/TenderingCriterionPropertyGroup'
import { TenderingCriterionPropertyGroupFieldMeta } from  '../../meta/cac/TenderingCriterionPropertyGroupMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import TenderingCriterionPropertyDisplay from './TenderingCriterionPropertyDisplay'
import { TenderingCriterionProperty } from '../../model/cac/TenderingCriterionProperty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderingCriterionPropertyGroup
  meta: FieldMeta<T>
}

export default function TenderingCriterionPropertyGroupDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.PropertyGroupTypeCode} 
          value={value.PropertyGroupTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.PropertyGroupTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicator} 
          value={value.FulfilmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicatorTypeCode} 
          value={value.FulfilmentIndicatorTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicatorTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty} 
          value={value.TenderingCriterionProperty}
          itemDisplay={ (itemValue: TenderingCriterionProperty, key: string | number) =>
            <TenderingCriterionPropertyDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyGroupFieldMeta.SubsidiaryTenderingCriterionPropertyGroup} 
          value={value.SubsidiaryTenderingCriterionPropertyGroup}
          itemDisplay={ (itemValue: TenderingCriterionPropertyGroup, key: string | number) =>
            <TenderingCriterionPropertyGroupDisplay key={key} meta={TenderingCriterionPropertyGroupFieldMeta.SubsidiaryTenderingCriterionPropertyGroup} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
