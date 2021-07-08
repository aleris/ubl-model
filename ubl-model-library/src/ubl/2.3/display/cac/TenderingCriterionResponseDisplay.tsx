import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterionResponse } from  '../../model/cac/TenderingCriterionResponse'
import { TenderingCriterionResponseField, TenderingCriterionResponseFieldMeta, TenderingCriterionResponseTypeName } from  '../../meta/cac/TenderingCriterionResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CommodityClassificationDisplay } from './CommodityClassificationDisplay'
import { EvidenceSuppliedDisplay } from './EvidenceSuppliedDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { ProcurementProjectLotReferenceDisplay } from './ProcurementProjectLotReferenceDisplay'
import { ResponseValueDisplay } from './ResponseValueDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderingCriterionResponse, void>
  tenderingCriterionResponse: TenderingCriterionResponse[] | undefined
  renderContext: RenderContext
}

export const TenderingCriterionResponseSubElementsMap: SubElementsTemplatesMap<TenderingCriterionResponseField, TenderingCriterionResponse, void> = new Map([
    [
      TenderingCriterionResponseField.UBLExtensions,
      { meta: TenderingCriterionResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderingCriterionResponseField.UBLExtensions}
          meta={TenderingCriterionResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.ID,
      { meta: TenderingCriterionResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingCriterionResponseField.ID}
          meta={TenderingCriterionResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.Name,
      { meta: TenderingCriterionResponseFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionResponseField.Name}
          meta={TenderingCriterionResponseFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.Description,
      { meta: TenderingCriterionResponseFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionResponseField.Description}
          meta={TenderingCriterionResponseFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.ValidatedCriterionPropertyID,
      { meta: TenderingCriterionResponseFieldMeta.ValidatedCriterionPropertyID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingCriterionResponseField.ValidatedCriterionPropertyID}
          meta={TenderingCriterionResponseFieldMeta.ValidatedCriterionPropertyID}
          fieldConfig={fieldConfig}
          identifier={value?.ValidatedCriterionPropertyID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.ConfidentialityLevelCode,
      { meta: TenderingCriterionResponseFieldMeta.ConfidentialityLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionResponseField.ConfidentialityLevelCode}
          meta={TenderingCriterionResponseFieldMeta.ConfidentialityLevelCode}
          fieldConfig={fieldConfig}
          code={value?.ConfidentialityLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.ResponseValue,
      { meta: TenderingCriterionResponseFieldMeta.ResponseValue,
        template: ({value, renderContext, fieldConfig}) => <ResponseValueDisplay
          key={TenderingCriterionResponseField.ResponseValue}
          meta={TenderingCriterionResponseFieldMeta.ResponseValue}
          fieldConfig={fieldConfig}
          responseValue={value?.ResponseValue}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.ApplicablePeriod,
      { meta: TenderingCriterionResponseFieldMeta.ApplicablePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingCriterionResponseField.ApplicablePeriod}
          meta={TenderingCriterionResponseFieldMeta.ApplicablePeriod}
          fieldConfig={fieldConfig}
          period={value?.ApplicablePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.EvidenceSupplied,
      { meta: TenderingCriterionResponseFieldMeta.EvidenceSupplied,
        template: ({value, renderContext, fieldConfig}) => <EvidenceSuppliedDisplay
          key={TenderingCriterionResponseField.EvidenceSupplied}
          meta={TenderingCriterionResponseFieldMeta.EvidenceSupplied}
          fieldConfig={fieldConfig}
          evidenceSupplied={value?.EvidenceSupplied}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.ProcurementProjectLotReference,
      { meta: TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotReferenceDisplay
          key={TenderingCriterionResponseField.ProcurementProjectLotReference}
          meta={TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference}
          fieldConfig={fieldConfig}
          procurementProjectLotReference={value?.ProcurementProjectLotReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionResponseField.CommodityClassification,
      { meta: TenderingCriterionResponseFieldMeta.CommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={TenderingCriterionResponseField.CommodityClassification}
          meta={TenderingCriterionResponseFieldMeta.CommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.CommodityClassification}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderingCriterionResponseDisplay<TFieldMeta>({ meta, fieldConfig, tenderingCriterionResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderingCriterionResponseTypeName,
    meta,
    fieldConfig,
    tenderingCriterionResponse,
    renderContext,
    TenderingCriterionResponseSubElementsMap,
  )
}
