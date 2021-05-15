import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: EconomicOperatorShortList | undefined
  meta: FieldMeta<T>
}

export default function EconomicOperatorShortListDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EconomicOperatorShortList">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EconomicOperatorShortListFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-LimitationDescription"
            label="Limitation Description"
            items={value.LimitationDescription}
            meta={EconomicOperatorShortListFieldMeta.LimitationDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Limitation Description"
                value={itemValue}
                meta={EconomicOperatorShortListFieldMeta.LimitationDescription}
              />
            }
          />

          <QuantityDisplay
            label="Expected Quantity"
            value={value.ExpectedQuantity?.[0]}
            meta={EconomicOperatorShortListFieldMeta.ExpectedQuantity}
          />

          <QuantityDisplay
            label="Maximum Quantity"
            value={value.MaximumQuantity?.[0]}
            meta={EconomicOperatorShortListFieldMeta.MaximumQuantity}
          />

          <QuantityDisplay
            label="Minimum Quantity"
            value={value.MinimumQuantity?.[0]}
            meta={EconomicOperatorShortListFieldMeta.MinimumQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-PreSelectedParty"
            label="Pre Selected Party"
            items={value.PreSelectedParty}
            meta={EconomicOperatorShortListFieldMeta.PreSelectedParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Pre Selected Party"
                value={itemValue}
                meta={EconomicOperatorShortListFieldMeta.PreSelectedParty}
              />
            }
          />
        </div>
    </div>
  )
}
