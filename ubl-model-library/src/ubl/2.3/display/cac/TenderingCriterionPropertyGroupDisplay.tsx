import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: TenderingCriterionPropertyGroup | undefined
  meta: FieldMeta<T>
}

export default function TenderingCriterionPropertyGroupDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderingCriterionPropertyGroup">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderingCriterionPropertyGroupFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderingCriterionPropertyGroupFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TenderingCriterionPropertyGroupFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderingCriterionPropertyGroupFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderingCriterionPropertyGroupFieldMeta.Description}
              />
            }
          />

          <CodeDisplay
            label="Property Group Type Code"
            value={value.PropertyGroupTypeCode?.[0]}
            meta={TenderingCriterionPropertyGroupFieldMeta.PropertyGroupTypeCode}
          />

          <IndicatorDisplay
            label="Fulfilment Indicator"
            value={value.FulfilmentIndicator?.[0]}
            meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicator}
          />

          <CodeDisplay
            label="Fulfilment Indicator Type Code"
            value={value.FulfilmentIndicatorTypeCode?.[0]}
            meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicatorTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderingCriterionProperty"
            label="Tendering Criterion Property"
            items={value.TenderingCriterionProperty}
            meta={TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty} 
            itemDisplay={ (itemValue: TenderingCriterionProperty, key: string | number) =>
              <TenderingCriterionPropertyDisplay
                key={key}
                label="Tendering Criterion Property"
                value={itemValue}
                meta={TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderingCriterionPropertyGroup ubl-SubsidiaryTenderingCriterionPropertyGroup"
            label="Subsidiary Tendering Criterion Property Group"
            items={value.SubsidiaryTenderingCriterionPropertyGroup}
            meta={TenderingCriterionPropertyGroupFieldMeta.SubsidiaryTenderingCriterionPropertyGroup} 
            itemDisplay={ (itemValue: TenderingCriterionPropertyGroup, key: string | number) =>
              <TenderingCriterionPropertyGroupDisplay
                key={key}
                label="Subsidiary Tendering Criterion Property Group"
                value={itemValue}
                meta={TenderingCriterionPropertyGroupFieldMeta.SubsidiaryTenderingCriterionPropertyGroup}
              />
            }
          />
        </div>
    </div>
  )
}
