import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: FinancialAccount
  meta: FieldMeta<T>
}

export default function FinancialAccountDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={FinancialAccountFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={FinancialAccountFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FinancialAccountFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FinancialAccountFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.AliasName} 
          value={value.AliasName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FinancialAccountFieldMeta.AliasName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.AccountTypeCode} 
          value={value.AccountTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FinancialAccountFieldMeta.AccountTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.AccountFormatCode} 
          value={value.AccountFormatCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FinancialAccountFieldMeta.AccountFormatCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.CurrencyCode} 
          value={value.CurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FinancialAccountFieldMeta.CurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.PaymentNote} 
          value={value.PaymentNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FinancialAccountFieldMeta.PaymentNote} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.FinancialInstitutionBranch} 
          value={value.FinancialInstitutionBranch}
          itemDisplay={ (itemValue: Branch, key: string | number) =>
            <BranchDisplay key={key} meta={FinancialAccountFieldMeta.FinancialInstitutionBranch} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialAccountFieldMeta.Country} 
          value={value.Country}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={FinancialAccountFieldMeta.Country} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
