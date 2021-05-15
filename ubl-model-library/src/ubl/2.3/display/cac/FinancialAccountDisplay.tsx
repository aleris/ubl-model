import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: FinancialAccount | undefined
  meta: FieldMeta<T>
}

export default function FinancialAccountDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-FinancialAccount">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={FinancialAccountFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={FinancialAccountFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={FinancialAccountFieldMeta.Name}
          />

          <TextDisplay
            label="Alias Name"
            value={value.AliasName?.[0]}
            meta={FinancialAccountFieldMeta.AliasName}
          />

          <CodeDisplay
            label="Account Type Code"
            value={value.AccountTypeCode?.[0]}
            meta={FinancialAccountFieldMeta.AccountTypeCode}
          />

          <CodeDisplay
            label="Account Format Code"
            value={value.AccountFormatCode?.[0]}
            meta={FinancialAccountFieldMeta.AccountFormatCode}
          />

          <CodeDisplay
            label="Currency Code"
            value={value.CurrencyCode?.[0]}
            meta={FinancialAccountFieldMeta.CurrencyCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PaymentNote"
            label="Payment Note"
            items={value.PaymentNote}
            meta={FinancialAccountFieldMeta.PaymentNote} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Payment Note"
                value={itemValue}
                meta={FinancialAccountFieldMeta.PaymentNote}
              />
            }
          />

          <BranchDisplay
            label="Financial Institution Branch"
            value={value.FinancialInstitutionBranch?.[0]}
            meta={FinancialAccountFieldMeta.FinancialInstitutionBranch}
          />

          <CountryDisplay
            label="Country"
            value={value.Country?.[0]}
            meta={FinancialAccountFieldMeta.Country}
          />
        </div>
    </div>
  )
}
