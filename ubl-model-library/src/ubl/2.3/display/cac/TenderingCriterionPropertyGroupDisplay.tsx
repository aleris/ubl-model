import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterionPropertyGroup } from  '../../model/cac/TenderingCriterionPropertyGroup'
import { TenderingCriterionPropertyGroupField, TenderingCriterionPropertyGroupFieldMeta, TenderingCriterionPropertyGroupTypeName } from  '../../meta/cac/TenderingCriterionPropertyGroupMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { TenderingCriterionPropertyDisplay } from './TenderingCriterionPropertyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderingCriterionPropertyGroup, void>
  tenderingCriterionPropertyGroup: TenderingCriterionPropertyGroup[] | undefined
  renderContext: RenderContext
}

export const TenderingCriterionPropertyGroupSubElementsMap: SubElementsTemplatesMap<TenderingCriterionPropertyGroupField, TenderingCriterionPropertyGroup, void> = new Map([
    [
      TenderingCriterionPropertyGroupField.UBLExtensions,
      { meta: TenderingCriterionPropertyGroupFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderingCriterionPropertyGroupField.UBLExtensions}
          meta={TenderingCriterionPropertyGroupFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.ID,
      { meta: TenderingCriterionPropertyGroupFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingCriterionPropertyGroupField.ID}
          meta={TenderingCriterionPropertyGroupFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.Name,
      { meta: TenderingCriterionPropertyGroupFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionPropertyGroupField.Name}
          meta={TenderingCriterionPropertyGroupFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.Description,
      { meta: TenderingCriterionPropertyGroupFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionPropertyGroupField.Description}
          meta={TenderingCriterionPropertyGroupFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.PropertyGroupTypeCode,
      { meta: TenderingCriterionPropertyGroupFieldMeta.PropertyGroupTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyGroupField.PropertyGroupTypeCode}
          meta={TenderingCriterionPropertyGroupFieldMeta.PropertyGroupTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PropertyGroupTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.FulfilmentIndicator,
      { meta: TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingCriterionPropertyGroupField.FulfilmentIndicator}
          meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FulfilmentIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.FulfilmentIndicatorTypeCode,
      { meta: TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicatorTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyGroupField.FulfilmentIndicatorTypeCode}
          meta={TenderingCriterionPropertyGroupFieldMeta.FulfilmentIndicatorTypeCode}
          fieldConfig={fieldConfig}
          code={value?.FulfilmentIndicatorTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.TenderingCriterionProperty,
      { meta: TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty,
        template: ({value, renderContext, fieldConfig}) => <TenderingCriterionPropertyDisplay
          key={TenderingCriterionPropertyGroupField.TenderingCriterionProperty}
          meta={TenderingCriterionPropertyGroupFieldMeta.TenderingCriterionProperty}
          fieldConfig={fieldConfig}
          tenderingCriterionProperty={value?.TenderingCriterionProperty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyGroupField.SubsidiaryTenderingCriterionPropertyGroup,
      { meta: TenderingCriterionPropertyGroupFieldMeta.SubsidiaryTenderingCriterionPropertyGroup,
        template: ({value, renderContext, fieldConfig}) => <TenderingCriterionPropertyGroupDisplay
          key={TenderingCriterionPropertyGroupField.SubsidiaryTenderingCriterionPropertyGroup}
          meta={TenderingCriterionPropertyGroupFieldMeta.SubsidiaryTenderingCriterionPropertyGroup}
          fieldConfig={fieldConfig}
          tenderingCriterionPropertyGroup={value?.SubsidiaryTenderingCriterionPropertyGroup}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderingCriterionPropertyGroupDisplay<TFieldMeta>({ meta, fieldConfig, tenderingCriterionPropertyGroup, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderingCriterionPropertyGroupTypeName,
    meta,
    fieldConfig,
    tenderingCriterionPropertyGroup,
    renderContext,
    TenderingCriterionPropertyGroupSubElementsMap,
  )
}
