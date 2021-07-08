import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PriorInformationNotice } from  '../../model/doc/PriorInformationNotice'
import { PriorInformationNoticeField, PriorInformationNoticeFieldMeta, PriorInformationNoticeTypeName } from  '../../meta/doc/PriorInformationNoticeMeta'
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
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PriorInformationNotice, void>
  priorInformationNotice: PriorInformationNotice[] | undefined
  renderContext: RenderContext
}

export const PriorInformationNoticeSubElementsMap: SubElementsTemplatesMap<PriorInformationNoticeField, PriorInformationNotice, void> = new Map([
    [
      PriorInformationNoticeField.UBLExtensions,
      { meta: PriorInformationNoticeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PriorInformationNoticeField.UBLExtensions}
          meta={PriorInformationNoticeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.UBLVersionID,
      { meta: PriorInformationNoticeFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.UBLVersionID}
          meta={PriorInformationNoticeFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.CustomizationID,
      { meta: PriorInformationNoticeFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.CustomizationID}
          meta={PriorInformationNoticeFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ProfileID,
      { meta: PriorInformationNoticeFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.ProfileID}
          meta={PriorInformationNoticeFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ProfileExecutionID,
      { meta: PriorInformationNoticeFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.ProfileExecutionID}
          meta={PriorInformationNoticeFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ID,
      { meta: PriorInformationNoticeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.ID}
          meta={PriorInformationNoticeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.CopyIndicator,
      { meta: PriorInformationNoticeFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PriorInformationNoticeField.CopyIndicator}
          meta={PriorInformationNoticeFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.UUID,
      { meta: PriorInformationNoticeFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.UUID}
          meta={PriorInformationNoticeFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ContractFolderID,
      { meta: PriorInformationNoticeFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.ContractFolderID}
          meta={PriorInformationNoticeFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.IssueDate,
      { meta: PriorInformationNoticeFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PriorInformationNoticeField.IssueDate}
          meta={PriorInformationNoticeFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.IssueTime,
      { meta: PriorInformationNoticeFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PriorInformationNoticeField.IssueTime}
          meta={PriorInformationNoticeFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.Note,
      { meta: PriorInformationNoticeFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PriorInformationNoticeField.Note}
          meta={PriorInformationNoticeFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.VersionID,
      { meta: PriorInformationNoticeFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.VersionID}
          meta={PriorInformationNoticeFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.PreviousVersionID,
      { meta: PriorInformationNoticeFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriorInformationNoticeField.PreviousVersionID}
          meta={PriorInformationNoticeFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.RequestedPublicationDate,
      { meta: PriorInformationNoticeFieldMeta.RequestedPublicationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PriorInformationNoticeField.RequestedPublicationDate}
          meta={PriorInformationNoticeFieldMeta.RequestedPublicationDate}
          fieldConfig={fieldConfig}
          date={value?.RequestedPublicationDate}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.PlannedDate,
      { meta: PriorInformationNoticeFieldMeta.PlannedDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PriorInformationNoticeField.PlannedDate}
          meta={PriorInformationNoticeFieldMeta.PlannedDate}
          fieldConfig={fieldConfig}
          date={value?.PlannedDate}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.RegulatoryDomain,
      { meta: PriorInformationNoticeFieldMeta.RegulatoryDomain,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PriorInformationNoticeField.RegulatoryDomain}
          meta={PriorInformationNoticeFieldMeta.RegulatoryDomain}
          fieldConfig={fieldConfig}
          text={value?.RegulatoryDomain}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.NoticeTypeCode,
      { meta: PriorInformationNoticeFieldMeta.NoticeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PriorInformationNoticeField.NoticeTypeCode}
          meta={PriorInformationNoticeFieldMeta.NoticeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.NoticeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.NoticeLanguageCode,
      { meta: PriorInformationNoticeFieldMeta.NoticeLanguageCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PriorInformationNoticeField.NoticeLanguageCode}
          meta={PriorInformationNoticeFieldMeta.NoticeLanguageCode}
          fieldConfig={fieldConfig}
          code={value?.NoticeLanguageCode}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.AdditionalNoticeLanguage,
      { meta: PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={PriorInformationNoticeField.AdditionalNoticeLanguage}
          meta={PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage}
          fieldConfig={fieldConfig}
          language={value?.AdditionalNoticeLanguage}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.DocumentReference,
      { meta: PriorInformationNoticeFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={PriorInformationNoticeField.DocumentReference}
          meta={PriorInformationNoticeFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.Signature,
      { meta: PriorInformationNoticeFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={PriorInformationNoticeField.Signature}
          meta={PriorInformationNoticeFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ContractingParty,
      { meta: PriorInformationNoticeFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={PriorInformationNoticeField.ContractingParty}
          meta={PriorInformationNoticeFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.OriginatorCustomerParty,
      { meta: PriorInformationNoticeFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={PriorInformationNoticeField.OriginatorCustomerParty}
          meta={PriorInformationNoticeFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ReceiverParty,
      { meta: PriorInformationNoticeFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PriorInformationNoticeField.ReceiverParty}
          meta={PriorInformationNoticeFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.TenderingTerms,
      { meta: PriorInformationNoticeFieldMeta.TenderingTerms,
        template: ({value, renderContext, fieldConfig}) => <TenderingTermsDisplay
          key={PriorInformationNoticeField.TenderingTerms}
          meta={PriorInformationNoticeFieldMeta.TenderingTerms}
          fieldConfig={fieldConfig}
          tenderingTerms={value?.TenderingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.TenderingProcess,
      { meta: PriorInformationNoticeFieldMeta.TenderingProcess,
        template: ({value, renderContext, fieldConfig}) => <TenderingProcessDisplay
          key={PriorInformationNoticeField.TenderingProcess}
          meta={PriorInformationNoticeFieldMeta.TenderingProcess}
          fieldConfig={fieldConfig}
          tenderingProcess={value?.TenderingProcess}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ProcurementProject,
      { meta: PriorInformationNoticeFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={PriorInformationNoticeField.ProcurementProject}
          meta={PriorInformationNoticeFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      PriorInformationNoticeField.ProcurementProjectLot,
      { meta: PriorInformationNoticeFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={PriorInformationNoticeField.ProcurementProjectLot}
          meta={PriorInformationNoticeFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ]
]) 

export function PriorInformationNoticeDisplay<TFieldMeta>({ meta, fieldConfig, priorInformationNotice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PriorInformationNoticeTypeName,
    meta,
    fieldConfig,
    priorInformationNotice,
    renderContext,
    PriorInformationNoticeSubElementsMap,
  )
}
