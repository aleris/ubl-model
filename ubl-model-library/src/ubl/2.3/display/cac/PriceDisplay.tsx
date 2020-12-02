import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Price } from  '../../model/cac/Price'
import { PriceFieldMeta } from  '../../meta/cac/PriceMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import PriceListDisplay from './PriceListDisplay'
import { PriceList } from '../../model/cac/PriceList'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Price
  meta: FieldMeta<T>
}

export default function PriceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PriceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PriceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.PriceAmount} 
          value={value.PriceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PriceFieldMeta.PriceAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.BaseQuantity} 
          value={value.BaseQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={PriceFieldMeta.BaseQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.PriceChangeReason} 
          value={value.PriceChangeReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PriceFieldMeta.PriceChangeReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.PriceTypeCode} 
          value={value.PriceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PriceFieldMeta.PriceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.PriceType} 
          value={value.PriceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PriceFieldMeta.PriceType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.OrderableUnitFactorRate} 
          value={value.OrderableUnitFactorRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={PriceFieldMeta.OrderableUnitFactorRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PriceFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.PriceList} 
          value={value.PriceList}
          itemDisplay={ (itemValue: PriceList, key: string | number) =>
            <PriceListDisplay key={key} meta={PriceFieldMeta.PriceList} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={PriceFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={PriceFieldMeta.PricingExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceFieldMeta.AlternativeCurrencyPrice} 
          value={value.AlternativeCurrencyPrice}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={PriceFieldMeta.AlternativeCurrencyPrice} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
