import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Price
  meta: FieldMeta<T>
}

export default function PriceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Price ubl-PriceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Price ubl-UBLExtensions"
          meta={PriceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PriceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Price ubl-Amount ubl-PriceAmount"
          meta={PriceFieldMeta.PriceAmount} 
          value={value.PriceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Price Amount"
              value={itemValue}
              meta={PriceFieldMeta.PriceAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Price ubl-Quantity ubl-BaseQuantity"
          meta={PriceFieldMeta.BaseQuantity} 
          value={value.BaseQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Base Quantity"
              value={itemValue}
              meta={PriceFieldMeta.BaseQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Price ubl-Text ubl-PriceChangeReason"
          meta={PriceFieldMeta.PriceChangeReason} 
          value={value.PriceChangeReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Price Change Reason"
              value={itemValue}
              meta={PriceFieldMeta.PriceChangeReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Price ubl-Code ubl-PriceTypeCode"
          meta={PriceFieldMeta.PriceTypeCode} 
          value={value.PriceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Price Type Code"
              value={itemValue}
              meta={PriceFieldMeta.PriceTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Price ubl-Text ubl-PriceType"
          meta={PriceFieldMeta.PriceType} 
          value={value.PriceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Price Type"
              value={itemValue}
              meta={PriceFieldMeta.PriceType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Price ubl-Numeric ubl-OrderableUnitFactorRate"
          meta={PriceFieldMeta.OrderableUnitFactorRate} 
          value={value.OrderableUnitFactorRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Orderable Unit Factor"
              value={itemValue}
              meta={PriceFieldMeta.OrderableUnitFactorRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Price ubl-Period ubl-ValidityPeriod"
          meta={PriceFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={PriceFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Price ubl-PriceList"
          meta={PriceFieldMeta.PriceList} 
          value={value.PriceList}
          itemDisplay={ (itemValue: PriceList, key: string | number) =>
            <PriceListDisplay
              key={key}
              label="Price List"
              value={itemValue}
              meta={PriceFieldMeta.PriceList}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Price ubl-AllowanceCharge"
          meta={PriceFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={PriceFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Price ubl-ExchangeRate ubl-PricingExchangeRate"
          meta={PriceFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Pricing Exchange Rate"
              value={itemValue}
              meta={PriceFieldMeta.PricingExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Price ubl-AlternativeCurrencyPrice"
          meta={PriceFieldMeta.AlternativeCurrencyPrice} 
          value={value.AlternativeCurrencyPrice}
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
