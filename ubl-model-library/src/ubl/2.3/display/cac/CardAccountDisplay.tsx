import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CardAccount
  meta: FieldMeta<T>
}

export default function CardAccountDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CardAccount ubl-CardAccountType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CardAccount ubl-UBLExtensions"
          meta={CardAccountFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CardAccountFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Identifier ubl-PrimaryAccountNumberID"
          meta={CardAccountFieldMeta.PrimaryAccountNumberID} 
          value={value.PrimaryAccountNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Primary Account Number"
              value={itemValue}
              meta={CardAccountFieldMeta.PrimaryAccountNumberID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Identifier ubl-NetworkID"
          meta={CardAccountFieldMeta.NetworkID} 
          value={value.NetworkID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Network"
              value={itemValue}
              meta={CardAccountFieldMeta.NetworkID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Code ubl-CardTypeCode"
          meta={CardAccountFieldMeta.CardTypeCode} 
          value={value.CardTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Card Type Code"
              value={itemValue}
              meta={CardAccountFieldMeta.CardTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Date ubl-ValidityStartDate"
          meta={CardAccountFieldMeta.ValidityStartDate} 
          value={value.ValidityStartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Validity Start Date"
              value={itemValue}
              meta={CardAccountFieldMeta.ValidityStartDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Date ubl-ExpiryDate"
          meta={CardAccountFieldMeta.ExpiryDate} 
          value={value.ExpiryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Expiry Date"
              value={itemValue}
              meta={CardAccountFieldMeta.ExpiryDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Identifier ubl-IssuerID"
          meta={CardAccountFieldMeta.IssuerID} 
          value={value.IssuerID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Issuer"
              value={itemValue}
              meta={CardAccountFieldMeta.IssuerID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Identifier ubl-IssueNumberID"
          meta={CardAccountFieldMeta.IssueNumberID} 
          value={value.IssueNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Issue Number"
              value={itemValue}
              meta={CardAccountFieldMeta.IssueNumberID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Identifier ubl-CV2ID"
          meta={CardAccountFieldMeta.CV2ID} 
          value={value.CV2ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="CV2"
              value={itemValue}
              meta={CardAccountFieldMeta.CV2ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Code ubl-CardChipCode"
          meta={CardAccountFieldMeta.CardChipCode} 
          value={value.CardChipCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Card Chip Code"
              value={itemValue}
              meta={CardAccountFieldMeta.CardChipCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Identifier ubl-ChipApplicationID"
          meta={CardAccountFieldMeta.ChipApplicationID} 
          value={value.ChipApplicationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Chip Application"
              value={itemValue}
              meta={CardAccountFieldMeta.ChipApplicationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Text ubl-HolderName"
          meta={CardAccountFieldMeta.HolderName} 
          value={value.HolderName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Holder"
              value={itemValue}
              meta={CardAccountFieldMeta.HolderName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CardAccount ubl-Code ubl-RoleCode"
          meta={CardAccountFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Role Code"
              value={itemValue}
              meta={CardAccountFieldMeta.RoleCode}
            />
          }
        />
        </div>
    </div>
  )
}
