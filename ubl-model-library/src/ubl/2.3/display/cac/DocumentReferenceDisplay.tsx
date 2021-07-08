import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentReference } from  '../../model/cac/DocumentReference'
import { DocumentReferenceField, DocumentReferenceFieldMeta, DocumentReferenceTypeName } from  '../../meta/cac/DocumentReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AttachmentDisplay } from './AttachmentDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { ResultOfVerificationDisplay } from './ResultOfVerificationDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DocumentReference, void>
  documentReference: DocumentReference[] | undefined
  renderContext: RenderContext
}

export const DocumentReferenceSubElementsMap: SubElementsTemplatesMap<DocumentReferenceField, DocumentReference, void> = new Map([
    [
      DocumentReferenceField.UBLExtensions,
      { meta: DocumentReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DocumentReferenceField.UBLExtensions}
          meta={DocumentReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.ID,
      { meta: DocumentReferenceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentReferenceField.ID}
          meta={DocumentReferenceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.CopyIndicator,
      { meta: DocumentReferenceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={DocumentReferenceField.CopyIndicator}
          meta={DocumentReferenceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.UUID,
      { meta: DocumentReferenceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentReferenceField.UUID}
          meta={DocumentReferenceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.IssueDate,
      { meta: DocumentReferenceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DocumentReferenceField.IssueDate}
          meta={DocumentReferenceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.IssueTime,
      { meta: DocumentReferenceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DocumentReferenceField.IssueTime}
          meta={DocumentReferenceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.DocumentTypeCode,
      { meta: DocumentReferenceFieldMeta.DocumentTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DocumentReferenceField.DocumentTypeCode}
          meta={DocumentReferenceFieldMeta.DocumentTypeCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.DocumentType,
      { meta: DocumentReferenceFieldMeta.DocumentType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DocumentReferenceField.DocumentType}
          meta={DocumentReferenceFieldMeta.DocumentType}
          fieldConfig={fieldConfig}
          text={value?.DocumentType}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.XPath,
      { meta: DocumentReferenceFieldMeta.XPath,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DocumentReferenceField.XPath}
          meta={DocumentReferenceFieldMeta.XPath}
          fieldConfig={fieldConfig}
          text={value?.XPath}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.ReferencedDocumentInternalAddress,
      { meta: DocumentReferenceFieldMeta.ReferencedDocumentInternalAddress,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DocumentReferenceField.ReferencedDocumentInternalAddress}
          meta={DocumentReferenceFieldMeta.ReferencedDocumentInternalAddress}
          fieldConfig={fieldConfig}
          text={value?.ReferencedDocumentInternalAddress}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.LanguageID,
      { meta: DocumentReferenceFieldMeta.LanguageID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentReferenceField.LanguageID}
          meta={DocumentReferenceFieldMeta.LanguageID}
          fieldConfig={fieldConfig}
          identifier={value?.LanguageID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.LocaleCode,
      { meta: DocumentReferenceFieldMeta.LocaleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DocumentReferenceField.LocaleCode}
          meta={DocumentReferenceFieldMeta.LocaleCode}
          fieldConfig={fieldConfig}
          code={value?.LocaleCode}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.VersionID,
      { meta: DocumentReferenceFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentReferenceField.VersionID}
          meta={DocumentReferenceFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.DocumentStatusCode,
      { meta: DocumentReferenceFieldMeta.DocumentStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DocumentReferenceField.DocumentStatusCode}
          meta={DocumentReferenceFieldMeta.DocumentStatusCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.DocumentDescription,
      { meta: DocumentReferenceFieldMeta.DocumentDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DocumentReferenceField.DocumentDescription}
          meta={DocumentReferenceFieldMeta.DocumentDescription}
          fieldConfig={fieldConfig}
          text={value?.DocumentDescription}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.Attachment,
      { meta: DocumentReferenceFieldMeta.Attachment,
        template: ({value, renderContext, fieldConfig}) => <AttachmentDisplay
          key={DocumentReferenceField.Attachment}
          meta={DocumentReferenceFieldMeta.Attachment}
          fieldConfig={fieldConfig}
          attachment={value?.Attachment}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.ValidityPeriod,
      { meta: DocumentReferenceFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DocumentReferenceField.ValidityPeriod}
          meta={DocumentReferenceFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.IssuerParty,
      { meta: DocumentReferenceFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentReferenceField.IssuerParty}
          meta={DocumentReferenceFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentReferenceField.ResultOfVerification,
      { meta: DocumentReferenceFieldMeta.ResultOfVerification,
        template: ({value, renderContext, fieldConfig}) => <ResultOfVerificationDisplay
          key={DocumentReferenceField.ResultOfVerification}
          meta={DocumentReferenceFieldMeta.ResultOfVerification}
          fieldConfig={fieldConfig}
          resultOfVerification={value?.ResultOfVerification}
          renderContext={renderContext}
        />}
    ]
]) 

export function DocumentReferenceDisplay<TFieldMeta>({ meta, fieldConfig, documentReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DocumentReferenceTypeName,
    meta,
    fieldConfig,
    documentReference,
    renderContext,
    DocumentReferenceSubElementsMap,
  )
}
