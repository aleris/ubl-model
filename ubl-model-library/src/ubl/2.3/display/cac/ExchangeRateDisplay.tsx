import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExchangeRate } from  '../../model/cac/ExchangeRate'
import { ExchangeRateFieldMeta } from  '../../meta/cac/ExchangeRateMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractDisplay from './ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ExchangeRate
  meta: FieldMeta<T>
}

export default function ExchangeRateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ExchangeRate ubl-ExchangeRateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ExchangeRate ubl-UBLExtensions"
          meta={ExchangeRateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ExchangeRateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Code ubl-SourceCurrencyCode"
          meta={ExchangeRateFieldMeta.SourceCurrencyCode} 
          value={value.SourceCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Source Currency Code"
              value={itemValue}
              meta={ExchangeRateFieldMeta.SourceCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Numeric ubl-SourceCurrencyBaseRate"
          meta={ExchangeRateFieldMeta.SourceCurrencyBaseRate} 
          value={value.SourceCurrencyBaseRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Source Currency Base Rate"
              value={itemValue}
              meta={ExchangeRateFieldMeta.SourceCurrencyBaseRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Code ubl-TargetCurrencyCode"
          meta={ExchangeRateFieldMeta.TargetCurrencyCode} 
          value={value.TargetCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Target Currency Code"
              value={itemValue}
              meta={ExchangeRateFieldMeta.TargetCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Numeric ubl-TargetCurrencyBaseRate"
          meta={ExchangeRateFieldMeta.TargetCurrencyBaseRate} 
          value={value.TargetCurrencyBaseRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Target Currency Base Rate"
              value={itemValue}
              meta={ExchangeRateFieldMeta.TargetCurrencyBaseRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Identifier ubl-ExchangeMarketID"
          meta={ExchangeRateFieldMeta.ExchangeMarketID} 
          value={value.ExchangeMarketID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Exchange Market Identifier"
              value={itemValue}
              meta={ExchangeRateFieldMeta.ExchangeMarketID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Numeric ubl-CalculationRate"
          meta={ExchangeRateFieldMeta.CalculationRate} 
          value={value.CalculationRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Calculation Rate"
              value={itemValue}
              meta={ExchangeRateFieldMeta.CalculationRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Code ubl-MathematicOperatorCode"
          meta={ExchangeRateFieldMeta.MathematicOperatorCode} 
          value={value.MathematicOperatorCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Mathematic Operator Code"
              value={itemValue}
              meta={ExchangeRateFieldMeta.MathematicOperatorCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExchangeRate ubl-Date"
          meta={ExchangeRateFieldMeta.Date} 
          value={value.Date}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Date"
              value={itemValue}
              meta={ExchangeRateFieldMeta.Date}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExchangeRate ubl-Contract ubl-ForeignExchangeContract"
          meta={ExchangeRateFieldMeta.ForeignExchangeContract} 
          value={value.ForeignExchangeContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Foreign Exchange Contract"
              value={itemValue}
              meta={ExchangeRateFieldMeta.ForeignExchangeContract}
            />
          }
        />
        </div>
    </div>
  )
}
