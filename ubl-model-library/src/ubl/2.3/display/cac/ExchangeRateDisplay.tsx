import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ExchangeRate
  meta: FieldMeta<T>
}

export default function ExchangeRateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ExchangeRateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ExchangeRateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.SourceCurrencyCode} 
          value={value.SourceCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExchangeRateFieldMeta.SourceCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.SourceCurrencyBaseRate} 
          value={value.SourceCurrencyBaseRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ExchangeRateFieldMeta.SourceCurrencyBaseRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.TargetCurrencyCode} 
          value={value.TargetCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExchangeRateFieldMeta.TargetCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.TargetCurrencyBaseRate} 
          value={value.TargetCurrencyBaseRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ExchangeRateFieldMeta.TargetCurrencyBaseRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.ExchangeMarketID} 
          value={value.ExchangeMarketID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExchangeRateFieldMeta.ExchangeMarketID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.CalculationRate} 
          value={value.CalculationRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ExchangeRateFieldMeta.CalculationRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.MathematicOperatorCode} 
          value={value.MathematicOperatorCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExchangeRateFieldMeta.MathematicOperatorCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.Date} 
          value={value.Date}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ExchangeRateFieldMeta.Date} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExchangeRateFieldMeta.ForeignExchangeContract} 
          value={value.ForeignExchangeContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={ExchangeRateFieldMeta.ForeignExchangeContract} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
