import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EconomicOperatorShortList } from  '../../model/cac/EconomicOperatorShortList'
import { EconomicOperatorShortListFieldMeta } from  '../../meta/cac/EconomicOperatorShortListMeta'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EconomicOperatorShortList
  meta: FieldMeta<T>
}

export default function EconomicOperatorShortListDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EconomicOperatorShortListFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EconomicOperatorShortListFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorShortListFieldMeta.LimitationDescription} 
          value={value.LimitationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EconomicOperatorShortListFieldMeta.LimitationDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorShortListFieldMeta.ExpectedQuantity} 
          value={value.ExpectedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={EconomicOperatorShortListFieldMeta.ExpectedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorShortListFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={EconomicOperatorShortListFieldMeta.MaximumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorShortListFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={EconomicOperatorShortListFieldMeta.MinimumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorShortListFieldMeta.PreSelectedParty} 
          value={value.PreSelectedParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={EconomicOperatorShortListFieldMeta.PreSelectedParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
