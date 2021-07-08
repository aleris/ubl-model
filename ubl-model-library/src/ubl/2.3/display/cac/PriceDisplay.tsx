import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Price } from  '../../model/cac/Price'
import { PriceField, PriceFieldMeta, PriceTypeName } from  '../../meta/cac/PriceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { PriceListDisplay } from './PriceListDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Price, void>
  price: Price[] | undefined
  renderContext: RenderContext
}

export const PriceSubElementsMap: SubElementsTemplatesMap<PriceField, Price, void> = new Map([
    [
      PriceField.UBLExtensions,
      { meta: PriceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PriceField.UBLExtensions}
          meta={PriceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.PriceAmount,
      { meta: PriceFieldMeta.PriceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PriceField.PriceAmount}
          meta={PriceFieldMeta.PriceAmount}
          fieldConfig={fieldConfig}
          amount={value?.PriceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.BaseQuantity,
      { meta: PriceFieldMeta.BaseQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={PriceField.BaseQuantity}
          meta={PriceFieldMeta.BaseQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.BaseQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.PriceChangeReason,
      { meta: PriceFieldMeta.PriceChangeReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PriceField.PriceChangeReason}
          meta={PriceFieldMeta.PriceChangeReason}
          fieldConfig={fieldConfig}
          text={value?.PriceChangeReason}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.PriceTypeCode,
      { meta: PriceFieldMeta.PriceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PriceField.PriceTypeCode}
          meta={PriceFieldMeta.PriceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PriceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.PriceType,
      { meta: PriceFieldMeta.PriceType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PriceField.PriceType}
          meta={PriceFieldMeta.PriceType}
          fieldConfig={fieldConfig}
          text={value?.PriceType}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.OrderableUnitFactorRate,
      { meta: PriceFieldMeta.OrderableUnitFactorRate,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={PriceField.OrderableUnitFactorRate}
          meta={PriceFieldMeta.OrderableUnitFactorRate}
          fieldConfig={fieldConfig}
          numeric={value?.OrderableUnitFactorRate}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.ValidityPeriod,
      { meta: PriceFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PriceField.ValidityPeriod}
          meta={PriceFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.PriceList,
      { meta: PriceFieldMeta.PriceList,
        template: ({value, renderContext, fieldConfig}) => <PriceListDisplay
          key={PriceField.PriceList}
          meta={PriceFieldMeta.PriceList}
          fieldConfig={fieldConfig}
          priceList={value?.PriceList}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.AllowanceCharge,
      { meta: PriceFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={PriceField.AllowanceCharge}
          meta={PriceFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.PricingExchangeRate,
      { meta: PriceFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={PriceField.PricingExchangeRate}
          meta={PriceFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      PriceField.AlternativeCurrencyPrice,
      { meta: PriceFieldMeta.AlternativeCurrencyPrice,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={PriceField.AlternativeCurrencyPrice}
          meta={PriceFieldMeta.AlternativeCurrencyPrice}
          fieldConfig={fieldConfig}
          price={value?.AlternativeCurrencyPrice}
          renderContext={renderContext}
        />}
    ]
]) 

export function PriceDisplay<TFieldMeta>({ meta, fieldConfig, price, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PriceTypeName,
    meta,
    fieldConfig,
    price,
    renderContext,
    PriceSubElementsMap,
  )
}
