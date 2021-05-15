import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyTaxScheme } from  '../../model/cac/PartyTaxScheme'
import { PartyTaxSchemeFieldMeta } from  '../../meta/cac/PartyTaxSchemeMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TaxSchemeDisplay from './TaxSchemeDisplay'
import { TaxScheme } from '../../model/cac/TaxScheme'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PartyTaxScheme | undefined
  meta: FieldMeta<T>
}

export default function PartyTaxSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PartyTaxScheme">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PartyTaxSchemeFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Registration Name"
            value={value.RegistrationName?.[0]}
            meta={PartyTaxSchemeFieldMeta.RegistrationName}
          />

          <IdentifierDisplay
            label="Company Identifier"
            value={value.CompanyID?.[0]}
            meta={PartyTaxSchemeFieldMeta.CompanyID}
          />

          <CodeDisplay
            label="Tax Level Code"
            value={value.TaxLevelCode?.[0]}
            meta={PartyTaxSchemeFieldMeta.TaxLevelCode}
          />

          <CodeDisplay
            label="Exemption Reason Code"
            value={value.ExemptionReasonCode?.[0]}
            meta={PartyTaxSchemeFieldMeta.ExemptionReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ExemptionReason"
            label="Exemption Reason"
            items={value.ExemptionReason}
            meta={PartyTaxSchemeFieldMeta.ExemptionReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Exemption Reason"
                value={itemValue}
                meta={PartyTaxSchemeFieldMeta.ExemptionReason}
              />
            }
          />

          <AddressDisplay
            label="Registration Address"
            value={value.RegistrationAddress?.[0]}
            meta={PartyTaxSchemeFieldMeta.RegistrationAddress}
          />

          <TaxSchemeDisplay
            label="Tax Scheme"
            value={value.TaxScheme?.[0]}
            meta={PartyTaxSchemeFieldMeta.TaxScheme}
          />
        </div>
    </div>
  )
}
