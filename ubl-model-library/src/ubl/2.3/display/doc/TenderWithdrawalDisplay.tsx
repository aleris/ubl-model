import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderWithdrawal } from  '../../model/doc/TenderWithdrawal'
import { TenderWithdrawalField, TenderWithdrawalFieldMeta, TenderWithdrawalTypeName } from  '../../meta/doc/TenderWithdrawalMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
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
  fieldConfig?: FieldConfig<TenderWithdrawal, void>
  tenderWithdrawal: TenderWithdrawal[] | undefined
  renderContext: RenderContext
}

export const TenderWithdrawalSubElementsMap: SubElementsTemplatesMap<TenderWithdrawalField, TenderWithdrawal, void> = new Map([
    [
      TenderWithdrawalField.UBLExtensions,
      { meta: TenderWithdrawalFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderWithdrawalField.UBLExtensions}
          meta={TenderWithdrawalFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.UBLVersionID,
      { meta: TenderWithdrawalFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderWithdrawalField.UBLVersionID}
          meta={TenderWithdrawalFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.CustomizationID,
      { meta: TenderWithdrawalFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderWithdrawalField.CustomizationID}
          meta={TenderWithdrawalFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.ProfileID,
      { meta: TenderWithdrawalFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderWithdrawalField.ProfileID}
          meta={TenderWithdrawalFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.ProfileExecutionID,
      { meta: TenderWithdrawalFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderWithdrawalField.ProfileExecutionID}
          meta={TenderWithdrawalFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.ID,
      { meta: TenderWithdrawalFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderWithdrawalField.ID}
          meta={TenderWithdrawalFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.CopyIndicator,
      { meta: TenderWithdrawalFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderWithdrawalField.CopyIndicator}
          meta={TenderWithdrawalFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.UUID,
      { meta: TenderWithdrawalFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderWithdrawalField.UUID}
          meta={TenderWithdrawalFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.ContractFolderID,
      { meta: TenderWithdrawalFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderWithdrawalField.ContractFolderID}
          meta={TenderWithdrawalFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.IssueDate,
      { meta: TenderWithdrawalFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderWithdrawalField.IssueDate}
          meta={TenderWithdrawalFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.IssueTime,
      { meta: TenderWithdrawalFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderWithdrawalField.IssueTime}
          meta={TenderWithdrawalFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.ContractName,
      { meta: TenderWithdrawalFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderWithdrawalField.ContractName}
          meta={TenderWithdrawalFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.Note,
      { meta: TenderWithdrawalFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderWithdrawalField.Note}
          meta={TenderWithdrawalFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.WithdrawOfferIndicator,
      { meta: TenderWithdrawalFieldMeta.WithdrawOfferIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderWithdrawalField.WithdrawOfferIndicator}
          meta={TenderWithdrawalFieldMeta.WithdrawOfferIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.WithdrawOfferIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.TenderDocumentReference,
      { meta: TenderWithdrawalFieldMeta.TenderDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderWithdrawalField.TenderDocumentReference}
          meta={TenderWithdrawalFieldMeta.TenderDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TenderDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.TenderNotificationDocumentReference,
      { meta: TenderWithdrawalFieldMeta.TenderNotificationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderWithdrawalField.TenderNotificationDocumentReference}
          meta={TenderWithdrawalFieldMeta.TenderNotificationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TenderNotificationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.Signature,
      { meta: TenderWithdrawalFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TenderWithdrawalField.Signature}
          meta={TenderWithdrawalFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.ContractingParty,
      { meta: TenderWithdrawalFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={TenderWithdrawalField.ContractingParty}
          meta={TenderWithdrawalFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderWithdrawalField.TendererParty,
      { meta: TenderWithdrawalFieldMeta.TendererParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderWithdrawalField.TendererParty}
          meta={TenderWithdrawalFieldMeta.TendererParty}
          fieldConfig={fieldConfig}
          party={value?.TendererParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderWithdrawalDisplay<TFieldMeta>({ meta, fieldConfig, tenderWithdrawal, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderWithdrawalTypeName,
    meta,
    fieldConfig,
    tenderWithdrawal,
    renderContext,
    TenderWithdrawalSubElementsMap,
  )
}
