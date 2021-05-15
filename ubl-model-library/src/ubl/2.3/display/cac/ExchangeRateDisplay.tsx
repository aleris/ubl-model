import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ExchangeRate | undefined
  meta: FieldMeta<T>
}

export default function ExchangeRateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ExchangeRate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ExchangeRateFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Source Currency Code"
            value={value.SourceCurrencyCode?.[0]}
            meta={ExchangeRateFieldMeta.SourceCurrencyCode}
          />

          <NumericDisplay
            label="Source Currency Base Rate"
            value={value.SourceCurrencyBaseRate?.[0]}
            meta={ExchangeRateFieldMeta.SourceCurrencyBaseRate}
          />

          <CodeDisplay
            label="Target Currency Code"
            value={value.TargetCurrencyCode?.[0]}
            meta={ExchangeRateFieldMeta.TargetCurrencyCode}
          />

          <NumericDisplay
            label="Target Currency Base Rate"
            value={value.TargetCurrencyBaseRate?.[0]}
            meta={ExchangeRateFieldMeta.TargetCurrencyBaseRate}
          />

          <IdentifierDisplay
            label="Exchange Market Identifier"
            value={value.ExchangeMarketID?.[0]}
            meta={ExchangeRateFieldMeta.ExchangeMarketID}
          />

          <NumericDisplay
            label="Calculation Rate"
            value={value.CalculationRate?.[0]}
            meta={ExchangeRateFieldMeta.CalculationRate}
          />

          <CodeDisplay
            label="Mathematic Operator Code"
            value={value.MathematicOperatorCode?.[0]}
            meta={ExchangeRateFieldMeta.MathematicOperatorCode}
          />

          <DateDisplay
            label="Date"
            value={value.Date?.[0]}
            meta={ExchangeRateFieldMeta.Date}
          />

          <ContractDisplay
            label="Foreign Exchange Contract"
            value={value.ForeignExchangeContract?.[0]}
            meta={ExchangeRateFieldMeta.ForeignExchangeContract}
          />
        </div>
    </div>
  )
}
