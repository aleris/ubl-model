import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterion } from  '../../model/cac/TenderingCriterion'
import { TenderingCriterionField, TenderingCriterionFieldMeta, TenderingCriterionTypeName } from  '../../meta/cac/TenderingCriterionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CommodityClassificationDisplay } from './CommodityClassificationDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LegislationDisplay } from './LegislationDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { ProcurementProjectLotReferenceDisplay } from './ProcurementProjectLotReferenceDisplay'
import { TenderingCriterionPropertyGroupDisplay } from './TenderingCriterionPropertyGroupDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderingCriterion, void>
  tenderingCriterion: TenderingCriterion[] | undefined
  renderContext: RenderContext
}

export const TenderingCriterionSubElementsMap: SubElementsTemplatesMap<TenderingCriterionField, TenderingCriterion, void> = new Map([
    [
      TenderingCriterionField.UBLExtensions,
      { meta: TenderingCriterionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderingCriterionField.UBLExtensions}
          meta={TenderingCriterionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.ID,
      { meta: TenderingCriterionFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingCriterionField.ID}
          meta={TenderingCriterionFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.CriterionTypeCode,
      { meta: TenderingCriterionFieldMeta.CriterionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionField.CriterionTypeCode}
          meta={TenderingCriterionFieldMeta.CriterionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CriterionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.Name,
      { meta: TenderingCriterionFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionField.Name}
          meta={TenderingCriterionFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.Description,
      { meta: TenderingCriterionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionField.Description}
          meta={TenderingCriterionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.WeightNumeric,
      { meta: TenderingCriterionFieldMeta.WeightNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TenderingCriterionField.WeightNumeric}
          meta={TenderingCriterionFieldMeta.WeightNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.WeightNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.FulfilmentIndicator,
      { meta: TenderingCriterionFieldMeta.FulfilmentIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingCriterionField.FulfilmentIndicator}
          meta={TenderingCriterionFieldMeta.FulfilmentIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FulfilmentIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.FulfilmentIndicatorTypeCode,
      { meta: TenderingCriterionFieldMeta.FulfilmentIndicatorTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionField.FulfilmentIndicatorTypeCode}
          meta={TenderingCriterionFieldMeta.FulfilmentIndicatorTypeCode}
          fieldConfig={fieldConfig}
          code={value?.FulfilmentIndicatorTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.EvaluationMethodTypeCode,
      { meta: TenderingCriterionFieldMeta.EvaluationMethodTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionField.EvaluationMethodTypeCode}
          meta={TenderingCriterionFieldMeta.EvaluationMethodTypeCode}
          fieldConfig={fieldConfig}
          code={value?.EvaluationMethodTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.WeightingConsiderationDescription,
      { meta: TenderingCriterionFieldMeta.WeightingConsiderationDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionField.WeightingConsiderationDescription}
          meta={TenderingCriterionFieldMeta.WeightingConsiderationDescription}
          fieldConfig={fieldConfig}
          text={value?.WeightingConsiderationDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.ProcurementProjectLotReference,
      { meta: TenderingCriterionFieldMeta.ProcurementProjectLotReference,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotReferenceDisplay
          key={TenderingCriterionField.ProcurementProjectLotReference}
          meta={TenderingCriterionFieldMeta.ProcurementProjectLotReference}
          fieldConfig={fieldConfig}
          procurementProjectLotReference={value?.ProcurementProjectLotReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.CommodityClassification,
      { meta: TenderingCriterionFieldMeta.CommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={TenderingCriterionField.CommodityClassification}
          meta={TenderingCriterionFieldMeta.CommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.CommodityClassification}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.SubTenderingCriterion,
      { meta: TenderingCriterionFieldMeta.SubTenderingCriterion,
        template: ({value, renderContext, fieldConfig}) => <TenderingCriterionDisplay
          key={TenderingCriterionField.SubTenderingCriterion}
          meta={TenderingCriterionFieldMeta.SubTenderingCriterion}
          fieldConfig={fieldConfig}
          tenderingCriterion={value?.SubTenderingCriterion}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.Legislation,
      { meta: TenderingCriterionFieldMeta.Legislation,
        template: ({value, renderContext, fieldConfig}) => <LegislationDisplay
          key={TenderingCriterionField.Legislation}
          meta={TenderingCriterionFieldMeta.Legislation}
          fieldConfig={fieldConfig}
          legislation={value?.Legislation}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionField.TenderingCriterionPropertyGroup,
      { meta: TenderingCriterionFieldMeta.TenderingCriterionPropertyGroup,
        template: ({value, renderContext, fieldConfig}) => <TenderingCriterionPropertyGroupDisplay
          key={TenderingCriterionField.TenderingCriterionPropertyGroup}
          meta={TenderingCriterionFieldMeta.TenderingCriterionPropertyGroup}
          fieldConfig={fieldConfig}
          tenderingCriterionPropertyGroup={value?.TenderingCriterionPropertyGroup}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderingCriterionDisplay<TFieldMeta>({ meta, fieldConfig, tenderingCriterion, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderingCriterionTypeName,
    meta,
    fieldConfig,
    tenderingCriterion,
    renderContext,
    TenderingCriterionSubElementsMap,
  )
}
