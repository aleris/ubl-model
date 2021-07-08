import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsProcessing } from  '../../model/cac/GoodsProcessing'
import { GoodsProcessingField, GoodsProcessingFieldMeta, GoodsProcessingTypeName } from  '../../meta/cac/GoodsProcessingMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CriterionItemDisplay } from './CriterionItemDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<GoodsProcessing, void>
  goodsProcessing: GoodsProcessing[] | undefined
  renderContext: RenderContext
}

export const GoodsProcessingSubElementsMap: SubElementsTemplatesMap<GoodsProcessingField, GoodsProcessing, void> = new Map([
    [
      GoodsProcessingField.UBLExtensions,
      { meta: GoodsProcessingFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GoodsProcessingField.UBLExtensions}
          meta={GoodsProcessingFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.ID,
      { meta: GoodsProcessingFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsProcessingField.ID}
          meta={GoodsProcessingFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.TypeCode,
      { meta: GoodsProcessingFieldMeta.TypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={GoodsProcessingField.TypeCode}
          meta={GoodsProcessingFieldMeta.TypeCode}
          fieldConfig={fieldConfig}
          code={value?.TypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.Description,
      { meta: GoodsProcessingFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsProcessingField.Description}
          meta={GoodsProcessingFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.Note,
      { meta: GoodsProcessingFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsProcessingField.Note}
          meta={GoodsProcessingFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.Period,
      { meta: GoodsProcessingFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={GoodsProcessingField.Period}
          meta={GoodsProcessingFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.ProcessingParty,
      { meta: GoodsProcessingFieldMeta.ProcessingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsProcessingField.ProcessingParty}
          meta={GoodsProcessingFieldMeta.ProcessingParty}
          fieldConfig={fieldConfig}
          party={value?.ProcessingParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.CriterionItem,
      { meta: GoodsProcessingFieldMeta.CriterionItem,
        template: ({value, renderContext, fieldConfig}) => <CriterionItemDisplay
          key={GoodsProcessingField.CriterionItem}
          meta={GoodsProcessingFieldMeta.CriterionItem}
          fieldConfig={fieldConfig}
          criterionItem={value?.CriterionItem}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsProcessingField.SubGoodsProcessing,
      { meta: GoodsProcessingFieldMeta.SubGoodsProcessing,
        template: ({value, renderContext, fieldConfig}) => <GoodsProcessingDisplay
          key={GoodsProcessingField.SubGoodsProcessing}
          meta={GoodsProcessingFieldMeta.SubGoodsProcessing}
          fieldConfig={fieldConfig}
          goodsProcessing={value?.SubGoodsProcessing}
          renderContext={renderContext}
        />}
    ]
]) 

export function GoodsProcessingDisplay<TFieldMeta>({ meta, fieldConfig, goodsProcessing, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GoodsProcessingTypeName,
    meta,
    fieldConfig,
    goodsProcessing,
    renderContext,
    GoodsProcessingSubElementsMap,
  )
}
