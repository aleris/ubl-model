import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradeFinancing } from  '../../model/cac/TradeFinancing'
import { TradeFinancingField, TradeFinancingFieldMeta, TradeFinancingTypeName } from  '../../meta/cac/TradeFinancingMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ClauseDisplay } from './ClauseDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { FinancialAccountDisplay } from './FinancialAccountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TradeFinancing, void>
  tradeFinancing: TradeFinancing[] | undefined
  renderContext: RenderContext
}

export const TradeFinancingSubElementsMap: SubElementsTemplatesMap<TradeFinancingField, TradeFinancing, void> = new Map([
    [
      TradeFinancingField.UBLExtensions,
      { meta: TradeFinancingFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TradeFinancingField.UBLExtensions}
          meta={TradeFinancingFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TradeFinancingField.ID,
      { meta: TradeFinancingFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TradeFinancingField.ID}
          meta={TradeFinancingFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TradeFinancingField.FinancingInstrumentCode,
      { meta: TradeFinancingFieldMeta.FinancingInstrumentCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TradeFinancingField.FinancingInstrumentCode}
          meta={TradeFinancingFieldMeta.FinancingInstrumentCode}
          fieldConfig={fieldConfig}
          code={value?.FinancingInstrumentCode}
          renderContext={renderContext}
        />}
    ],

    [
      TradeFinancingField.ContractDocumentReference,
      { meta: TradeFinancingFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TradeFinancingField.ContractDocumentReference}
          meta={TradeFinancingFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TradeFinancingField.DocumentReference,
      { meta: TradeFinancingFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TradeFinancingField.DocumentReference}
          meta={TradeFinancingFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TradeFinancingField.FinancingParty,
      { meta: TradeFinancingFieldMeta.FinancingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TradeFinancingField.FinancingParty}
          meta={TradeFinancingFieldMeta.FinancingParty}
          fieldConfig={fieldConfig}
          party={value?.FinancingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TradeFinancingField.FinancingFinancialAccount,
      { meta: TradeFinancingFieldMeta.FinancingFinancialAccount,
        template: ({value, renderContext, fieldConfig}) => <FinancialAccountDisplay
          key={TradeFinancingField.FinancingFinancialAccount}
          meta={TradeFinancingFieldMeta.FinancingFinancialAccount}
          fieldConfig={fieldConfig}
          financialAccount={value?.FinancingFinancialAccount}
          renderContext={renderContext}
        />}
    ],

    [
      TradeFinancingField.Clause,
      { meta: TradeFinancingFieldMeta.Clause,
        template: ({value, renderContext, fieldConfig}) => <ClauseDisplay
          key={TradeFinancingField.Clause}
          meta={TradeFinancingFieldMeta.Clause}
          fieldConfig={fieldConfig}
          clause={value?.Clause}
          renderContext={renderContext}
        />}
    ]
]) 

export function TradeFinancingDisplay<TFieldMeta>({ meta, fieldConfig, tradeFinancing, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TradeFinancingTypeName,
    meta,
    fieldConfig,
    tradeFinancing,
    renderContext,
    TradeFinancingSubElementsMap,
  )
}
