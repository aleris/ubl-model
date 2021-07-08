import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractAwardNotice } from  '../../model/doc/ContractAwardNotice'
import { ContractAwardNoticeField, ContractAwardNoticeFieldMeta, ContractAwardNoticeTypeName } from  '../../meta/doc/ContractAwardNoticeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LanguageDisplay } from '../cac/LanguageDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotDisplay } from '../cac/ProcurementProjectLotDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TenderingProcessDisplay } from '../cac/TenderingProcessDisplay'
import { TenderingTermsDisplay } from '../cac/TenderingTermsDisplay'
import { TenderResultDisplay } from '../cac/TenderResultDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractAwardNotice, void>
  contractAwardNotice: ContractAwardNotice[] | undefined
  renderContext: RenderContext
}

export const ContractAwardNoticeSubElementsMap: SubElementsTemplatesMap<ContractAwardNoticeField, ContractAwardNotice, void> = new Map([
    [
      ContractAwardNoticeField.UBLExtensions,
      { meta: ContractAwardNoticeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractAwardNoticeField.UBLExtensions}
          meta={ContractAwardNoticeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.UBLVersionID,
      { meta: ContractAwardNoticeFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.UBLVersionID}
          meta={ContractAwardNoticeFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.CustomizationID,
      { meta: ContractAwardNoticeFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.CustomizationID}
          meta={ContractAwardNoticeFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ProfileID,
      { meta: ContractAwardNoticeFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.ProfileID}
          meta={ContractAwardNoticeFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ProfileExecutionID,
      { meta: ContractAwardNoticeFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.ProfileExecutionID}
          meta={ContractAwardNoticeFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ID,
      { meta: ContractAwardNoticeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.ID}
          meta={ContractAwardNoticeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.CopyIndicator,
      { meta: ContractAwardNoticeFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ContractAwardNoticeField.CopyIndicator}
          meta={ContractAwardNoticeFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.UUID,
      { meta: ContractAwardNoticeFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.UUID}
          meta={ContractAwardNoticeFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ContractFolderID,
      { meta: ContractAwardNoticeFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.ContractFolderID}
          meta={ContractAwardNoticeFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.IssueDate,
      { meta: ContractAwardNoticeFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ContractAwardNoticeField.IssueDate}
          meta={ContractAwardNoticeFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.IssueTime,
      { meta: ContractAwardNoticeFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ContractAwardNoticeField.IssueTime}
          meta={ContractAwardNoticeFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.Note,
      { meta: ContractAwardNoticeFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractAwardNoticeField.Note}
          meta={ContractAwardNoticeFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.VersionID,
      { meta: ContractAwardNoticeFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.VersionID}
          meta={ContractAwardNoticeFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.PreviousVersionID,
      { meta: ContractAwardNoticeFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractAwardNoticeField.PreviousVersionID}
          meta={ContractAwardNoticeFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.RequestedPublicationDate,
      { meta: ContractAwardNoticeFieldMeta.RequestedPublicationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ContractAwardNoticeField.RequestedPublicationDate}
          meta={ContractAwardNoticeFieldMeta.RequestedPublicationDate}
          fieldConfig={fieldConfig}
          date={value?.RequestedPublicationDate}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.RegulatoryDomain,
      { meta: ContractAwardNoticeFieldMeta.RegulatoryDomain,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractAwardNoticeField.RegulatoryDomain}
          meta={ContractAwardNoticeFieldMeta.RegulatoryDomain}
          fieldConfig={fieldConfig}
          text={value?.RegulatoryDomain}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.NoticeTypeCode,
      { meta: ContractAwardNoticeFieldMeta.NoticeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractAwardNoticeField.NoticeTypeCode}
          meta={ContractAwardNoticeFieldMeta.NoticeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.NoticeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.PublishAwardIndicator,
      { meta: ContractAwardNoticeFieldMeta.PublishAwardIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ContractAwardNoticeField.PublishAwardIndicator}
          meta={ContractAwardNoticeFieldMeta.PublishAwardIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PublishAwardIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.NoticeLanguageCode,
      { meta: ContractAwardNoticeFieldMeta.NoticeLanguageCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractAwardNoticeField.NoticeLanguageCode}
          meta={ContractAwardNoticeFieldMeta.NoticeLanguageCode}
          fieldConfig={fieldConfig}
          code={value?.NoticeLanguageCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.AdditionalNoticeLanguage,
      { meta: ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={ContractAwardNoticeField.AdditionalNoticeLanguage}
          meta={ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage}
          fieldConfig={fieldConfig}
          language={value?.AdditionalNoticeLanguage}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.PreviousDocumentReference,
      { meta: ContractAwardNoticeFieldMeta.PreviousDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ContractAwardNoticeField.PreviousDocumentReference}
          meta={ContractAwardNoticeFieldMeta.PreviousDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.PreviousDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.MinutesDocumentReference,
      { meta: ContractAwardNoticeFieldMeta.MinutesDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ContractAwardNoticeField.MinutesDocumentReference}
          meta={ContractAwardNoticeFieldMeta.MinutesDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.MinutesDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.Signature,
      { meta: ContractAwardNoticeFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ContractAwardNoticeField.Signature}
          meta={ContractAwardNoticeFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ContractingParty,
      { meta: ContractAwardNoticeFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={ContractAwardNoticeField.ContractingParty}
          meta={ContractAwardNoticeFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.OriginatorCustomerParty,
      { meta: ContractAwardNoticeFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ContractAwardNoticeField.OriginatorCustomerParty}
          meta={ContractAwardNoticeFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ReceiverParty,
      { meta: ContractAwardNoticeFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ContractAwardNoticeField.ReceiverParty}
          meta={ContractAwardNoticeFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.TenderingTerms,
      { meta: ContractAwardNoticeFieldMeta.TenderingTerms,
        template: ({value, renderContext, fieldConfig}) => <TenderingTermsDisplay
          key={ContractAwardNoticeField.TenderingTerms}
          meta={ContractAwardNoticeFieldMeta.TenderingTerms}
          fieldConfig={fieldConfig}
          tenderingTerms={value?.TenderingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.TenderingProcess,
      { meta: ContractAwardNoticeFieldMeta.TenderingProcess,
        template: ({value, renderContext, fieldConfig}) => <TenderingProcessDisplay
          key={ContractAwardNoticeField.TenderingProcess}
          meta={ContractAwardNoticeFieldMeta.TenderingProcess}
          fieldConfig={fieldConfig}
          tenderingProcess={value?.TenderingProcess}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ProcurementProject,
      { meta: ContractAwardNoticeFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={ContractAwardNoticeField.ProcurementProject}
          meta={ContractAwardNoticeFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.ProcurementProjectLot,
      { meta: ContractAwardNoticeFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={ContractAwardNoticeField.ProcurementProjectLot}
          meta={ContractAwardNoticeFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ],

    [
      ContractAwardNoticeField.TenderResult,
      { meta: ContractAwardNoticeFieldMeta.TenderResult,
        template: ({value, renderContext, fieldConfig}) => <TenderResultDisplay
          key={ContractAwardNoticeField.TenderResult}
          meta={ContractAwardNoticeFieldMeta.TenderResult}
          fieldConfig={fieldConfig}
          tenderResult={value?.TenderResult}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractAwardNoticeDisplay<TFieldMeta>({ meta, fieldConfig, contractAwardNotice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractAwardNoticeTypeName,
    meta,
    fieldConfig,
    contractAwardNotice,
    renderContext,
    ContractAwardNoticeSubElementsMap,
  )
}
