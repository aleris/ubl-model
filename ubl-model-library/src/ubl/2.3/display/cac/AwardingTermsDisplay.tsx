import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardingTerms } from  '../../model/cac/AwardingTerms'
import { AwardingTermsField, AwardingTermsFieldMeta, AwardingTermsTypeName } from  '../../meta/cac/AwardingTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AwardingCriterionDisplay } from './AwardingCriterionDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PersonDisplay } from './PersonDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AwardingTerms, void>
  awardingTerms: AwardingTerms[] | undefined
  renderContext: RenderContext
}

export const AwardingTermsSubElementsMap: SubElementsTemplatesMap<AwardingTermsField, AwardingTerms, void> = new Map([
    [
      AwardingTermsField.UBLExtensions,
      { meta: AwardingTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AwardingTermsField.UBLExtensions}
          meta={AwardingTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.WeightingAlgorithmCode,
      { meta: AwardingTermsFieldMeta.WeightingAlgorithmCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AwardingTermsField.WeightingAlgorithmCode}
          meta={AwardingTermsFieldMeta.WeightingAlgorithmCode}
          fieldConfig={fieldConfig}
          code={value?.WeightingAlgorithmCode}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.Description,
      { meta: AwardingTermsFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingTermsField.Description}
          meta={AwardingTermsFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.TechnicalCommitteeDescription,
      { meta: AwardingTermsFieldMeta.TechnicalCommitteeDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingTermsField.TechnicalCommitteeDescription}
          meta={AwardingTermsFieldMeta.TechnicalCommitteeDescription}
          fieldConfig={fieldConfig}
          text={value?.TechnicalCommitteeDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.LowTendersDescription,
      { meta: AwardingTermsFieldMeta.LowTendersDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingTermsField.LowTendersDescription}
          meta={AwardingTermsFieldMeta.LowTendersDescription}
          fieldConfig={fieldConfig}
          text={value?.LowTendersDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.PrizeIndicator,
      { meta: AwardingTermsFieldMeta.PrizeIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AwardingTermsField.PrizeIndicator}
          meta={AwardingTermsFieldMeta.PrizeIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PrizeIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.PrizeDescription,
      { meta: AwardingTermsFieldMeta.PrizeDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingTermsField.PrizeDescription}
          meta={AwardingTermsFieldMeta.PrizeDescription}
          fieldConfig={fieldConfig}
          text={value?.PrizeDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.PaymentDescription,
      { meta: AwardingTermsFieldMeta.PaymentDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingTermsField.PaymentDescription}
          meta={AwardingTermsFieldMeta.PaymentDescription}
          fieldConfig={fieldConfig}
          text={value?.PaymentDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.FollowupContractIndicator,
      { meta: AwardingTermsFieldMeta.FollowupContractIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AwardingTermsField.FollowupContractIndicator}
          meta={AwardingTermsFieldMeta.FollowupContractIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FollowupContractIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.BindingOnBuyerIndicator,
      { meta: AwardingTermsFieldMeta.BindingOnBuyerIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AwardingTermsField.BindingOnBuyerIndicator}
          meta={AwardingTermsFieldMeta.BindingOnBuyerIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.BindingOnBuyerIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.NoFurtherNegotiationIndicator,
      { meta: AwardingTermsFieldMeta.NoFurtherNegotiationIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AwardingTermsField.NoFurtherNegotiationIndicator}
          meta={AwardingTermsFieldMeta.NoFurtherNegotiationIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.NoFurtherNegotiationIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.AwardingCriterion,
      { meta: AwardingTermsFieldMeta.AwardingCriterion,
        template: ({value, renderContext, fieldConfig}) => <AwardingCriterionDisplay
          key={AwardingTermsField.AwardingCriterion}
          meta={AwardingTermsFieldMeta.AwardingCriterion}
          fieldConfig={fieldConfig}
          awardingCriterion={value?.AwardingCriterion}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingTermsField.TechnicalCommitteePerson,
      { meta: AwardingTermsFieldMeta.TechnicalCommitteePerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={AwardingTermsField.TechnicalCommitteePerson}
          meta={AwardingTermsFieldMeta.TechnicalCommitteePerson}
          fieldConfig={fieldConfig}
          person={value?.TechnicalCommitteePerson}
          renderContext={renderContext}
        />}
    ]
]) 

export function AwardingTermsDisplay<TFieldMeta>({ meta, fieldConfig, awardingTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AwardingTermsTypeName,
    meta,
    fieldConfig,
    awardingTerms,
    renderContext,
    AwardingTermsSubElementsMap,
  )
}
