import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ImmobilizedSecurity } from  '../../model/cac/ImmobilizedSecurity'
import { ImmobilizedSecurityFieldMeta } from  '../../meta/cac/ImmobilizedSecurityMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ImmobilizedSecurity | undefined
  meta: FieldMeta<T>
}

export default function ImmobilizedSecurityDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ImmobilizedSecurity">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ImmobilizedSecurityFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Immobilization Certificate Identifier"
            value={value.ImmobilizationCertificateID?.[0]}
            meta={ImmobilizedSecurityFieldMeta.ImmobilizationCertificateID}
          />

          <IdentifierDisplay
            label="Security Identifier"
            value={value.SecurityID?.[0]}
            meta={ImmobilizedSecurityFieldMeta.SecurityID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ImmobilizedSecurityFieldMeta.IssueDate}
          />

          <AmountDisplay
            label="Face Value"
            value={value.FaceValueAmount?.[0]}
            meta={ImmobilizedSecurityFieldMeta.FaceValueAmount}
          />

          <AmountDisplay
            label="Market Value"
            value={value.MarketValueAmount?.[0]}
            meta={ImmobilizedSecurityFieldMeta.MarketValueAmount}
          />

          <QuantityDisplay
            label="Shares Number"
            value={value.SharesNumberQuantity?.[0]}
            meta={ImmobilizedSecurityFieldMeta.SharesNumberQuantity}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={ImmobilizedSecurityFieldMeta.IssuerParty}
          />
        </div>
    </div>
  )
}
