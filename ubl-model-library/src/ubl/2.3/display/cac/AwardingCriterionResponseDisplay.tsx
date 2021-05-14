import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: AwardingCriterionResponse
  meta: FieldMeta<T>
}

export default function AwardingCriterionResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AwardingCriterionResponse ubl-AwardingCriterionResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AwardingCriterionResponse ubl-UBLExtensions"
          meta={AwardingCriterionResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AwardingCriterionResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterionResponse ubl-Identifier ubl-ID"
          meta={AwardingCriterionResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={AwardingCriterionResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterionResponse ubl-Identifier ubl-AwardingCriterionID"
          meta={AwardingCriterionResponseFieldMeta.AwardingCriterionID} 
          value={value.AwardingCriterionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Awarding Criterion Identifier"
              value={itemValue}
              meta={AwardingCriterionResponseFieldMeta.AwardingCriterionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingCriterionResponse ubl-Text ubl-AwardingCriterionDescription"
          meta={AwardingCriterionResponseFieldMeta.AwardingCriterionDescription} 
          value={value.AwardingCriterionDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Awarding Criterion Description"
              value={itemValue}
              meta={AwardingCriterionResponseFieldMeta.AwardingCriterionDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingCriterionResponse ubl-Text ubl-Description"
          meta={AwardingCriterionResponseFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={AwardingCriterionResponseFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterionResponse ubl-Quantity"
          meta={AwardingCriterionResponseFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={AwardingCriterionResponseFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterionResponse ubl-Amount"
          meta={AwardingCriterionResponseFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={AwardingCriterionResponseFieldMeta.Amount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardingCriterionResponse ubl-SubordinateAwardingCriterionResponse"
          meta={AwardingCriterionResponseFieldMeta.SubordinateAwardingCriterionResponse} 
          value={value.SubordinateAwardingCriterionResponse}
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
