import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentDistribution } from  '../../model/cac/DocumentDistribution'
import { DocumentDistributionField, DocumentDistributionFieldMeta, DocumentDistributionTypeName } from  '../../meta/cac/DocumentDistributionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DocumentDistribution, void>
  documentDistribution: DocumentDistribution[] | undefined
  renderContext: RenderContext
}

export const DocumentDistributionSubElementsMap: SubElementsTemplatesMap<DocumentDistributionField, DocumentDistribution, void> = new Map([
    [
      DocumentDistributionField.UBLExtensions,
      { meta: DocumentDistributionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DocumentDistributionField.UBLExtensions}
          meta={DocumentDistributionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentDistributionField.DocumentTypeCode,
      { meta: DocumentDistributionFieldMeta.DocumentTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DocumentDistributionField.DocumentTypeCode}
          meta={DocumentDistributionFieldMeta.DocumentTypeCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentDistributionField.PrintQualifier,
      { meta: DocumentDistributionFieldMeta.PrintQualifier,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DocumentDistributionField.PrintQualifier}
          meta={DocumentDistributionFieldMeta.PrintQualifier}
          fieldConfig={fieldConfig}
          text={value?.PrintQualifier}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentDistributionField.MaximumCopiesNumeric,
      { meta: DocumentDistributionFieldMeta.MaximumCopiesNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={DocumentDistributionField.MaximumCopiesNumeric}
          meta={DocumentDistributionFieldMeta.MaximumCopiesNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumCopiesNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentDistributionField.MaximumOriginalsNumeric,
      { meta: DocumentDistributionFieldMeta.MaximumOriginalsNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={DocumentDistributionField.MaximumOriginalsNumeric}
          meta={DocumentDistributionFieldMeta.MaximumOriginalsNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumOriginalsNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentDistributionField.Party,
      { meta: DocumentDistributionFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentDistributionField.Party}
          meta={DocumentDistributionFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ]
]) 

export function DocumentDistributionDisplay<TFieldMeta>({ meta, fieldConfig, documentDistribution, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DocumentDistributionTypeName,
    meta,
    fieldConfig,
    documentDistribution,
    renderContext,
    DocumentDistributionSubElementsMap,
  )
}
