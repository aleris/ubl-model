import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractNotice } from  '../../model/doc/ContractNotice'
import { ContractNoticeField, ContractNoticeFieldMeta, ContractNoticeTypeName } from  '../../meta/doc/ContractNoticeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LanguageDisplay } from '../cac/LanguageDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
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
  fieldConfig?: FieldConfig<ContractNotice, void>
  contractNotice: ContractNotice[] | undefined
  renderContext: RenderContext
}

export const ContractNoticeSubElementsMap: SubElementsTemplatesMap<ContractNoticeField, ContractNotice, void> = new Map([
    [
      ContractNoticeField.UBLExtensions,
      { meta: ContractNoticeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractNoticeField.UBLExtensions}
          meta={ContractNoticeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.UBLVersionID,
      { meta: ContractNoticeFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.UBLVersionID}
          meta={ContractNoticeFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.CustomizationID,
      { meta: ContractNoticeFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.CustomizationID}
          meta={ContractNoticeFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ProfileID,
      { meta: ContractNoticeFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.ProfileID}
          meta={ContractNoticeFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ProfileExecutionID,
      { meta: ContractNoticeFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.ProfileExecutionID}
          meta={ContractNoticeFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ID,
      { meta: ContractNoticeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.ID}
          meta={ContractNoticeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.CopyIndicator,
      { meta: ContractNoticeFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ContractNoticeField.CopyIndicator}
          meta={ContractNoticeFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.UUID,
      { meta: ContractNoticeFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.UUID}
          meta={ContractNoticeFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ContractFolderID,
      { meta: ContractNoticeFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.ContractFolderID}
          meta={ContractNoticeFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.IssueDate,
      { meta: ContractNoticeFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ContractNoticeField.IssueDate}
          meta={ContractNoticeFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.IssueTime,
      { meta: ContractNoticeFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ContractNoticeField.IssueTime}
          meta={ContractNoticeFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.Note,
      { meta: ContractNoticeFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractNoticeField.Note}
          meta={ContractNoticeFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.VersionID,
      { meta: ContractNoticeFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.VersionID}
          meta={ContractNoticeFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.PreviousVersionID,
      { meta: ContractNoticeFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractNoticeField.PreviousVersionID}
          meta={ContractNoticeFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.RequestedPublicationDate,
      { meta: ContractNoticeFieldMeta.RequestedPublicationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ContractNoticeField.RequestedPublicationDate}
          meta={ContractNoticeFieldMeta.RequestedPublicationDate}
          fieldConfig={fieldConfig}
          date={value?.RequestedPublicationDate}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.RegulatoryDomain,
      { meta: ContractNoticeFieldMeta.RegulatoryDomain,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractNoticeField.RegulatoryDomain}
          meta={ContractNoticeFieldMeta.RegulatoryDomain}
          fieldConfig={fieldConfig}
          text={value?.RegulatoryDomain}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.NoticeTypeCode,
      { meta: ContractNoticeFieldMeta.NoticeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractNoticeField.NoticeTypeCode}
          meta={ContractNoticeFieldMeta.NoticeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.NoticeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.NoticeLanguageCode,
      { meta: ContractNoticeFieldMeta.NoticeLanguageCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractNoticeField.NoticeLanguageCode}
          meta={ContractNoticeFieldMeta.NoticeLanguageCode}
          fieldConfig={fieldConfig}
          code={value?.NoticeLanguageCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.AdditionalNoticeLanguage,
      { meta: ContractNoticeFieldMeta.AdditionalNoticeLanguage,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={ContractNoticeField.AdditionalNoticeLanguage}
          meta={ContractNoticeFieldMeta.AdditionalNoticeLanguage}
          fieldConfig={fieldConfig}
          language={value?.AdditionalNoticeLanguage}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.FrequencyPeriod,
      { meta: ContractNoticeFieldMeta.FrequencyPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ContractNoticeField.FrequencyPeriod}
          meta={ContractNoticeFieldMeta.FrequencyPeriod}
          fieldConfig={fieldConfig}
          period={value?.FrequencyPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.Signature,
      { meta: ContractNoticeFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ContractNoticeField.Signature}
          meta={ContractNoticeFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ContractingParty,
      { meta: ContractNoticeFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={ContractNoticeField.ContractingParty}
          meta={ContractNoticeFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.OriginatorCustomerParty,
      { meta: ContractNoticeFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ContractNoticeField.OriginatorCustomerParty}
          meta={ContractNoticeFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ReceiverParty,
      { meta: ContractNoticeFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ContractNoticeField.ReceiverParty}
          meta={ContractNoticeFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.TenderingTerms,
      { meta: ContractNoticeFieldMeta.TenderingTerms,
        template: ({value, renderContext, fieldConfig}) => <TenderingTermsDisplay
          key={ContractNoticeField.TenderingTerms}
          meta={ContractNoticeFieldMeta.TenderingTerms}
          fieldConfig={fieldConfig}
          tenderingTerms={value?.TenderingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.TenderingProcess,
      { meta: ContractNoticeFieldMeta.TenderingProcess,
        template: ({value, renderContext, fieldConfig}) => <TenderingProcessDisplay
          key={ContractNoticeField.TenderingProcess}
          meta={ContractNoticeFieldMeta.TenderingProcess}
          fieldConfig={fieldConfig}
          tenderingProcess={value?.TenderingProcess}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ProcurementProject,
      { meta: ContractNoticeFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={ContractNoticeField.ProcurementProject}
          meta={ContractNoticeFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      ContractNoticeField.ProcurementProjectLot,
      { meta: ContractNoticeFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={ContractNoticeField.ProcurementProjectLot}
          meta={ContractNoticeFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractNoticeDisplay<TFieldMeta>({ meta, fieldConfig, contractNotice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractNoticeTypeName,
    meta,
    fieldConfig,
    contractNotice,
    renderContext,
    ContractNoticeSubElementsMap,
  )
}
