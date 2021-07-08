import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentStatus } from  '../../model/doc/DocumentStatus'
import { DocumentStatusField, DocumentStatusFieldMeta, DocumentStatusTypeName } from  '../../meta/doc/DocumentStatusMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentResponseDisplay } from '../cac/DocumentResponseDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DocumentStatus, void>
  documentStatus: DocumentStatus[] | undefined
  renderContext: RenderContext
}

export const DocumentStatusSubElementsMap: SubElementsTemplatesMap<DocumentStatusField, DocumentStatus, void> = new Map([
    [
      DocumentStatusField.UBLExtensions,
      { meta: DocumentStatusFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DocumentStatusField.UBLExtensions}
          meta={DocumentStatusFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.UBLVersionID,
      { meta: DocumentStatusFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusField.UBLVersionID}
          meta={DocumentStatusFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.CustomizationID,
      { meta: DocumentStatusFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusField.CustomizationID}
          meta={DocumentStatusFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.ProfileID,
      { meta: DocumentStatusFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusField.ProfileID}
          meta={DocumentStatusFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.ProfileExecutionID,
      { meta: DocumentStatusFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusField.ProfileExecutionID}
          meta={DocumentStatusFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.ID,
      { meta: DocumentStatusFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusField.ID}
          meta={DocumentStatusFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.CopyIndicator,
      { meta: DocumentStatusFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={DocumentStatusField.CopyIndicator}
          meta={DocumentStatusFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.UUID,
      { meta: DocumentStatusFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusField.UUID}
          meta={DocumentStatusFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.IssueDate,
      { meta: DocumentStatusFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DocumentStatusField.IssueDate}
          meta={DocumentStatusFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.IssueTime,
      { meta: DocumentStatusFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DocumentStatusField.IssueTime}
          meta={DocumentStatusFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.Note,
      { meta: DocumentStatusFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DocumentStatusField.Note}
          meta={DocumentStatusFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.Signature,
      { meta: DocumentStatusFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={DocumentStatusField.Signature}
          meta={DocumentStatusFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.SenderParty,
      { meta: DocumentStatusFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentStatusField.SenderParty}
          meta={DocumentStatusFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.ReceiverParty,
      { meta: DocumentStatusFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentStatusField.ReceiverParty}
          meta={DocumentStatusFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.DocumentResponse,
      { meta: DocumentStatusFieldMeta.DocumentResponse,
        template: ({value, renderContext, fieldConfig}) => <DocumentResponseDisplay
          key={DocumentStatusField.DocumentResponse}
          meta={DocumentStatusFieldMeta.DocumentResponse}
          fieldConfig={fieldConfig}
          documentResponse={value?.DocumentResponse}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusField.AdditionalDocumentResponse,
      { meta: DocumentStatusFieldMeta.AdditionalDocumentResponse,
        template: ({value, renderContext, fieldConfig}) => <DocumentResponseDisplay
          key={DocumentStatusField.AdditionalDocumentResponse}
          meta={DocumentStatusFieldMeta.AdditionalDocumentResponse}
          fieldConfig={fieldConfig}
          documentResponse={value?.AdditionalDocumentResponse}
          renderContext={renderContext}
        />}
    ]
]) 

export function DocumentStatusDisplay<TFieldMeta>({ meta, fieldConfig, documentStatus, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DocumentStatusTypeName,
    meta,
    fieldConfig,
    documentStatus,
    renderContext,
    DocumentStatusSubElementsMap,
  )
}
