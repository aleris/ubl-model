import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnawardedNotification } from  '../../model/doc/UnawardedNotification'
import { UnawardedNotificationField, UnawardedNotificationFieldMeta, UnawardedNotificationTypeName } from  '../../meta/doc/UnawardedNotificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AppealTermsDisplay } from '../cac/AppealTermsDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TenderResultDisplay } from '../cac/TenderResultDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<UnawardedNotification, void>
  unawardedNotification: UnawardedNotification[] | undefined
  renderContext: RenderContext
}

export const UnawardedNotificationSubElementsMap: SubElementsTemplatesMap<UnawardedNotificationField, UnawardedNotification, void> = new Map([
    [
      UnawardedNotificationField.UBLExtensions,
      { meta: UnawardedNotificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={UnawardedNotificationField.UBLExtensions}
          meta={UnawardedNotificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.UBLVersionID,
      { meta: UnawardedNotificationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnawardedNotificationField.UBLVersionID}
          meta={UnawardedNotificationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.CustomizationID,
      { meta: UnawardedNotificationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnawardedNotificationField.CustomizationID}
          meta={UnawardedNotificationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.ProfileID,
      { meta: UnawardedNotificationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnawardedNotificationField.ProfileID}
          meta={UnawardedNotificationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.ProfileExecutionID,
      { meta: UnawardedNotificationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnawardedNotificationField.ProfileExecutionID}
          meta={UnawardedNotificationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.ID,
      { meta: UnawardedNotificationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnawardedNotificationField.ID}
          meta={UnawardedNotificationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.CopyIndicator,
      { meta: UnawardedNotificationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={UnawardedNotificationField.CopyIndicator}
          meta={UnawardedNotificationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.UUID,
      { meta: UnawardedNotificationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnawardedNotificationField.UUID}
          meta={UnawardedNotificationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.ContractFolderID,
      { meta: UnawardedNotificationFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnawardedNotificationField.ContractFolderID}
          meta={UnawardedNotificationFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.IssueDate,
      { meta: UnawardedNotificationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={UnawardedNotificationField.IssueDate}
          meta={UnawardedNotificationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.IssueTime,
      { meta: UnawardedNotificationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={UnawardedNotificationField.IssueTime}
          meta={UnawardedNotificationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.ContractName,
      { meta: UnawardedNotificationFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UnawardedNotificationField.ContractName}
          meta={UnawardedNotificationFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.Note,
      { meta: UnawardedNotificationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UnawardedNotificationField.Note}
          meta={UnawardedNotificationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.Signature,
      { meta: UnawardedNotificationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={UnawardedNotificationField.Signature}
          meta={UnawardedNotificationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.SenderParty,
      { meta: UnawardedNotificationFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={UnawardedNotificationField.SenderParty}
          meta={UnawardedNotificationFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.ReceiverParty,
      { meta: UnawardedNotificationFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={UnawardedNotificationField.ReceiverParty}
          meta={UnawardedNotificationFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.MinutesDocumentReference,
      { meta: UnawardedNotificationFieldMeta.MinutesDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={UnawardedNotificationField.MinutesDocumentReference}
          meta={UnawardedNotificationFieldMeta.MinutesDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.MinutesDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.AdditionalDocumentReference,
      { meta: UnawardedNotificationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={UnawardedNotificationField.AdditionalDocumentReference}
          meta={UnawardedNotificationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.TenderResult,
      { meta: UnawardedNotificationFieldMeta.TenderResult,
        template: ({value, renderContext, fieldConfig}) => <TenderResultDisplay
          key={UnawardedNotificationField.TenderResult}
          meta={UnawardedNotificationFieldMeta.TenderResult}
          fieldConfig={fieldConfig}
          tenderResult={value?.TenderResult}
          renderContext={renderContext}
        />}
    ],

    [
      UnawardedNotificationField.AppealTerms,
      { meta: UnawardedNotificationFieldMeta.AppealTerms,
        template: ({value, renderContext, fieldConfig}) => <AppealTermsDisplay
          key={UnawardedNotificationField.AppealTerms}
          meta={UnawardedNotificationFieldMeta.AppealTerms}
          fieldConfig={fieldConfig}
          appealTerms={value?.AppealTerms}
          renderContext={renderContext}
        />}
    ]
]) 

export function UnawardedNotificationDisplay<TFieldMeta>({ meta, fieldConfig, unawardedNotification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UnawardedNotificationTypeName,
    meta,
    fieldConfig,
    unawardedNotification,
    renderContext,
    UnawardedNotificationSubElementsMap,
  )
}
