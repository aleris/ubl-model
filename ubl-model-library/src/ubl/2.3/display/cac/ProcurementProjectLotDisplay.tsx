import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLot } from  '../../model/cac/ProcurementProjectLot'
import { ProcurementProjectLotField, ProcurementProjectLotFieldMeta, ProcurementProjectLotTypeName } from  '../../meta/cac/ProcurementProjectLotMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ProcurementProjectDisplay } from './ProcurementProjectDisplay'
import { TenderingProcessDisplay } from './TenderingProcessDisplay'
import { TenderingTermsDisplay } from './TenderingTermsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProcurementProjectLot, void>
  procurementProjectLot: ProcurementProjectLot[] | undefined
  renderContext: RenderContext
}

export const ProcurementProjectLotSubElementsMap: SubElementsTemplatesMap<ProcurementProjectLotField, ProcurementProjectLot, void> = new Map([
    [
      ProcurementProjectLotField.UBLExtensions,
      { meta: ProcurementProjectLotFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProcurementProjectLotField.UBLExtensions}
          meta={ProcurementProjectLotFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.ID,
      { meta: ProcurementProjectLotFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProcurementProjectLotField.ID}
          meta={ProcurementProjectLotFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.LegalDocumentReference,
      { meta: ProcurementProjectLotFieldMeta.LegalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProcurementProjectLotField.LegalDocumentReference}
          meta={ProcurementProjectLotFieldMeta.LegalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.LegalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.TechnicalDocumentReference,
      { meta: ProcurementProjectLotFieldMeta.TechnicalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProcurementProjectLotField.TechnicalDocumentReference}
          meta={ProcurementProjectLotFieldMeta.TechnicalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TechnicalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.RequiredDocumentReference,
      { meta: ProcurementProjectLotFieldMeta.RequiredDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProcurementProjectLotField.RequiredDocumentReference}
          meta={ProcurementProjectLotFieldMeta.RequiredDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.RequiredDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.ProvidedDocumentReference,
      { meta: ProcurementProjectLotFieldMeta.ProvidedDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProcurementProjectLotField.ProvidedDocumentReference}
          meta={ProcurementProjectLotFieldMeta.ProvidedDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ProvidedDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.AdditionalDocumentReference,
      { meta: ProcurementProjectLotFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProcurementProjectLotField.AdditionalDocumentReference}
          meta={ProcurementProjectLotFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.TenderingTerms,
      { meta: ProcurementProjectLotFieldMeta.TenderingTerms,
        template: ({value, renderContext, fieldConfig}) => <TenderingTermsDisplay
          key={ProcurementProjectLotField.TenderingTerms}
          meta={ProcurementProjectLotFieldMeta.TenderingTerms}
          fieldConfig={fieldConfig}
          tenderingTerms={value?.TenderingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.TenderingProcess,
      { meta: ProcurementProjectLotFieldMeta.TenderingProcess,
        template: ({value, renderContext, fieldConfig}) => <TenderingProcessDisplay
          key={ProcurementProjectLotField.TenderingProcess}
          meta={ProcurementProjectLotFieldMeta.TenderingProcess}
          fieldConfig={fieldConfig}
          tenderingProcess={value?.TenderingProcess}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotField.ProcurementProject,
      { meta: ProcurementProjectLotFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={ProcurementProjectLotField.ProcurementProject}
          meta={ProcurementProjectLotFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProcurementProjectLotDisplay<TFieldMeta>({ meta, fieldConfig, procurementProjectLot, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProcurementProjectLotTypeName,
    meta,
    fieldConfig,
    procurementProjectLot,
    renderContext,
    ProcurementProjectLotSubElementsMap,
  )
}
