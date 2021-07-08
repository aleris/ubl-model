import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderStatus } from  '../../model/doc/TenderStatus'
import { TenderStatusField, TenderStatusFieldMeta, TenderStatusTypeName } from  '../../meta/doc/TenderStatusMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EconomicOperatorPartyDisplay } from '../cac/EconomicOperatorPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotDisplay } from '../cac/ProcurementProjectLotDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderStatus, void>
  tenderStatus: TenderStatus[] | undefined
  renderContext: RenderContext
}

export const TenderStatusSubElementsMap: SubElementsTemplatesMap<TenderStatusField, TenderStatus, void> = new Map([
    [
      TenderStatusField.UBLExtensions,
      { meta: TenderStatusFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderStatusField.UBLExtensions}
          meta={TenderStatusFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.UBLVersionID,
      { meta: TenderStatusFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusField.UBLVersionID}
          meta={TenderStatusFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.CustomizationID,
      { meta: TenderStatusFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusField.CustomizationID}
          meta={TenderStatusFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ProfileID,
      { meta: TenderStatusFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusField.ProfileID}
          meta={TenderStatusFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ProfileExecutionID,
      { meta: TenderStatusFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusField.ProfileExecutionID}
          meta={TenderStatusFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ID,
      { meta: TenderStatusFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusField.ID}
          meta={TenderStatusFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.CopyIndicator,
      { meta: TenderStatusFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderStatusField.CopyIndicator}
          meta={TenderStatusFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.UUID,
      { meta: TenderStatusFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusField.UUID}
          meta={TenderStatusFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ContractFolderID,
      { meta: TenderStatusFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusField.ContractFolderID}
          meta={TenderStatusFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.IssueDate,
      { meta: TenderStatusFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderStatusField.IssueDate}
          meta={TenderStatusFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.IssueTime,
      { meta: TenderStatusFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderStatusField.IssueTime}
          meta={TenderStatusFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ContractName,
      { meta: TenderStatusFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderStatusField.ContractName}
          meta={TenderStatusFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.Note,
      { meta: TenderStatusFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderStatusField.Note}
          meta={TenderStatusFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ProcedureCode,
      { meta: TenderStatusFieldMeta.ProcedureCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderStatusField.ProcedureCode}
          meta={TenderStatusFieldMeta.ProcedureCode}
          fieldConfig={fieldConfig}
          code={value?.ProcedureCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.TenderSubmissionDeadlinePeriod,
      { meta: TenderStatusFieldMeta.TenderSubmissionDeadlinePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderStatusField.TenderSubmissionDeadlinePeriod}
          meta={TenderStatusFieldMeta.TenderSubmissionDeadlinePeriod}
          fieldConfig={fieldConfig}
          period={value?.TenderSubmissionDeadlinePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.InvitationSubmissionPeriod,
      { meta: TenderStatusFieldMeta.InvitationSubmissionPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderStatusField.InvitationSubmissionPeriod}
          meta={TenderStatusFieldMeta.InvitationSubmissionPeriod}
          fieldConfig={fieldConfig}
          period={value?.InvitationSubmissionPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ParticipationRequestReceptionPeriod,
      { meta: TenderStatusFieldMeta.ParticipationRequestReceptionPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderStatusField.ParticipationRequestReceptionPeriod}
          meta={TenderStatusFieldMeta.ParticipationRequestReceptionPeriod}
          fieldConfig={fieldConfig}
          period={value?.ParticipationRequestReceptionPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ProcurementLegislationDocumentReference,
      { meta: TenderStatusFieldMeta.ProcurementLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderStatusField.ProcurementLegislationDocumentReference}
          meta={TenderStatusFieldMeta.ProcurementLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ProcurementLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.FiscalLegislationDocumentReference,
      { meta: TenderStatusFieldMeta.FiscalLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderStatusField.FiscalLegislationDocumentReference}
          meta={TenderStatusFieldMeta.FiscalLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.FiscalLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.EnvironmentalLegislationDocumentReference,
      { meta: TenderStatusFieldMeta.EnvironmentalLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderStatusField.EnvironmentalLegislationDocumentReference}
          meta={TenderStatusFieldMeta.EnvironmentalLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.EnvironmentalLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.EmploymentLegislationDocumentReference,
      { meta: TenderStatusFieldMeta.EmploymentLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderStatusField.EmploymentLegislationDocumentReference}
          meta={TenderStatusFieldMeta.EmploymentLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.EmploymentLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.TenderStatusInquiryDocumentReference,
      { meta: TenderStatusFieldMeta.TenderStatusInquiryDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderStatusField.TenderStatusInquiryDocumentReference}
          meta={TenderStatusFieldMeta.TenderStatusInquiryDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TenderStatusInquiryDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.Signature,
      { meta: TenderStatusFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TenderStatusField.Signature}
          meta={TenderStatusFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ContractingParty,
      { meta: TenderStatusFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={TenderStatusField.ContractingParty}
          meta={TenderStatusFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.EconomicOperatorParty,
      { meta: TenderStatusFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={TenderStatusField.EconomicOperatorParty}
          meta={TenderStatusFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.DocumentProviderParty,
      { meta: TenderStatusFieldMeta.DocumentProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderStatusField.DocumentProviderParty}
          meta={TenderStatusFieldMeta.DocumentProviderParty}
          fieldConfig={fieldConfig}
          party={value?.DocumentProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.TenderRecipientParty,
      { meta: TenderStatusFieldMeta.TenderRecipientParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderStatusField.TenderRecipientParty}
          meta={TenderStatusFieldMeta.TenderRecipientParty}
          fieldConfig={fieldConfig}
          party={value?.TenderRecipientParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ProcurementProject,
      { meta: TenderStatusFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={TenderStatusField.ProcurementProject}
          meta={TenderStatusFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusField.ProcurementProjectLot,
      { meta: TenderStatusFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={TenderStatusField.ProcurementProjectLot}
          meta={TenderStatusFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderStatusDisplay<TFieldMeta>({ meta, fieldConfig, tenderStatus, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderStatusTypeName,
    meta,
    fieldConfig,
    tenderStatus,
    renderContext,
    TenderStatusSubElementsMap,
  )
}
