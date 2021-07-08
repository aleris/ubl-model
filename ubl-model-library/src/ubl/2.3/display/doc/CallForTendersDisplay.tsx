import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CallForTenders } from  '../../model/doc/CallForTenders'
import { CallForTendersField, CallForTendersFieldMeta, CallForTendersTypeName } from  '../../meta/doc/CallForTendersMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotDisplay } from '../cac/ProcurementProjectLotDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TenderingProcessDisplay } from '../cac/TenderingProcessDisplay'
import { TenderingTermsDisplay } from '../cac/TenderingTermsDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CallForTenders, void>
  callForTenders: CallForTenders[] | undefined
  renderContext: RenderContext
}

export const CallForTendersSubElementsMap: SubElementsTemplatesMap<CallForTendersField, CallForTenders, void> = new Map([
    [
      CallForTendersField.UBLExtensions,
      { meta: CallForTendersFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CallForTendersField.UBLExtensions}
          meta={CallForTendersFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.UBLVersionID,
      { meta: CallForTendersFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.UBLVersionID}
          meta={CallForTendersFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.CustomizationID,
      { meta: CallForTendersFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.CustomizationID}
          meta={CallForTendersFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ProfileID,
      { meta: CallForTendersFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.ProfileID}
          meta={CallForTendersFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ProfileExecutionID,
      { meta: CallForTendersFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.ProfileExecutionID}
          meta={CallForTendersFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ID,
      { meta: CallForTendersFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.ID}
          meta={CallForTendersFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.CopyIndicator,
      { meta: CallForTendersFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={CallForTendersField.CopyIndicator}
          meta={CallForTendersFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.UUID,
      { meta: CallForTendersFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.UUID}
          meta={CallForTendersFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ContractFolderID,
      { meta: CallForTendersFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.ContractFolderID}
          meta={CallForTendersFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ApprovalDate,
      { meta: CallForTendersFieldMeta.ApprovalDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CallForTendersField.ApprovalDate}
          meta={CallForTendersFieldMeta.ApprovalDate}
          fieldConfig={fieldConfig}
          date={value?.ApprovalDate}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.IssueDate,
      { meta: CallForTendersFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CallForTendersField.IssueDate}
          meta={CallForTendersFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.IssueTime,
      { meta: CallForTendersFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CallForTendersField.IssueTime}
          meta={CallForTendersFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.Note,
      { meta: CallForTendersFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CallForTendersField.Note}
          meta={CallForTendersFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.VersionID,
      { meta: CallForTendersFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.VersionID}
          meta={CallForTendersFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.PreviousVersionID,
      { meta: CallForTendersFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CallForTendersField.PreviousVersionID}
          meta={CallForTendersFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.LegalDocumentReference,
      { meta: CallForTendersFieldMeta.LegalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CallForTendersField.LegalDocumentReference}
          meta={CallForTendersFieldMeta.LegalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.LegalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.TechnicalDocumentReference,
      { meta: CallForTendersFieldMeta.TechnicalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CallForTendersField.TechnicalDocumentReference}
          meta={CallForTendersFieldMeta.TechnicalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TechnicalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.RequiredDocumentReference,
      { meta: CallForTendersFieldMeta.RequiredDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CallForTendersField.RequiredDocumentReference}
          meta={CallForTendersFieldMeta.RequiredDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.RequiredDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ProvidedDocumentReference,
      { meta: CallForTendersFieldMeta.ProvidedDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CallForTendersField.ProvidedDocumentReference}
          meta={CallForTendersFieldMeta.ProvidedDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ProvidedDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.AdditionalDocumentReference,
      { meta: CallForTendersFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CallForTendersField.AdditionalDocumentReference}
          meta={CallForTendersFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.Signature,
      { meta: CallForTendersFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CallForTendersField.Signature}
          meta={CallForTendersFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ContractingParty,
      { meta: CallForTendersFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={CallForTendersField.ContractingParty}
          meta={CallForTendersFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.OriginatorCustomerParty,
      { meta: CallForTendersFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CallForTendersField.OriginatorCustomerParty}
          meta={CallForTendersFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ReceiverParty,
      { meta: CallForTendersFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CallForTendersField.ReceiverParty}
          meta={CallForTendersFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.TenderingTerms,
      { meta: CallForTendersFieldMeta.TenderingTerms,
        template: ({value, renderContext, fieldConfig}) => <TenderingTermsDisplay
          key={CallForTendersField.TenderingTerms}
          meta={CallForTendersFieldMeta.TenderingTerms}
          fieldConfig={fieldConfig}
          tenderingTerms={value?.TenderingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.TenderingProcess,
      { meta: CallForTendersFieldMeta.TenderingProcess,
        template: ({value, renderContext, fieldConfig}) => <TenderingProcessDisplay
          key={CallForTendersField.TenderingProcess}
          meta={CallForTendersFieldMeta.TenderingProcess}
          fieldConfig={fieldConfig}
          tenderingProcess={value?.TenderingProcess}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ProcurementProject,
      { meta: CallForTendersFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={CallForTendersField.ProcurementProject}
          meta={CallForTendersFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      CallForTendersField.ProcurementProjectLot,
      { meta: CallForTendersFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={CallForTendersField.ProcurementProjectLot}
          meta={CallForTendersFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ]
]) 

export function CallForTendersDisplay<TFieldMeta>({ meta, fieldConfig, callForTenders, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CallForTendersTypeName,
    meta,
    fieldConfig,
    callForTenders,
    renderContext,
    CallForTendersSubElementsMap,
  )
}
