import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingProcess } from  '../../model/cac/TenderingProcess'
import { TenderingProcessField, TenderingProcessFieldMeta, TenderingProcessTypeName } from  '../../meta/cac/TenderingProcessMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AuctionTermsDisplay } from './AuctionTermsDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractingSystemDisplay } from './ContractingSystemDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { EconomicOperatorShortListDisplay } from './EconomicOperatorShortListDisplay'
import { EventDisplay } from './EventDisplay'
import { FrameworkAgreementDisplay } from './FrameworkAgreementDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { ProcessJustificationDisplay } from './ProcessJustificationDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderingProcess, void>
  tenderingProcess: TenderingProcess[] | undefined
  renderContext: RenderContext
}

export const TenderingProcessSubElementsMap: SubElementsTemplatesMap<TenderingProcessField, TenderingProcess, void> = new Map([
    [
      TenderingProcessField.UBLExtensions,
      { meta: TenderingProcessFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderingProcessField.UBLExtensions}
          meta={TenderingProcessFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ID,
      { meta: TenderingProcessFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingProcessField.ID}
          meta={TenderingProcessFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.OriginalContractingSystemID,
      { meta: TenderingProcessFieldMeta.OriginalContractingSystemID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingProcessField.OriginalContractingSystemID}
          meta={TenderingProcessFieldMeta.OriginalContractingSystemID}
          fieldConfig={fieldConfig}
          identifier={value?.OriginalContractingSystemID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.Description,
      { meta: TenderingProcessFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingProcessField.Description}
          meta={TenderingProcessFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.NegotiationDescription,
      { meta: TenderingProcessFieldMeta.NegotiationDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingProcessField.NegotiationDescription}
          meta={TenderingProcessFieldMeta.NegotiationDescription}
          fieldConfig={fieldConfig}
          text={value?.NegotiationDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ProcedureCode,
      { meta: TenderingProcessFieldMeta.ProcedureCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingProcessField.ProcedureCode}
          meta={TenderingProcessFieldMeta.ProcedureCode}
          fieldConfig={fieldConfig}
          code={value?.ProcedureCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.UrgencyCode,
      { meta: TenderingProcessFieldMeta.UrgencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingProcessField.UrgencyCode}
          meta={TenderingProcessFieldMeta.UrgencyCode}
          fieldConfig={fieldConfig}
          code={value?.UrgencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ExpenseCode,
      { meta: TenderingProcessFieldMeta.ExpenseCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingProcessField.ExpenseCode}
          meta={TenderingProcessFieldMeta.ExpenseCode}
          fieldConfig={fieldConfig}
          code={value?.ExpenseCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.PartPresentationCode,
      { meta: TenderingProcessFieldMeta.PartPresentationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingProcessField.PartPresentationCode}
          meta={TenderingProcessFieldMeta.PartPresentationCode}
          fieldConfig={fieldConfig}
          code={value?.PartPresentationCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ContractingSystemCode,
      { meta: TenderingProcessFieldMeta.ContractingSystemCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingProcessField.ContractingSystemCode}
          meta={TenderingProcessFieldMeta.ContractingSystemCode}
          fieldConfig={fieldConfig}
          code={value?.ContractingSystemCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.SubmissionMethodCode,
      { meta: TenderingProcessFieldMeta.SubmissionMethodCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingProcessField.SubmissionMethodCode}
          meta={TenderingProcessFieldMeta.SubmissionMethodCode}
          fieldConfig={fieldConfig}
          code={value?.SubmissionMethodCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.CandidateReductionConstraintIndicator,
      { meta: TenderingProcessFieldMeta.CandidateReductionConstraintIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingProcessField.CandidateReductionConstraintIndicator}
          meta={TenderingProcessFieldMeta.CandidateReductionConstraintIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CandidateReductionConstraintIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.GovernmentAgreementConstraintIndicator,
      { meta: TenderingProcessFieldMeta.GovernmentAgreementConstraintIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingProcessField.GovernmentAgreementConstraintIndicator}
          meta={TenderingProcessFieldMeta.GovernmentAgreementConstraintIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.GovernmentAgreementConstraintIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.AccessToolsURI,
      { meta: TenderingProcessFieldMeta.AccessToolsURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingProcessField.AccessToolsURI}
          meta={TenderingProcessFieldMeta.AccessToolsURI}
          fieldConfig={fieldConfig}
          identifier={value?.AccessToolsURI}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.TerminatedIndicator,
      { meta: TenderingProcessFieldMeta.TerminatedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingProcessField.TerminatedIndicator}
          meta={TenderingProcessFieldMeta.TerminatedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.TerminatedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.DocumentAvailabilityPeriod,
      { meta: TenderingProcessFieldMeta.DocumentAvailabilityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingProcessField.DocumentAvailabilityPeriod}
          meta={TenderingProcessFieldMeta.DocumentAvailabilityPeriod}
          fieldConfig={fieldConfig}
          period={value?.DocumentAvailabilityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.TenderSubmissionDeadlinePeriod,
      { meta: TenderingProcessFieldMeta.TenderSubmissionDeadlinePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingProcessField.TenderSubmissionDeadlinePeriod}
          meta={TenderingProcessFieldMeta.TenderSubmissionDeadlinePeriod}
          fieldConfig={fieldConfig}
          period={value?.TenderSubmissionDeadlinePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.InvitationSubmissionPeriod,
      { meta: TenderingProcessFieldMeta.InvitationSubmissionPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingProcessField.InvitationSubmissionPeriod}
          meta={TenderingProcessFieldMeta.InvitationSubmissionPeriod}
          fieldConfig={fieldConfig}
          period={value?.InvitationSubmissionPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ParticipationInvitationPeriod,
      { meta: TenderingProcessFieldMeta.ParticipationInvitationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingProcessField.ParticipationInvitationPeriod}
          meta={TenderingProcessFieldMeta.ParticipationInvitationPeriod}
          fieldConfig={fieldConfig}
          period={value?.ParticipationInvitationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ParticipationRequestReceptionPeriod,
      { meta: TenderingProcessFieldMeta.ParticipationRequestReceptionPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingProcessField.ParticipationRequestReceptionPeriod}
          meta={TenderingProcessFieldMeta.ParticipationRequestReceptionPeriod}
          fieldConfig={fieldConfig}
          period={value?.ParticipationRequestReceptionPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.AdditionalInformationRequestPeriod,
      { meta: TenderingProcessFieldMeta.AdditionalInformationRequestPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingProcessField.AdditionalInformationRequestPeriod}
          meta={TenderingProcessFieldMeta.AdditionalInformationRequestPeriod}
          fieldConfig={fieldConfig}
          period={value?.AdditionalInformationRequestPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.NoticeDocumentReference,
      { meta: TenderingProcessFieldMeta.NoticeDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingProcessField.NoticeDocumentReference}
          meta={TenderingProcessFieldMeta.NoticeDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.NoticeDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.AdditionalDocumentReference,
      { meta: TenderingProcessFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingProcessField.AdditionalDocumentReference}
          meta={TenderingProcessFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ProcessJustification,
      { meta: TenderingProcessFieldMeta.ProcessJustification,
        template: ({value, renderContext, fieldConfig}) => <ProcessJustificationDisplay
          key={TenderingProcessField.ProcessJustification}
          meta={TenderingProcessFieldMeta.ProcessJustification}
          fieldConfig={fieldConfig}
          processJustification={value?.ProcessJustification}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.EconomicOperatorShortList,
      { meta: TenderingProcessFieldMeta.EconomicOperatorShortList,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorShortListDisplay
          key={TenderingProcessField.EconomicOperatorShortList}
          meta={TenderingProcessFieldMeta.EconomicOperatorShortList}
          fieldConfig={fieldConfig}
          economicOperatorShortList={value?.EconomicOperatorShortList}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.OpenTenderEvent,
      { meta: TenderingProcessFieldMeta.OpenTenderEvent,
        template: ({value, renderContext, fieldConfig}) => <EventDisplay
          key={TenderingProcessField.OpenTenderEvent}
          meta={TenderingProcessFieldMeta.OpenTenderEvent}
          fieldConfig={fieldConfig}
          event={value?.OpenTenderEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.AuctionTerms,
      { meta: TenderingProcessFieldMeta.AuctionTerms,
        template: ({value, renderContext, fieldConfig}) => <AuctionTermsDisplay
          key={TenderingProcessField.AuctionTerms}
          meta={TenderingProcessFieldMeta.AuctionTerms}
          fieldConfig={fieldConfig}
          auctionTerms={value?.AuctionTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.FrameworkAgreement,
      { meta: TenderingProcessFieldMeta.FrameworkAgreement,
        template: ({value, renderContext, fieldConfig}) => <FrameworkAgreementDisplay
          key={TenderingProcessField.FrameworkAgreement}
          meta={TenderingProcessFieldMeta.FrameworkAgreement}
          fieldConfig={fieldConfig}
          frameworkAgreement={value?.FrameworkAgreement}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingProcessField.ContractingSystem,
      { meta: TenderingProcessFieldMeta.ContractingSystem,
        template: ({value, renderContext, fieldConfig}) => <ContractingSystemDisplay
          key={TenderingProcessField.ContractingSystem}
          meta={TenderingProcessFieldMeta.ContractingSystem}
          fieldConfig={fieldConfig}
          contractingSystem={value?.ContractingSystem}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderingProcessDisplay<TFieldMeta>({ meta, fieldConfig, tenderingProcess, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderingProcessTypeName,
    meta,
    fieldConfig,
    tenderingProcess,
    renderContext,
    TenderingProcessSubElementsMap,
  )
}
