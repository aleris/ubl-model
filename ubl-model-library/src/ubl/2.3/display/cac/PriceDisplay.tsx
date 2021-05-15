import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: Price | undefined
  meta: FieldMeta<T>
}

export default function PriceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Price">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PriceFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Price Amount"
            value={value.PriceAmount?.[0]}
            meta={PriceFieldMeta.PriceAmount}
          />

          <QuantityDisplay
            label="Base Quantity"
            value={value.BaseQuantity?.[0]}
            meta={PriceFieldMeta.BaseQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PriceChangeReason"
            label="Price Change Reason"
            items={value.PriceChangeReason}
            meta={PriceFieldMeta.PriceChangeReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Price Change Reason"
                value={itemValue}
                meta={PriceFieldMeta.PriceChangeReason}
              />
            }
          />

          <CodeDisplay
            label="Price Type Code"
            value={value.PriceTypeCode?.[0]}
            meta={PriceFieldMeta.PriceTypeCode}
          />

          <TextDisplay
            label="Price Type"
            value={value.PriceType?.[0]}
            meta={PriceFieldMeta.PriceType}
          />

          <NumericDisplay
            label="Orderable Unit Factor"
            value={value.OrderableUnitFactorRate?.[0]}
            meta={PriceFieldMeta.OrderableUnitFactorRate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={PriceFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={PriceFieldMeta.ValidityPeriod}
              />
            }
          />

          <PriceListDisplay
            label="Price List"
            value={value.PriceList?.[0]}
            meta={PriceFieldMeta.PriceList}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={PriceFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={PriceFieldMeta.AllowanceCharge}
              />
            }
          />

          <ExchangeRateDisplay
            label="Pricing Exchange Rate"
            value={value.PricingExchangeRate?.[0]}
            meta={PriceFieldMeta.PricingExchangeRate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Price ubl-AlternativeCurrencyPrice"
            label="Alternative Currency Price"
            items={value.AlternativeCurrencyPrice}
            meta={PriceFieldMeta.AlternativeCurrencyPrice} 
            itemDisplay={ (itemValue: Price, key: string | number) =>
              <PriceDisplay
                key={key}
                label="Alternative Currency Price"
                value={itemValue}
                meta={PriceFieldMeta.AlternativeCurrencyPrice}
              />
            }
          />
        </div>
    </div>
  )
}
