import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderedProject } from  '../../model/cac/TenderedProject'
import { TenderedProjectField, TenderedProjectFieldMeta, TenderedProjectTypeName } from  '../../meta/cac/TenderedProjectMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { AwardingCriterionResponseDisplay } from './AwardingCriterionResponseDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { FeeDisplay } from './FeeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MonetaryTotalDisplay } from './MonetaryTotalDisplay'
import { ProcurementProjectLotDisplay } from './ProcurementProjectLotDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TenderLineDisplay } from './TenderLineDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderedProject, void>
  tenderedProject: TenderedProject[] | undefined
  renderContext: RenderContext
}

export const TenderedProjectSubElementsMap: SubElementsTemplatesMap<TenderedProjectField, TenderedProject, void> = new Map([
    [
      TenderedProjectField.UBLExtensions,
      { meta: TenderedProjectFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderedProjectField.UBLExtensions}
          meta={TenderedProjectFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.VariantID,
      { meta: TenderedProjectFieldMeta.VariantID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderedProjectField.VariantID}
          meta={TenderedProjectFieldMeta.VariantID}
          fieldConfig={fieldConfig}
          identifier={value?.VariantID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.FeeAmount,
      { meta: TenderedProjectFieldMeta.FeeAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderedProjectField.FeeAmount}
          meta={TenderedProjectFieldMeta.FeeAmount}
          fieldConfig={fieldConfig}
          amount={value?.FeeAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.FeeDescription,
      { meta: TenderedProjectFieldMeta.FeeDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderedProjectField.FeeDescription}
          meta={TenderedProjectFieldMeta.FeeDescription}
          fieldConfig={fieldConfig}
          text={value?.FeeDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.TenderEnvelopeID,
      { meta: TenderedProjectFieldMeta.TenderEnvelopeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderedProjectField.TenderEnvelopeID}
          meta={TenderedProjectFieldMeta.TenderEnvelopeID}
          fieldConfig={fieldConfig}
          identifier={value?.TenderEnvelopeID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.TenderEnvelopeTypeCode,
      { meta: TenderedProjectFieldMeta.TenderEnvelopeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderedProjectField.TenderEnvelopeTypeCode}
          meta={TenderedProjectFieldMeta.TenderEnvelopeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TenderEnvelopeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.ProcurementProjectLot,
      { meta: TenderedProjectFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={TenderedProjectField.ProcurementProjectLot}
          meta={TenderedProjectFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.EvidenceDocumentReference,
      { meta: TenderedProjectFieldMeta.EvidenceDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderedProjectField.EvidenceDocumentReference}
          meta={TenderedProjectFieldMeta.EvidenceDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.EvidenceDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.TaxTotal,
      { meta: TenderedProjectFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={TenderedProjectField.TaxTotal}
          meta={TenderedProjectFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.LegalMonetaryTotal,
      { meta: TenderedProjectFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={TenderedProjectField.LegalMonetaryTotal}
          meta={TenderedProjectFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.TenderLine,
      { meta: TenderedProjectFieldMeta.TenderLine,
        template: ({value, renderContext, fieldConfig}) => <TenderLineDisplay
          key={TenderedProjectField.TenderLine}
          meta={TenderedProjectFieldMeta.TenderLine}
          fieldConfig={fieldConfig}
          tenderLine={value?.TenderLine}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.AwardingCriterionResponse,
      { meta: TenderedProjectFieldMeta.AwardingCriterionResponse,
        template: ({value, renderContext, fieldConfig}) => <AwardingCriterionResponseDisplay
          key={TenderedProjectField.AwardingCriterionResponse}
          meta={TenderedProjectFieldMeta.AwardingCriterionResponse}
          fieldConfig={fieldConfig}
          awardingCriterionResponse={value?.AwardingCriterionResponse}
          renderContext={renderContext}
        />}
    ],

    [
      TenderedProjectField.AdditionalFee,
      { meta: TenderedProjectFieldMeta.AdditionalFee,
        template: ({value, renderContext, fieldConfig}) => <FeeDisplay
          key={TenderedProjectField.AdditionalFee}
          meta={TenderedProjectFieldMeta.AdditionalFee}
          fieldConfig={fieldConfig}
          fee={value?.AdditionalFee}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderedProjectDisplay<TFieldMeta>({ meta, fieldConfig, tenderedProject, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderedProjectTypeName,
    meta,
    fieldConfig,
    tenderedProject,
    renderContext,
    TenderedProjectSubElementsMap,
  )
}
