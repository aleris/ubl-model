import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TelecommunicationsService } from  '../../model/cac/TelecommunicationsService'
import { TelecommunicationsServiceField, TelecommunicationsServiceFieldMeta, TelecommunicationsServiceTypeName } from  '../../meta/cac/TelecommunicationsServiceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CountryDisplay } from './CountryDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DutyDisplay } from './DutyDisplay'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PriceDisplay } from './PriceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TelecommunicationsService, void>
  telecommunicationsService: TelecommunicationsService[] | undefined
  renderContext: RenderContext
}

export const TelecommunicationsServiceSubElementsMap: SubElementsTemplatesMap<TelecommunicationsServiceField, TelecommunicationsService, void> = new Map([
    [
      TelecommunicationsServiceField.UBLExtensions,
      { meta: TelecommunicationsServiceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TelecommunicationsServiceField.UBLExtensions}
          meta={TelecommunicationsServiceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.ID,
      { meta: TelecommunicationsServiceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TelecommunicationsServiceField.ID}
          meta={TelecommunicationsServiceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.CallDate,
      { meta: TelecommunicationsServiceFieldMeta.CallDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TelecommunicationsServiceField.CallDate}
          meta={TelecommunicationsServiceFieldMeta.CallDate}
          fieldConfig={fieldConfig}
          date={value?.CallDate}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.CallTime,
      { meta: TelecommunicationsServiceFieldMeta.CallTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TelecommunicationsServiceField.CallTime}
          meta={TelecommunicationsServiceFieldMeta.CallTime}
          fieldConfig={fieldConfig}
          time={value?.CallTime}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.ServiceNumberCalled,
      { meta: TelecommunicationsServiceFieldMeta.ServiceNumberCalled,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsServiceField.ServiceNumberCalled}
          meta={TelecommunicationsServiceFieldMeta.ServiceNumberCalled}
          fieldConfig={fieldConfig}
          text={value?.ServiceNumberCalled}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.TelecommunicationsServiceCategory,
      { meta: TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategory,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsServiceField.TelecommunicationsServiceCategory}
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategory}
          fieldConfig={fieldConfig}
          text={value?.TelecommunicationsServiceCategory}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.TelecommunicationsServiceCategoryCode,
      { meta: TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategoryCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TelecommunicationsServiceField.TelecommunicationsServiceCategoryCode}
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategoryCode}
          fieldConfig={fieldConfig}
          code={value?.TelecommunicationsServiceCategoryCode}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.MovieTitle,
      { meta: TelecommunicationsServiceFieldMeta.MovieTitle,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsServiceField.MovieTitle}
          meta={TelecommunicationsServiceFieldMeta.MovieTitle}
          fieldConfig={fieldConfig}
          text={value?.MovieTitle}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.RoamingPartnerName,
      { meta: TelecommunicationsServiceFieldMeta.RoamingPartnerName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsServiceField.RoamingPartnerName}
          meta={TelecommunicationsServiceFieldMeta.RoamingPartnerName}
          fieldConfig={fieldConfig}
          text={value?.RoamingPartnerName}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.PayPerView,
      { meta: TelecommunicationsServiceFieldMeta.PayPerView,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsServiceField.PayPerView}
          meta={TelecommunicationsServiceFieldMeta.PayPerView}
          fieldConfig={fieldConfig}
          text={value?.PayPerView}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.Quantity,
      { meta: TelecommunicationsServiceFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TelecommunicationsServiceField.Quantity}
          meta={TelecommunicationsServiceFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.TelecommunicationsServiceCall,
      { meta: TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCall,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsServiceField.TelecommunicationsServiceCall}
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCall}
          fieldConfig={fieldConfig}
          text={value?.TelecommunicationsServiceCall}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.TelecommunicationsServiceCallCode,
      { meta: TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCallCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TelecommunicationsServiceField.TelecommunicationsServiceCallCode}
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCallCode}
          fieldConfig={fieldConfig}
          code={value?.TelecommunicationsServiceCallCode}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.CallBaseAmount,
      { meta: TelecommunicationsServiceFieldMeta.CallBaseAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TelecommunicationsServiceField.CallBaseAmount}
          meta={TelecommunicationsServiceFieldMeta.CallBaseAmount}
          fieldConfig={fieldConfig}
          amount={value?.CallBaseAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.CallExtensionAmount,
      { meta: TelecommunicationsServiceFieldMeta.CallExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TelecommunicationsServiceField.CallExtensionAmount}
          meta={TelecommunicationsServiceFieldMeta.CallExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.CallExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.Price,
      { meta: TelecommunicationsServiceFieldMeta.Price,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={TelecommunicationsServiceField.Price}
          meta={TelecommunicationsServiceFieldMeta.Price}
          fieldConfig={fieldConfig}
          price={value?.Price}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.Country,
      { meta: TelecommunicationsServiceFieldMeta.Country,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={TelecommunicationsServiceField.Country}
          meta={TelecommunicationsServiceFieldMeta.Country}
          fieldConfig={fieldConfig}
          country={value?.Country}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.ExchangeRate,
      { meta: TelecommunicationsServiceFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={TelecommunicationsServiceField.ExchangeRate}
          meta={TelecommunicationsServiceFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.AllowanceCharge,
      { meta: TelecommunicationsServiceFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={TelecommunicationsServiceField.AllowanceCharge}
          meta={TelecommunicationsServiceFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.TaxTotal,
      { meta: TelecommunicationsServiceFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={TelecommunicationsServiceField.TaxTotal}
          meta={TelecommunicationsServiceFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.CallDuty,
      { meta: TelecommunicationsServiceFieldMeta.CallDuty,
        template: ({value, renderContext, fieldConfig}) => <DutyDisplay
          key={TelecommunicationsServiceField.CallDuty}
          meta={TelecommunicationsServiceFieldMeta.CallDuty}
          fieldConfig={fieldConfig}
          duty={value?.CallDuty}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsServiceField.TimeDuty,
      { meta: TelecommunicationsServiceFieldMeta.TimeDuty,
        template: ({value, renderContext, fieldConfig}) => <DutyDisplay
          key={TelecommunicationsServiceField.TimeDuty}
          meta={TelecommunicationsServiceFieldMeta.TimeDuty}
          fieldConfig={fieldConfig}
          duty={value?.TimeDuty}
          renderContext={renderContext}
        />}
    ]
]) 

export function TelecommunicationsServiceDisplay<TFieldMeta>({ meta, fieldConfig, telecommunicationsService, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TelecommunicationsServiceTypeName,
    meta,
    fieldConfig,
    telecommunicationsService,
    renderContext,
    TelecommunicationsServiceSubElementsMap,
  )
}
