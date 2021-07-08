import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportExecutionPlan } from  '../../model/doc/TransportExecutionPlan'
import { TransportExecutionPlanField, TransportExecutionPlanFieldMeta, TransportExecutionPlanTypeName } from  '../../meta/doc/TransportExecutionPlanMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ConsignmentDisplay } from '../cac/ConsignmentDisplay'
import { ContractDisplay } from '../cac/ContractDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from '../cac/LocationDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportationServiceDisplay } from '../cac/TransportationServiceDisplay'
import { TransportExecutionTermsDisplay } from '../cac/TransportExecutionTermsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportExecutionPlan, void>
  transportExecutionPlan: TransportExecutionPlan[] | undefined
  renderContext: RenderContext
}

export const TransportExecutionPlanSubElementsMap: SubElementsTemplatesMap<TransportExecutionPlanField, TransportExecutionPlan, void> = new Map([
    [
      TransportExecutionPlanField.UBLExtensions,
      { meta: TransportExecutionPlanFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportExecutionPlanField.UBLExtensions}
          meta={TransportExecutionPlanFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.UBLVersionID,
      { meta: TransportExecutionPlanFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanField.UBLVersionID}
          meta={TransportExecutionPlanFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.CustomizationID,
      { meta: TransportExecutionPlanFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanField.CustomizationID}
          meta={TransportExecutionPlanFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ProfileID,
      { meta: TransportExecutionPlanFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanField.ProfileID}
          meta={TransportExecutionPlanFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ProfileExecutionID,
      { meta: TransportExecutionPlanFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanField.ProfileExecutionID}
          meta={TransportExecutionPlanFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ID,
      { meta: TransportExecutionPlanFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanField.ID}
          meta={TransportExecutionPlanFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.VersionID,
      { meta: TransportExecutionPlanFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanField.VersionID}
          meta={TransportExecutionPlanFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.CopyIndicator,
      { meta: TransportExecutionPlanFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportExecutionPlanField.CopyIndicator}
          meta={TransportExecutionPlanFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.UUID,
      { meta: TransportExecutionPlanFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanField.UUID}
          meta={TransportExecutionPlanFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.IssueDate,
      { meta: TransportExecutionPlanFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportExecutionPlanField.IssueDate}
          meta={TransportExecutionPlanFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.IssueTime,
      { meta: TransportExecutionPlanFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportExecutionPlanField.IssueTime}
          meta={TransportExecutionPlanFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.DocumentStatusCode,
      { meta: TransportExecutionPlanFieldMeta.DocumentStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportExecutionPlanField.DocumentStatusCode}
          meta={TransportExecutionPlanFieldMeta.DocumentStatusCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.DocumentStatusReasonCode,
      { meta: TransportExecutionPlanFieldMeta.DocumentStatusReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportExecutionPlanField.DocumentStatusReasonCode}
          meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.DocumentStatusReasonDescription,
      { meta: TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionPlanField.DocumentStatusReasonDescription}
          meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription}
          fieldConfig={fieldConfig}
          text={value?.DocumentStatusReasonDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.Note,
      { meta: TransportExecutionPlanFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionPlanField.Note}
          meta={TransportExecutionPlanFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportUserRemarks,
      { meta: TransportExecutionPlanFieldMeta.TransportUserRemarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionPlanField.TransportUserRemarks}
          meta={TransportExecutionPlanFieldMeta.TransportUserRemarks}
          fieldConfig={fieldConfig}
          text={value?.TransportUserRemarks}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportServiceProviderRemarks,
      { meta: TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionPlanField.TransportServiceProviderRemarks}
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks}
          fieldConfig={fieldConfig}
          text={value?.TransportServiceProviderRemarks}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.SenderParty,
      { meta: TransportExecutionPlanFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanField.SenderParty}
          meta={TransportExecutionPlanFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ReceiverParty,
      { meta: TransportExecutionPlanFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanField.ReceiverParty}
          meta={TransportExecutionPlanFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportUserParty,
      { meta: TransportExecutionPlanFieldMeta.TransportUserParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanField.TransportUserParty}
          meta={TransportExecutionPlanFieldMeta.TransportUserParty}
          fieldConfig={fieldConfig}
          party={value?.TransportUserParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportServiceProviderParty,
      { meta: TransportExecutionPlanFieldMeta.TransportServiceProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanField.TransportServiceProviderParty}
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderParty}
          fieldConfig={fieldConfig}
          party={value?.TransportServiceProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.BillToParty,
      { meta: TransportExecutionPlanFieldMeta.BillToParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanField.BillToParty}
          meta={TransportExecutionPlanFieldMeta.BillToParty}
          fieldConfig={fieldConfig}
          party={value?.BillToParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.Signature,
      { meta: TransportExecutionPlanFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportExecutionPlanField.Signature}
          meta={TransportExecutionPlanFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportExecutionPlanRequestDocumentReference,
      { meta: TransportExecutionPlanFieldMeta.TransportExecutionPlanRequestDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportExecutionPlanField.TransportExecutionPlanRequestDocumentReference}
          meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanRequestDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportExecutionPlanRequestDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportExecutionPlanDocumentReference,
      { meta: TransportExecutionPlanFieldMeta.TransportExecutionPlanDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportExecutionPlanField.TransportExecutionPlanDocumentReference}
          meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportExecutionPlanDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportServiceDescriptionDocumentReference,
      { meta: TransportExecutionPlanFieldMeta.TransportServiceDescriptionDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportExecutionPlanField.TransportServiceDescriptionDocumentReference}
          meta={TransportExecutionPlanFieldMeta.TransportServiceDescriptionDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportServiceDescriptionDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.AdditionalDocumentReference,
      { meta: TransportExecutionPlanFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportExecutionPlanField.AdditionalDocumentReference}
          meta={TransportExecutionPlanFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportContract,
      { meta: TransportExecutionPlanFieldMeta.TransportContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={TransportExecutionPlanField.TransportContract}
          meta={TransportExecutionPlanFieldMeta.TransportContract}
          fieldConfig={fieldConfig}
          contract={value?.TransportContract}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportServiceProviderResponseRequiredPeriod,
      { meta: TransportExecutionPlanFieldMeta.TransportServiceProviderResponseRequiredPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanField.TransportServiceProviderResponseRequiredPeriod}
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderResponseRequiredPeriod}
          fieldConfig={fieldConfig}
          period={value?.TransportServiceProviderResponseRequiredPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportUserResponseRequiredPeriod,
      { meta: TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanField.TransportUserResponseRequiredPeriod}
          meta={TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod}
          fieldConfig={fieldConfig}
          period={value?.TransportUserResponseRequiredPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ValidityPeriod,
      { meta: TransportExecutionPlanFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanField.ValidityPeriod}
          meta={TransportExecutionPlanFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.MainTransportationService,
      { meta: TransportExecutionPlanFieldMeta.MainTransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={TransportExecutionPlanField.MainTransportationService}
          meta={TransportExecutionPlanFieldMeta.MainTransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.MainTransportationService}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.AdditionalTransportationService,
      { meta: TransportExecutionPlanFieldMeta.AdditionalTransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={TransportExecutionPlanField.AdditionalTransportationService}
          meta={TransportExecutionPlanFieldMeta.AdditionalTransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.AdditionalTransportationService}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ServiceStartTimePeriod,
      { meta: TransportExecutionPlanFieldMeta.ServiceStartTimePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanField.ServiceStartTimePeriod}
          meta={TransportExecutionPlanFieldMeta.ServiceStartTimePeriod}
          fieldConfig={fieldConfig}
          period={value?.ServiceStartTimePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ServiceEndTimePeriod,
      { meta: TransportExecutionPlanFieldMeta.ServiceEndTimePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanField.ServiceEndTimePeriod}
          meta={TransportExecutionPlanFieldMeta.ServiceEndTimePeriod}
          fieldConfig={fieldConfig}
          period={value?.ServiceEndTimePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.FromLocation,
      { meta: TransportExecutionPlanFieldMeta.FromLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportExecutionPlanField.FromLocation}
          meta={TransportExecutionPlanFieldMeta.FromLocation}
          fieldConfig={fieldConfig}
          location={value?.FromLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.ToLocation,
      { meta: TransportExecutionPlanFieldMeta.ToLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportExecutionPlanField.ToLocation}
          meta={TransportExecutionPlanFieldMeta.ToLocation}
          fieldConfig={fieldConfig}
          location={value?.ToLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.AtLocation,
      { meta: TransportExecutionPlanFieldMeta.AtLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportExecutionPlanField.AtLocation}
          meta={TransportExecutionPlanFieldMeta.AtLocation}
          fieldConfig={fieldConfig}
          location={value?.AtLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.TransportExecutionTerms,
      { meta: TransportExecutionPlanFieldMeta.TransportExecutionTerms,
        template: ({value, renderContext, fieldConfig}) => <TransportExecutionTermsDisplay
          key={TransportExecutionPlanField.TransportExecutionTerms}
          meta={TransportExecutionPlanFieldMeta.TransportExecutionTerms}
          fieldConfig={fieldConfig}
          transportExecutionTerms={value?.TransportExecutionTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanField.Consignment,
      { meta: TransportExecutionPlanFieldMeta.Consignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={TransportExecutionPlanField.Consignment}
          meta={TransportExecutionPlanFieldMeta.Consignment}
          fieldConfig={fieldConfig}
          consignment={value?.Consignment}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportExecutionPlanDisplay<TFieldMeta>({ meta, fieldConfig, transportExecutionPlan, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportExecutionPlanTypeName,
    meta,
    fieldConfig,
    transportExecutionPlan,
    renderContext,
    TransportExecutionPlanSubElementsMap,
  )
}
