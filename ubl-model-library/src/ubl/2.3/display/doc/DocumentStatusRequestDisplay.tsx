import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentStatusRequest } from  '../../model/doc/DocumentStatusRequest'
import { DocumentStatusRequestField, DocumentStatusRequestFieldMeta, DocumentStatusRequestTypeName } from  '../../meta/doc/DocumentStatusRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DocumentStatusRequest, void>
  documentStatusRequest: DocumentStatusRequest[] | undefined
  renderContext: RenderContext
}

export const DocumentStatusRequestSubElementsMap: SubElementsTemplatesMap<DocumentStatusRequestField, DocumentStatusRequest, void> = new Map([
    [
      DocumentStatusRequestField.UBLExtensions,
      { meta: DocumentStatusRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DocumentStatusRequestField.UBLExtensions}
          meta={DocumentStatusRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.UBLVersionID,
      { meta: DocumentStatusRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusRequestField.UBLVersionID}
          meta={DocumentStatusRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.CustomizationID,
      { meta: DocumentStatusRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusRequestField.CustomizationID}
          meta={DocumentStatusRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.ProfileID,
      { meta: DocumentStatusRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusRequestField.ProfileID}
          meta={DocumentStatusRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.ProfileExecutionID,
      { meta: DocumentStatusRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusRequestField.ProfileExecutionID}
          meta={DocumentStatusRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.ID,
      { meta: DocumentStatusRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusRequestField.ID}
          meta={DocumentStatusRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.CopyIndicator,
      { meta: DocumentStatusRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={DocumentStatusRequestField.CopyIndicator}
          meta={DocumentStatusRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.UUID,
      { meta: DocumentStatusRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusRequestField.UUID}
          meta={DocumentStatusRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.IssueDate,
      { meta: DocumentStatusRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DocumentStatusRequestField.IssueDate}
          meta={DocumentStatusRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.IssueTime,
      { meta: DocumentStatusRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DocumentStatusRequestField.IssueTime}
          meta={DocumentStatusRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.Note,
      { meta: DocumentStatusRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DocumentStatusRequestField.Note}
          meta={DocumentStatusRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.TrackingID,
      { meta: DocumentStatusRequestFieldMeta.TrackingID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentStatusRequestField.TrackingID}
          meta={DocumentStatusRequestFieldMeta.TrackingID}
          fieldConfig={fieldConfig}
          identifier={value?.TrackingID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.RequestedDocumentReference,
      { meta: DocumentStatusRequestFieldMeta.RequestedDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DocumentStatusRequestField.RequestedDocumentReference}
          meta={DocumentStatusRequestFieldMeta.RequestedDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.RequestedDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.Signature,
      { meta: DocumentStatusRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={DocumentStatusRequestField.Signature}
          meta={DocumentStatusRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.SenderParty,
      { meta: DocumentStatusRequestFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentStatusRequestField.SenderParty}
          meta={DocumentStatusRequestFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentStatusRequestField.ReceiverParty,
      { meta: DocumentStatusRequestFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentStatusRequestField.ReceiverParty}
          meta={DocumentStatusRequestFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function DocumentStatusRequestDisplay<TFieldMeta>({ meta, fieldConfig, documentStatusRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DocumentStatusRequestTypeName,
    meta,
    fieldConfig,
    documentStatusRequest,
    renderContext,
    DocumentStatusRequestSubElementsMap,
  )
}
