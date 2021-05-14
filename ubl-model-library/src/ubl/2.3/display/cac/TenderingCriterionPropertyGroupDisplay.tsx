import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderingCriterionPropertyGroup
  meta: FieldMeta<T>
}

export default function TenderingCriterionPropertyGroupDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderingCriterionPropertyGroup ubl-TenderingCriterionPropertyGroupType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderingCriterionPropertyGroup ubl-UBLExtensions"
          meta={TenderingCriterionPropertyGroupFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionPropertyGroup ubl-Identifier ubl-ID"
          meta={TenderingCriterionPropertyGroupFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionPropertyGroup ubl-Text ubl-Name"
          meta={TenderingCriterionPropertyGroupFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingCriterionPropertyGroup ubl-Text ubl-Description"
          meta={TenderingCriterionPropertyGroupFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionPropertyGroup ubl-Code ubl-PropertyGroupTypeCode"
          meta={TenderingCriterionPropertyGroupFieldMeta.PropertyGroupTypeCode} 
          value={value.PropertyGroupTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Property Group Type Code"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.PropertyGroupTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionPropertyGroup ubl-Indicator ubl-FulfilmentIndicator"
          meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicator} 
          value={value.FulfilmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Fulfilment Indicator"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionPropertyGroup ubl-Code ubl-FulfilmentIndicatorTypeCode"
          meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicatorTypeCode} 
          value={value.FulfilmentIndicatorTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Fulfilment Indicator Type Code"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicatorTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionPropertyGroup ubl-TenderingCriterionProperty"
          meta={TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty} 
          value={value.TenderingCriterionProperty}
          itemDisplay={ (itemValue: TenderingCriterionProperty, key: string | number) =>
            <TenderingCriterionPropertyDisplay
              key={key}
              label="Tendering Criterion Property"
              value={itemValue}
              meta={TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionPropertyGroup ubl-SubsidiaryTenderingCriterionPropertyGroup"
          meta={TenderingCriterionPropertyGroupFieldMeta.SubsidiaryTenderingCriterionPropertyGroup} 
          value={value.SubsidiaryTenderingCriterionPropertyGroup}
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
