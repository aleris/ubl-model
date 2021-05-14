import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CreditAccount } from  '../../model/cac/CreditAccount'
import { CreditAccountFieldMeta } from  '../../meta/cac/CreditAccountMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CreditAccount
  meta: FieldMeta<T>
}

export default function CreditAccountDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CreditAccount ubl-CreditAccountType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CreditAccount ubl-UBLExtensions"
          meta={CreditAccountFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CreditAccountFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditAccount ubl-Identifier ubl-AccountID"
          meta={CreditAccountFieldMeta.AccountID} 
          value={value.AccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Account Identifier"
              value={itemValue}
              meta={CreditAccountFieldMeta.AccountID}
            />
          }
        />
        </div>
    </div>
  )
}
