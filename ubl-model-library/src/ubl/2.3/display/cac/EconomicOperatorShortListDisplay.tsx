import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EconomicOperatorShortList
  meta: FieldMeta<T>
}

export default function EconomicOperatorShortListDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EconomicOperatorShortList ubl-EconomicOperatorShortListType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EconomicOperatorShortList ubl-UBLExtensions"
          meta={EconomicOperatorShortListFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EconomicOperatorShortListFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-EconomicOperatorShortList ubl-Text ubl-LimitationDescription"
          meta={EconomicOperatorShortListFieldMeta.LimitationDescription} 
          value={value.LimitationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Limitation Description"
              value={itemValue}
              meta={EconomicOperatorShortListFieldMeta.LimitationDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EconomicOperatorShortList ubl-Quantity ubl-ExpectedQuantity"
          meta={EconomicOperatorShortListFieldMeta.ExpectedQuantity} 
          value={value.ExpectedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Expected Quantity"
              value={itemValue}
              meta={EconomicOperatorShortListFieldMeta.ExpectedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EconomicOperatorShortList ubl-Quantity ubl-MaximumQuantity"
          meta={EconomicOperatorShortListFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Quantity"
              value={itemValue}
              meta={EconomicOperatorShortListFieldMeta.MaximumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EconomicOperatorShortList ubl-Quantity ubl-MinimumQuantity"
          meta={EconomicOperatorShortListFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Quantity"
              value={itemValue}
              meta={EconomicOperatorShortListFieldMeta.MinimumQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EconomicOperatorShortList ubl-Party ubl-PreSelectedParty"
          meta={EconomicOperatorShortListFieldMeta.PreSelectedParty} 
          value={value.PreSelectedParty}
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
