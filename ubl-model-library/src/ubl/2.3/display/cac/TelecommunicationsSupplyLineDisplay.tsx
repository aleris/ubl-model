import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TelecommunicationsSupplyLine } from  '../../model/cac/TelecommunicationsSupplyLine'
import { TelecommunicationsSupplyLineField, TelecommunicationsSupplyLineFieldMeta, TelecommunicationsSupplyLineTypeName } from  '../../meta/cac/TelecommunicationsSupplyLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TelecommunicationsServiceDisplay } from './TelecommunicationsServiceDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TelecommunicationsSupplyLine, void>
  telecommunicationsSupplyLine: TelecommunicationsSupplyLine[] | undefined
  renderContext: RenderContext
}

export const TelecommunicationsSupplyLineSubElementsMap: SubElementsTemplatesMap<TelecommunicationsSupplyLineField, TelecommunicationsSupplyLine, void> = new Map([
    [
      TelecommunicationsSupplyLineField.UBLExtensions,
      { meta: TelecommunicationsSupplyLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TelecommunicationsSupplyLineField.UBLExtensions}
          meta={TelecommunicationsSupplyLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.ID,
      { meta: TelecommunicationsSupplyLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TelecommunicationsSupplyLineField.ID}
          meta={TelecommunicationsSupplyLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.PhoneNumber,
      { meta: TelecommunicationsSupplyLineFieldMeta.PhoneNumber,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsSupplyLineField.PhoneNumber}
          meta={TelecommunicationsSupplyLineFieldMeta.PhoneNumber}
          fieldConfig={fieldConfig}
          text={value?.PhoneNumber}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.Description,
      { meta: TelecommunicationsSupplyLineFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsSupplyLineField.Description}
          meta={TelecommunicationsSupplyLineFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.LineExtensionAmount,
      { meta: TelecommunicationsSupplyLineFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TelecommunicationsSupplyLineField.LineExtensionAmount}
          meta={TelecommunicationsSupplyLineFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.TaxInclusiveLineExtensionAmount,
      { meta: TelecommunicationsSupplyLineFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TelecommunicationsSupplyLineField.TaxInclusiveLineExtensionAmount}
          meta={TelecommunicationsSupplyLineFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.ExchangeRate,
      { meta: TelecommunicationsSupplyLineFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={TelecommunicationsSupplyLineField.ExchangeRate}
          meta={TelecommunicationsSupplyLineFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.AllowanceCharge,
      { meta: TelecommunicationsSupplyLineFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={TelecommunicationsSupplyLineField.AllowanceCharge}
          meta={TelecommunicationsSupplyLineFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.TaxTotal,
      { meta: TelecommunicationsSupplyLineFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={TelecommunicationsSupplyLineField.TaxTotal}
          meta={TelecommunicationsSupplyLineFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyLineField.TelecommunicationsService,
      { meta: TelecommunicationsSupplyLineFieldMeta.TelecommunicationsService,
        template: ({value, renderContext, fieldConfig}) => <TelecommunicationsServiceDisplay
          key={TelecommunicationsSupplyLineField.TelecommunicationsService}
          meta={TelecommunicationsSupplyLineFieldMeta.TelecommunicationsService}
          fieldConfig={fieldConfig}
          telecommunicationsService={value?.TelecommunicationsService}
          renderContext={renderContext}
        />}
    ]
]) 

export function TelecommunicationsSupplyLineDisplay<TFieldMeta>({ meta, fieldConfig, telecommunicationsSupplyLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TelecommunicationsSupplyLineTypeName,
    meta,
    fieldConfig,
    telecommunicationsSupplyLine,
    renderContext,
    TelecommunicationsSupplyLineSubElementsMap,
  )
}
