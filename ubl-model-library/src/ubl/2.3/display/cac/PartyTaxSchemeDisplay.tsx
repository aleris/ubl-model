import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PartyTaxScheme
  meta: FieldMeta<T>
}

export default function PartyTaxSchemeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PartyTaxSchemeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.RegistrationName} 
          value={value.RegistrationName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PartyTaxSchemeFieldMeta.RegistrationName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.CompanyID} 
          value={value.CompanyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PartyTaxSchemeFieldMeta.CompanyID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.TaxLevelCode} 
          value={value.TaxLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PartyTaxSchemeFieldMeta.TaxLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.ExemptionReasonCode} 
          value={value.ExemptionReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PartyTaxSchemeFieldMeta.ExemptionReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.ExemptionReason} 
          value={value.ExemptionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PartyTaxSchemeFieldMeta.ExemptionReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.RegistrationAddress} 
          value={value.RegistrationAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={PartyTaxSchemeFieldMeta.RegistrationAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyTaxSchemeFieldMeta.TaxScheme} 
          value={value.TaxScheme}
          itemDisplay={ (itemValue: TaxScheme, key: string | number) =>
            <TaxSchemeDisplay key={key} meta={PartyTaxSchemeFieldMeta.TaxScheme} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
