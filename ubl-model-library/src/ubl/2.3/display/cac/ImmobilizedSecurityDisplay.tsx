import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ImmobilizedSecurity
  meta: FieldMeta<T>
}

export default function ImmobilizedSecurityDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ImmobilizedSecurityFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.ImmobilizationCertificateID} 
          value={value.ImmobilizationCertificateID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ImmobilizedSecurityFieldMeta.ImmobilizationCertificateID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.SecurityID} 
          value={value.SecurityID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ImmobilizedSecurityFieldMeta.SecurityID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ImmobilizedSecurityFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.FaceValueAmount} 
          value={value.FaceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ImmobilizedSecurityFieldMeta.FaceValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.MarketValueAmount} 
          value={value.MarketValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ImmobilizedSecurityFieldMeta.MarketValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.SharesNumberQuantity} 
          value={value.SharesNumberQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ImmobilizedSecurityFieldMeta.SharesNumberQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ImmobilizedSecurityFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ImmobilizedSecurityFieldMeta.IssuerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
