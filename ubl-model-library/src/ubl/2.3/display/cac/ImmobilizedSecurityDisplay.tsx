import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ImmobilizedSecurity
  meta: FieldMeta<T>
}

export default function ImmobilizedSecurityDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ImmobilizedSecurity ubl-ImmobilizedSecurityType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ImmobilizedSecurity ubl-UBLExtensions"
          meta={ImmobilizedSecurityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ImmobilizedSecurity ubl-Identifier ubl-ImmobilizationCertificateID"
          meta={ImmobilizedSecurityFieldMeta.ImmobilizationCertificateID} 
          value={value.ImmobilizationCertificateID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Immobilization Certificate Identifier"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.ImmobilizationCertificateID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ImmobilizedSecurity ubl-Identifier ubl-SecurityID"
          meta={ImmobilizedSecurityFieldMeta.SecurityID} 
          value={value.SecurityID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Security Identifier"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.SecurityID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ImmobilizedSecurity ubl-Date ubl-IssueDate"
          meta={ImmobilizedSecurityFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ImmobilizedSecurity ubl-Amount ubl-FaceValueAmount"
          meta={ImmobilizedSecurityFieldMeta.FaceValueAmount} 
          value={value.FaceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Face Value"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.FaceValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ImmobilizedSecurity ubl-Amount ubl-MarketValueAmount"
          meta={ImmobilizedSecurityFieldMeta.MarketValueAmount} 
          value={value.MarketValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Market Value"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.MarketValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ImmobilizedSecurity ubl-Quantity ubl-SharesNumberQuantity"
          meta={ImmobilizedSecurityFieldMeta.SharesNumberQuantity} 
          value={value.SharesNumberQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Shares Number"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.SharesNumberQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ImmobilizedSecurity ubl-Party ubl-IssuerParty"
          meta={ImmobilizedSecurityFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={ImmobilizedSecurityFieldMeta.IssuerParty}
            />
          }
        />
        </div>
    </div>
  )
}
