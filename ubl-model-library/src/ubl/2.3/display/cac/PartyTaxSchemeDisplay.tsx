import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PartyTaxScheme
  meta: FieldMeta<T>
}

export default function PartyTaxSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PartyTaxScheme ubl-PartyTaxSchemeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PartyTaxScheme ubl-UBLExtensions"
          meta={PartyTaxSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyTaxScheme ubl-Text ubl-RegistrationName"
          meta={PartyTaxSchemeFieldMeta.RegistrationName} 
          value={value.RegistrationName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Registration Name"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.RegistrationName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyTaxScheme ubl-Identifier ubl-CompanyID"
          meta={PartyTaxSchemeFieldMeta.CompanyID} 
          value={value.CompanyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Company Identifier"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.CompanyID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyTaxScheme ubl-Code ubl-TaxLevelCode"
          meta={PartyTaxSchemeFieldMeta.TaxLevelCode} 
          value={value.TaxLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Level Code"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.TaxLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyTaxScheme ubl-Code ubl-ExemptionReasonCode"
          meta={PartyTaxSchemeFieldMeta.ExemptionReasonCode} 
          value={value.ExemptionReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Exemption Reason Code"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.ExemptionReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PartyTaxScheme ubl-Text ubl-ExemptionReason"
          meta={PartyTaxSchemeFieldMeta.ExemptionReason} 
          value={value.ExemptionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Exemption Reason"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.ExemptionReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PartyTaxScheme ubl-Address ubl-RegistrationAddress"
          meta={PartyTaxSchemeFieldMeta.RegistrationAddress} 
          value={value.RegistrationAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Registration Address"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.RegistrationAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PartyTaxScheme ubl-TaxScheme"
          meta={PartyTaxSchemeFieldMeta.TaxScheme} 
          value={value.TaxScheme}
          itemDisplay={ (itemValue: TaxScheme, key: string | number) =>
            <TaxSchemeDisplay
              key={key}
              label="Tax Scheme"
              value={itemValue}
              meta={PartyTaxSchemeFieldMeta.TaxScheme}
            />
          }
        />
        </div>
    </div>
  )
}
