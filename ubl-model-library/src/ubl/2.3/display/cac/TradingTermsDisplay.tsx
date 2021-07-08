import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradingTerms } from  '../../model/cac/TradingTerms'
import { TradingTermsField, TradingTermsFieldMeta, TradingTermsTypeName } from  '../../meta/cac/TradingTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TradingTerms, void>
  tradingTerms: TradingTerms[] | undefined
  renderContext: RenderContext
}

export const TradingTermsSubElementsMap: SubElementsTemplatesMap<TradingTermsField, TradingTerms, void> = new Map([
    [
      TradingTermsField.UBLExtensions,
      { meta: TradingTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TradingTermsField.UBLExtensions}
          meta={TradingTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TradingTermsField.Information,
      { meta: TradingTermsFieldMeta.Information,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TradingTermsField.Information}
          meta={TradingTermsFieldMeta.Information}
          fieldConfig={fieldConfig}
          text={value?.Information}
          renderContext={renderContext}
        />}
    ],

    [
      TradingTermsField.Reference,
      { meta: TradingTermsFieldMeta.Reference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TradingTermsField.Reference}
          meta={TradingTermsFieldMeta.Reference}
          fieldConfig={fieldConfig}
          text={value?.Reference}
          renderContext={renderContext}
        />}
    ],

    [
      TradingTermsField.ApplicableAddress,
      { meta: TradingTermsFieldMeta.ApplicableAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={TradingTermsField.ApplicableAddress}
          meta={TradingTermsFieldMeta.ApplicableAddress}
          fieldConfig={fieldConfig}
          address={value?.ApplicableAddress}
          renderContext={renderContext}
        />}
    ]
]) 

export function TradingTermsDisplay<TFieldMeta>({ meta, fieldConfig, tradingTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TradingTermsTypeName,
    meta,
    fieldConfig,
    tradingTerms,
    renderContext,
    TradingTermsSubElementsMap,
  )
}
