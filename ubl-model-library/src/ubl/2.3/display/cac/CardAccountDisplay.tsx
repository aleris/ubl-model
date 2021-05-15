import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CardAccount } from  '../../model/cac/CardAccount'
import { CardAccountFieldMeta } from  '../../meta/cac/CardAccountMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CardAccount | undefined
  meta: FieldMeta<T>
}

export default function CardAccountDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CardAccount">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CardAccountFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Primary Account Number"
            value={value.PrimaryAccountNumberID?.[0]}
            meta={CardAccountFieldMeta.PrimaryAccountNumberID}
          />

          <IdentifierDisplay
            label="Network"
            value={value.NetworkID?.[0]}
            meta={CardAccountFieldMeta.NetworkID}
          />

          <CodeDisplay
            label="Card Type Code"
            value={value.CardTypeCode?.[0]}
            meta={CardAccountFieldMeta.CardTypeCode}
          />

          <DateDisplay
            label="Validity Start Date"
            value={value.ValidityStartDate?.[0]}
            meta={CardAccountFieldMeta.ValidityStartDate}
          />

          <DateDisplay
            label="Expiry Date"
            value={value.ExpiryDate?.[0]}
            meta={CardAccountFieldMeta.ExpiryDate}
          />

          <IdentifierDisplay
            label="Issuer"
            value={value.IssuerID?.[0]}
            meta={CardAccountFieldMeta.IssuerID}
          />

          <IdentifierDisplay
            label="Issue Number"
            value={value.IssueNumberID?.[0]}
            meta={CardAccountFieldMeta.IssueNumberID}
          />

          <IdentifierDisplay
            label="CV2"
            value={value.CV2ID?.[0]}
            meta={CardAccountFieldMeta.CV2ID}
          />

          <CodeDisplay
            label="Card Chip Code"
            value={value.CardChipCode?.[0]}
            meta={CardAccountFieldMeta.CardChipCode}
          />

          <IdentifierDisplay
            label="Chip Application"
            value={value.ChipApplicationID?.[0]}
            meta={CardAccountFieldMeta.ChipApplicationID}
          />

          <TextDisplay
            label="Holder"
            value={value.HolderName?.[0]}
            meta={CardAccountFieldMeta.HolderName}
          />

          <CodeDisplay
            label="Role Code"
            value={value.RoleCode?.[0]}
            meta={CardAccountFieldMeta.RoleCode}
          />
        </div>
    </div>
  )
}
