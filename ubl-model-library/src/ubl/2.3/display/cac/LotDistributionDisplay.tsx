import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { LotDistribution } from  '../../model/cac/LotDistribution'
import { LotDistributionField, LotDistributionFieldMeta, LotDistributionTypeName } from  '../../meta/cac/LotDistributionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { LotsGroupDisplay } from './LotsGroupDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<LotDistribution, void>
  lotDistribution: LotDistribution[] | undefined
  renderContext: RenderContext
}

export const LotDistributionSubElementsMap: SubElementsTemplatesMap<LotDistributionField, LotDistribution, void> = new Map([
    [
      LotDistributionField.UBLExtensions,
      { meta: LotDistributionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LotDistributionField.UBLExtensions}
          meta={LotDistributionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LotDistributionField.MaximumLotsAwardedNumeric,
      { meta: LotDistributionFieldMeta.MaximumLotsAwardedNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={LotDistributionField.MaximumLotsAwardedNumeric}
          meta={LotDistributionFieldMeta.MaximumLotsAwardedNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumLotsAwardedNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      LotDistributionField.MaximumLotsSubmittedNumeric,
      { meta: LotDistributionFieldMeta.MaximumLotsSubmittedNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={LotDistributionField.MaximumLotsSubmittedNumeric}
          meta={LotDistributionFieldMeta.MaximumLotsSubmittedNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumLotsSubmittedNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      LotDistributionField.GroupingLots,
      { meta: LotDistributionFieldMeta.GroupingLots,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LotDistributionField.GroupingLots}
          meta={LotDistributionFieldMeta.GroupingLots}
          fieldConfig={fieldConfig}
          text={value?.GroupingLots}
          renderContext={renderContext}
        />}
    ],

    [
      LotDistributionField.LotsGroup,
      { meta: LotDistributionFieldMeta.LotsGroup,
        template: ({value, renderContext, fieldConfig}) => <LotsGroupDisplay
          key={LotDistributionField.LotsGroup}
          meta={LotDistributionFieldMeta.LotsGroup}
          fieldConfig={fieldConfig}
          lotsGroup={value?.LotsGroup}
          renderContext={renderContext}
        />}
    ]
]) 

export function LotDistributionDisplay<TFieldMeta>({ meta, fieldConfig, lotDistribution, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LotDistributionTypeName,
    meta,
    fieldConfig,
    lotDistribution,
    renderContext,
    LotDistributionSubElementsMap,
  )
}
