import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProject } from  '../../model/cac/ProcurementProject'
import { ProcurementProjectField, ProcurementProjectFieldMeta, ProcurementProjectTypeName } from  '../../meta/cac/ProcurementProjectMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CommodityClassificationDisplay } from './CommodityClassificationDisplay'
import { ContractExtensionDisplay } from './ContractExtensionDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { ProcurementAdditionalTypeDisplay } from './ProcurementAdditionalTypeDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { RequestedTenderTotalDisplay } from './RequestedTenderTotalDisplay'
import { RequestForTenderLineDisplay } from './RequestForTenderLineDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProcurementProject, void>
  procurementProject: ProcurementProject[] | undefined
  renderContext: RenderContext
}

export const ProcurementProjectSubElementsMap: SubElementsTemplatesMap<ProcurementProjectField, ProcurementProject, void> = new Map([
    [
      ProcurementProjectField.UBLExtensions,
      { meta: ProcurementProjectFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProcurementProjectField.UBLExtensions}
          meta={ProcurementProjectFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.ID,
      { meta: ProcurementProjectFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProcurementProjectField.ID}
          meta={ProcurementProjectFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.Name,
      { meta: ProcurementProjectFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProcurementProjectField.Name}
          meta={ProcurementProjectFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.Description,
      { meta: ProcurementProjectFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProcurementProjectField.Description}
          meta={ProcurementProjectFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.ProcurementTypeCode,
      { meta: ProcurementProjectFieldMeta.ProcurementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ProcurementProjectField.ProcurementTypeCode}
          meta={ProcurementProjectFieldMeta.ProcurementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ProcurementTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.ProcurementSubTypeCode,
      { meta: ProcurementProjectFieldMeta.ProcurementSubTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ProcurementProjectField.ProcurementSubTypeCode}
          meta={ProcurementProjectFieldMeta.ProcurementSubTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ProcurementSubTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.QualityControlCode,
      { meta: ProcurementProjectFieldMeta.QualityControlCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ProcurementProjectField.QualityControlCode}
          meta={ProcurementProjectFieldMeta.QualityControlCode}
          fieldConfig={fieldConfig}
          code={value?.QualityControlCode}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.RequiredFeeAmount,
      { meta: ProcurementProjectFieldMeta.RequiredFeeAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ProcurementProjectField.RequiredFeeAmount}
          meta={ProcurementProjectFieldMeta.RequiredFeeAmount}
          fieldConfig={fieldConfig}
          amount={value?.RequiredFeeAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.FeeDescription,
      { meta: ProcurementProjectFieldMeta.FeeDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProcurementProjectField.FeeDescription}
          meta={ProcurementProjectFieldMeta.FeeDescription}
          fieldConfig={fieldConfig}
          text={value?.FeeDescription}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.RequestedDeliveryDate,
      { meta: ProcurementProjectFieldMeta.RequestedDeliveryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ProcurementProjectField.RequestedDeliveryDate}
          meta={ProcurementProjectFieldMeta.RequestedDeliveryDate}
          fieldConfig={fieldConfig}
          date={value?.RequestedDeliveryDate}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.EstimatedOverallContractQuantity,
      { meta: ProcurementProjectFieldMeta.EstimatedOverallContractQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ProcurementProjectField.EstimatedOverallContractQuantity}
          meta={ProcurementProjectFieldMeta.EstimatedOverallContractQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.EstimatedOverallContractQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.Note,
      { meta: ProcurementProjectFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProcurementProjectField.Note}
          meta={ProcurementProjectFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.SMESuitableIndicator,
      { meta: ProcurementProjectFieldMeta.SMESuitableIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ProcurementProjectField.SMESuitableIndicator}
          meta={ProcurementProjectFieldMeta.SMESuitableIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.SMESuitableIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.RequestedTenderTotal,
      { meta: ProcurementProjectFieldMeta.RequestedTenderTotal,
        template: ({value, renderContext, fieldConfig}) => <RequestedTenderTotalDisplay
          key={ProcurementProjectField.RequestedTenderTotal}
          meta={ProcurementProjectFieldMeta.RequestedTenderTotal}
          fieldConfig={fieldConfig}
          requestedTenderTotal={value?.RequestedTenderTotal}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.MainCommodityClassification,
      { meta: ProcurementProjectFieldMeta.MainCommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={ProcurementProjectField.MainCommodityClassification}
          meta={ProcurementProjectFieldMeta.MainCommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.MainCommodityClassification}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.AdditionalCommodityClassification,
      { meta: ProcurementProjectFieldMeta.AdditionalCommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={ProcurementProjectField.AdditionalCommodityClassification}
          meta={ProcurementProjectFieldMeta.AdditionalCommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.AdditionalCommodityClassification}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.ProcurementAdditionalType,
      { meta: ProcurementProjectFieldMeta.ProcurementAdditionalType,
        template: ({value, renderContext, fieldConfig}) => <ProcurementAdditionalTypeDisplay
          key={ProcurementProjectField.ProcurementAdditionalType}
          meta={ProcurementProjectFieldMeta.ProcurementAdditionalType}
          fieldConfig={fieldConfig}
          procurementAdditionalType={value?.ProcurementAdditionalType}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.RealizedLocation,
      { meta: ProcurementProjectFieldMeta.RealizedLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ProcurementProjectField.RealizedLocation}
          meta={ProcurementProjectFieldMeta.RealizedLocation}
          fieldConfig={fieldConfig}
          location={value?.RealizedLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.PlannedPeriod,
      { meta: ProcurementProjectFieldMeta.PlannedPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ProcurementProjectField.PlannedPeriod}
          meta={ProcurementProjectFieldMeta.PlannedPeriod}
          fieldConfig={fieldConfig}
          period={value?.PlannedPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.ContractExtension,
      { meta: ProcurementProjectFieldMeta.ContractExtension,
        template: ({value, renderContext, fieldConfig}) => <ContractExtensionDisplay
          key={ProcurementProjectField.ContractExtension}
          meta={ProcurementProjectFieldMeta.ContractExtension}
          fieldConfig={fieldConfig}
          contractExtension={value?.ContractExtension}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectField.RequestForTenderLine,
      { meta: ProcurementProjectFieldMeta.RequestForTenderLine,
        template: ({value, renderContext, fieldConfig}) => <RequestForTenderLineDisplay
          key={ProcurementProjectField.RequestForTenderLine}
          meta={ProcurementProjectFieldMeta.RequestForTenderLine}
          fieldConfig={fieldConfig}
          requestForTenderLine={value?.RequestForTenderLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProcurementProjectDisplay<TFieldMeta>({ meta, fieldConfig, procurementProject, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProcurementProjectTypeName,
    meta,
    fieldConfig,
    procurementProject,
    renderContext,
    ProcurementProjectSubElementsMap,
  )
}
