import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardedNotification } from  '../../model/doc/AwardedNotification'
import { AwardedNotificationField, AwardedNotificationFieldMeta, AwardedNotificationTypeName } from  '../../meta/doc/AwardedNotificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { FinancialGuaranteeDisplay } from '../cac/FinancialGuaranteeDisplay'
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
  fieldConfig?: FieldConfig<AwardedNotification, void>
  awardedNotification: AwardedNotification[] | undefined
  renderContext: RenderContext
}

export const AwardedNotificationSubElementsMap: SubElementsTemplatesMap<AwardedNotificationField, AwardedNotification, void> = new Map([
    [
      AwardedNotificationField.UBLExtensions,
      { meta: AwardedNotificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AwardedNotificationField.UBLExtensions}
          meta={AwardedNotificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.UBLVersionID,
      { meta: AwardedNotificationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardedNotificationField.UBLVersionID}
          meta={AwardedNotificationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.CustomizationID,
      { meta: AwardedNotificationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardedNotificationField.CustomizationID}
          meta={AwardedNotificationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.ProfileID,
      { meta: AwardedNotificationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardedNotificationField.ProfileID}
          meta={AwardedNotificationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.ProfileExecutionID,
      { meta: AwardedNotificationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardedNotificationField.ProfileExecutionID}
          meta={AwardedNotificationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.ID,
      { meta: AwardedNotificationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardedNotificationField.ID}
          meta={AwardedNotificationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.CopyIndicator,
      { meta: AwardedNotificationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AwardedNotificationField.CopyIndicator}
          meta={AwardedNotificationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.UUID,
      { meta: AwardedNotificationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardedNotificationField.UUID}
          meta={AwardedNotificationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.ContractFolderID,
      { meta: AwardedNotificationFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardedNotificationField.ContractFolderID}
          meta={AwardedNotificationFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.IssueDate,
      { meta: AwardedNotificationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={AwardedNotificationField.IssueDate}
          meta={AwardedNotificationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.IssueTime,
      { meta: AwardedNotificationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={AwardedNotificationField.IssueTime}
          meta={AwardedNotificationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.ContractName,
      { meta: AwardedNotificationFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardedNotificationField.ContractName}
          meta={AwardedNotificationFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.Note,
      { meta: AwardedNotificationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardedNotificationField.Note}
          meta={AwardedNotificationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.SenderParty,
      { meta: AwardedNotificationFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AwardedNotificationField.SenderParty}
          meta={AwardedNotificationFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.ReceiverParty,
      { meta: AwardedNotificationFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AwardedNotificationField.ReceiverParty}
          meta={AwardedNotificationFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.MinutesDocumentReference,
      { meta: AwardedNotificationFieldMeta.MinutesDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={AwardedNotificationField.MinutesDocumentReference}
          meta={AwardedNotificationFieldMeta.MinutesDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.MinutesDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.AdditionalDocumentReference,
      { meta: AwardedNotificationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={AwardedNotificationField.AdditionalDocumentReference}
          meta={AwardedNotificationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.TenderResult,
      { meta: AwardedNotificationFieldMeta.TenderResult,
        template: ({value, renderContext, fieldConfig}) => <TenderResultDisplay
          key={AwardedNotificationField.TenderResult}
          meta={AwardedNotificationFieldMeta.TenderResult}
          fieldConfig={fieldConfig}
          tenderResult={value?.TenderResult}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.FinalFinancialGuarantee,
      { meta: AwardedNotificationFieldMeta.FinalFinancialGuarantee,
        template: ({value, renderContext, fieldConfig}) => <FinancialGuaranteeDisplay
          key={AwardedNotificationField.FinalFinancialGuarantee}
          meta={AwardedNotificationFieldMeta.FinalFinancialGuarantee}
          fieldConfig={fieldConfig}
          financialGuarantee={value?.FinalFinancialGuarantee}
          renderContext={renderContext}
        />}
    ],

    [
      AwardedNotificationField.Signature,
      { meta: AwardedNotificationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={AwardedNotificationField.Signature}
          meta={AwardedNotificationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function AwardedNotificationDisplay<TFieldMeta>({ meta, fieldConfig, awardedNotification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AwardedNotificationTypeName,
    meta,
    fieldConfig,
    awardedNotification,
    renderContext,
    AwardedNotificationSubElementsMap,
  )
}
