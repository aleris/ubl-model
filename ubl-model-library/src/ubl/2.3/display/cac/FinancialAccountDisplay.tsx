import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { FinancialAccount } from  '../../model/cac/FinancialAccount'
import { FinancialAccountFieldMeta } from  '../../meta/cac/FinancialAccountMeta'
import BranchDisplay from './BranchDisplay'
import { Branch } from '../../model/cac/Branch'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: FinancialAccount
  meta: FieldMeta<T>
}

export default function FinancialAccountDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-FinancialAccount ubl-FinancialAccountType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-FinancialAccount ubl-UBLExtensions"
          meta={FinancialAccountFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={FinancialAccountFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialAccount ubl-Identifier ubl-ID"
          meta={FinancialAccountFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={FinancialAccountFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialAccount ubl-Text ubl-Name"
          meta={FinancialAccountFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={FinancialAccountFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialAccount ubl-Text ubl-AliasName"
          meta={FinancialAccountFieldMeta.AliasName} 
          value={value.AliasName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Alias Name"
              value={itemValue}
              meta={FinancialAccountFieldMeta.AliasName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialAccount ubl-Code ubl-AccountTypeCode"
          meta={FinancialAccountFieldMeta.AccountTypeCode} 
          value={value.AccountTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Account Type Code"
              value={itemValue}
              meta={FinancialAccountFieldMeta.AccountTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialAccount ubl-Code ubl-AccountFormatCode"
          meta={FinancialAccountFieldMeta.AccountFormatCode} 
          value={value.AccountFormatCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Account Format Code"
              value={itemValue}
              meta={FinancialAccountFieldMeta.AccountFormatCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialAccount ubl-Code ubl-CurrencyCode"
          meta={FinancialAccountFieldMeta.CurrencyCode} 
          value={value.CurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Currency Code"
              value={itemValue}
              meta={FinancialAccountFieldMeta.CurrencyCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-FinancialAccount ubl-Text ubl-PaymentNote"
          meta={FinancialAccountFieldMeta.PaymentNote} 
          value={value.PaymentNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Payment Note"
              value={itemValue}
              meta={FinancialAccountFieldMeta.PaymentNote}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FinancialAccount ubl-Branch ubl-FinancialInstitutionBranch"
          meta={FinancialAccountFieldMeta.FinancialInstitutionBranch} 
          value={value.FinancialInstitutionBranch}
          itemDisplay={ (itemValue: Branch, key: string | number) =>
            <BranchDisplay
              key={key}
              label="Financial Institution Branch"
              value={itemValue}
              meta={FinancialAccountFieldMeta.FinancialInstitutionBranch}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FinancialAccount ubl-Country"
          meta={FinancialAccountFieldMeta.Country} 
          value={value.Country}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Country"
              value={itemValue}
              meta={FinancialAccountFieldMeta.Country}
            />
          }
        />
        </div>
    </div>
  )
}
