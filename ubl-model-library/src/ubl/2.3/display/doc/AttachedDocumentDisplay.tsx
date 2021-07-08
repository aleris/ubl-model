import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AttachedDocument } from  '../../model/doc/AttachedDocument'
import { AttachedDocumentField, AttachedDocumentFieldMeta, AttachedDocumentTypeName } from  '../../meta/doc/AttachedDocumentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AttachmentDisplay } from '../cac/AttachmentDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LineReferenceDisplay } from '../cac/LineReferenceDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AttachedDocument, void>
  attachedDocument: AttachedDocument[] | undefined
  renderContext: RenderContext
}

export const AttachedDocumentSubElementsMap: SubElementsTemplatesMap<AttachedDocumentField, AttachedDocument, void> = new Map([
    [
      AttachedDocumentField.UBLExtensions,
      { meta: AttachedDocumentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AttachedDocumentField.UBLExtensions}
          meta={AttachedDocumentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.UBLVersionID,
      { meta: AttachedDocumentFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.UBLVersionID}
          meta={AttachedDocumentFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.CustomizationID,
      { meta: AttachedDocumentFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.CustomizationID}
          meta={AttachedDocumentFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ProfileID,
      { meta: AttachedDocumentFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.ProfileID}
          meta={AttachedDocumentFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ProfileExecutionID,
      { meta: AttachedDocumentFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.ProfileExecutionID}
          meta={AttachedDocumentFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ID,
      { meta: AttachedDocumentFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.ID}
          meta={AttachedDocumentFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.UUID,
      { meta: AttachedDocumentFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.UUID}
          meta={AttachedDocumentFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.IssueDate,
      { meta: AttachedDocumentFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={AttachedDocumentField.IssueDate}
          meta={AttachedDocumentFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.IssueTime,
      { meta: AttachedDocumentFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={AttachedDocumentField.IssueTime}
          meta={AttachedDocumentFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.Note,
      { meta: AttachedDocumentFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AttachedDocumentField.Note}
          meta={AttachedDocumentFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.DocumentTypeCode,
      { meta: AttachedDocumentFieldMeta.DocumentTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AttachedDocumentField.DocumentTypeCode}
          meta={AttachedDocumentFieldMeta.DocumentTypeCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.DocumentType,
      { meta: AttachedDocumentFieldMeta.DocumentType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AttachedDocumentField.DocumentType}
          meta={AttachedDocumentFieldMeta.DocumentType}
          fieldConfig={fieldConfig}
          text={value?.DocumentType}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ParentDocumentID,
      { meta: AttachedDocumentFieldMeta.ParentDocumentID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.ParentDocumentID}
          meta={AttachedDocumentFieldMeta.ParentDocumentID}
          fieldConfig={fieldConfig}
          identifier={value?.ParentDocumentID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ParentDocumentTypeCode,
      { meta: AttachedDocumentFieldMeta.ParentDocumentTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AttachedDocumentField.ParentDocumentTypeCode}
          meta={AttachedDocumentFieldMeta.ParentDocumentTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ParentDocumentTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ParentDocumentVersionID,
      { meta: AttachedDocumentFieldMeta.ParentDocumentVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttachedDocumentField.ParentDocumentVersionID}
          meta={AttachedDocumentFieldMeta.ParentDocumentVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.ParentDocumentVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.Signature,
      { meta: AttachedDocumentFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={AttachedDocumentField.Signature}
          meta={AttachedDocumentFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.SenderParty,
      { meta: AttachedDocumentFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AttachedDocumentField.SenderParty}
          meta={AttachedDocumentFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ReceiverParty,
      { meta: AttachedDocumentFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AttachedDocumentField.ReceiverParty}
          meta={AttachedDocumentFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.Attachment,
      { meta: AttachedDocumentFieldMeta.Attachment,
        template: ({value, renderContext, fieldConfig}) => <AttachmentDisplay
          key={AttachedDocumentField.Attachment}
          meta={AttachedDocumentFieldMeta.Attachment}
          fieldConfig={fieldConfig}
          attachment={value?.Attachment}
          renderContext={renderContext}
        />}
    ],

    [
      AttachedDocumentField.ParentDocumentLineReference,
      { meta: AttachedDocumentFieldMeta.ParentDocumentLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={AttachedDocumentField.ParentDocumentLineReference}
          meta={AttachedDocumentFieldMeta.ParentDocumentLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.ParentDocumentLineReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function AttachedDocumentDisplay<TFieldMeta>({ meta, fieldConfig, attachedDocument, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AttachedDocumentTypeName,
    meta,
    fieldConfig,
    attachedDocument,
    renderContext,
    AttachedDocumentSubElementsMap,
  )
}
