import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CreditAccount } from  '../../model/cac/CreditAccount'
import { CreditAccountFieldMeta } from  '../../meta/cac/CreditAccountMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CreditAccount | undefined
  meta: FieldMeta<T>
}

export default function CreditAccountDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CreditAccount">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CreditAccountFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Account Identifier"
            value={value.AccountID?.[0]}
            meta={CreditAccountFieldMeta.AccountID}
          />
        </div>
    </div>
  )
}
