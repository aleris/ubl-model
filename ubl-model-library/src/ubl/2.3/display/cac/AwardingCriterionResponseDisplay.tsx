import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: AwardingCriterionResponse
  meta: FieldMeta<T>
}

export default function AwardingCriterionResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AwardingCriterionResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardingCriterionResponseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.AwardingCriterionID} 
          value={value.AwardingCriterionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardingCriterionResponseFieldMeta.AwardingCriterionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.AwardingCriterionDescription} 
          value={value.AwardingCriterionDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingCriterionResponseFieldMeta.AwardingCriterionDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingCriterionResponseFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={AwardingCriterionResponseFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={AwardingCriterionResponseFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionResponseFieldMeta.SubordinateAwardingCriterionResponse} 
          value={value.SubordinateAwardingCriterionResponse}
          itemDisplay={ (itemValue: AwardingCriterionResponse, key: string | number) =>
            <AwardingCriterionResponseDisplay key={key} meta={AwardingCriterionResponseFieldMeta.SubordinateAwardingCriterionResponse} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
