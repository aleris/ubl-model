import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardingCriterionResponse } from  '../../model/cac/AwardingCriterionResponse'
import { AwardingCriterionResponseFieldMeta } from  '../../meta/cac/AwardingCriterionResponseMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AwardingCriterionResponse | undefined
  meta: FieldMeta<T>
}

export default function AwardingCriterionResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AwardingCriterionResponse">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AwardingCriterionResponseFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={AwardingCriterionResponseFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Awarding Criterion Identifier"
            value={value.AwardingCriterionID?.[0]}
            meta={AwardingCriterionResponseFieldMeta.AwardingCriterionID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-AwardingCriterionDescription"
            label="Awarding Criterion Description"
            items={value.AwardingCriterionDescription}
            meta={AwardingCriterionResponseFieldMeta.AwardingCriterionDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Awarding Criterion Description"
                value={itemValue}
                meta={AwardingCriterionResponseFieldMeta.AwardingCriterionDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={AwardingCriterionResponseFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={AwardingCriterionResponseFieldMeta.Description}
              />
            }
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={AwardingCriterionResponseFieldMeta.Quantity}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={AwardingCriterionResponseFieldMeta.Amount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AwardingCriterionResponse ubl-SubordinateAwardingCriterionResponse"
            label="Subordinate Awarding Criterion Response"
            items={value.SubordinateAwardingCriterionResponse}
            meta={AwardingCriterionResponseFieldMeta.SubordinateAwardingCriterionResponse} 
            itemDisplay={ (itemValue: AwardingCriterionResponse, key: string | number) =>
              <AwardingCriterionResponseDisplay
                key={key}
                label="Subordinate Awarding Criterion Response"
                value={itemValue}
                meta={AwardingCriterionResponseFieldMeta.SubordinateAwardingCriterionResponse}
              />
            }
          />
        </div>
    </div>
  )
}
