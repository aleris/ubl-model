import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportExecutionPlanRequest } from  '../../model/doc/TransportExecutionPlanRequest'
import { TransportExecutionPlanRequestField, TransportExecutionPlanRequestFieldMeta, TransportExecutionPlanRequestTypeName } from  '../../meta/doc/TransportExecutionPlanRequestMeta'
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
  fieldConfig?: FieldConfig<TransportExecutionPlanRequest, void>
  transportExecutionPlanRequest: TransportExecutionPlanRequest[] | undefined
  renderContext: RenderContext
}

export const TransportExecutionPlanRequestSubElementsMap: SubElementsTemplatesMap<TransportExecutionPlanRequestField, TransportExecutionPlanRequest, void> = new Map([
    [
      TransportExecutionPlanRequestField.UBLExtensions,
      { meta: TransportExecutionPlanRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportExecutionPlanRequestField.UBLExtensions}
          meta={TransportExecutionPlanRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.UBLVersionID,
      { meta: TransportExecutionPlanRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanRequestField.UBLVersionID}
          meta={TransportExecutionPlanRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.CustomizationID,
      { meta: TransportExecutionPlanRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanRequestField.CustomizationID}
          meta={TransportExecutionPlanRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.ProfileID,
      { meta: TransportExecutionPlanRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanRequestField.ProfileID}
          meta={TransportExecutionPlanRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.ProfileExecutionID,
      { meta: TransportExecutionPlanRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanRequestField.ProfileExecutionID}
          meta={TransportExecutionPlanRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.ID,
      { meta: TransportExecutionPlanRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanRequestField.ID}
          meta={TransportExecutionPlanRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.VersionID,
      { meta: TransportExecutionPlanRequestFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanRequestField.VersionID}
          meta={TransportExecutionPlanRequestFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.CopyIndicator,
      { meta: TransportExecutionPlanRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportExecutionPlanRequestField.CopyIndicator}
          meta={TransportExecutionPlanRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.UUID,
      { meta: TransportExecutionPlanRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportExecutionPlanRequestField.UUID}
          meta={TransportExecutionPlanRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.IssueDate,
      { meta: TransportExecutionPlanRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportExecutionPlanRequestField.IssueDate}
          meta={TransportExecutionPlanRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.IssueTime,
      { meta: TransportExecutionPlanRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportExecutionPlanRequestField.IssueTime}
          meta={TransportExecutionPlanRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.DocumentStatusCode,
      { meta: TransportExecutionPlanRequestFieldMeta.DocumentStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportExecutionPlanRequestField.DocumentStatusCode}
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.DocumentStatusReasonCode,
      { meta: TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportExecutionPlanRequestField.DocumentStatusReasonCode}
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.DocumentStatusReasonDescription,
      { meta: TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionPlanRequestField.DocumentStatusReasonDescription}
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription}
          fieldConfig={fieldConfig}
          text={value?.DocumentStatusReasonDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.Note,
      { meta: TransportExecutionPlanRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionPlanRequestField.Note}
          meta={TransportExecutionPlanRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportUserRemarks,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportUserRemarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionPlanRequestField.TransportUserRemarks}
          meta={TransportExecutionPlanRequestFieldMeta.TransportUserRemarks}
          fieldConfig={fieldConfig}
          text={value?.TransportUserRemarks}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.SenderParty,
      { meta: TransportExecutionPlanRequestFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanRequestField.SenderParty}
          meta={TransportExecutionPlanRequestFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.ReceiverParty,
      { meta: TransportExecutionPlanRequestFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanRequestField.ReceiverParty}
          meta={TransportExecutionPlanRequestFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportUserParty,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportUserParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanRequestField.TransportUserParty}
          meta={TransportExecutionPlanRequestFieldMeta.TransportUserParty}
          fieldConfig={fieldConfig}
          party={value?.TransportUserParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportServiceProviderParty,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportServiceProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanRequestField.TransportServiceProviderParty}
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderParty}
          fieldConfig={fieldConfig}
          party={value?.TransportServiceProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.PayeeParty,
      { meta: TransportExecutionPlanRequestFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportExecutionPlanRequestField.PayeeParty}
          meta={TransportExecutionPlanRequestFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.Signature,
      { meta: TransportExecutionPlanRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportExecutionPlanRequestField.Signature}
          meta={TransportExecutionPlanRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportExecutionPlanDocumentReference,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportExecutionPlanDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportExecutionPlanRequestField.TransportExecutionPlanDocumentReference}
          meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionPlanDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportExecutionPlanDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportServiceDescriptionDocumentReference,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportServiceDescriptionDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportExecutionPlanRequestField.TransportServiceDescriptionDocumentReference}
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceDescriptionDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportServiceDescriptionDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.AdditionalDocumentReference,
      { meta: TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportExecutionPlanRequestField.AdditionalDocumentReference}
          meta={TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportContract,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={TransportExecutionPlanRequestField.TransportContract}
          meta={TransportExecutionPlanRequestFieldMeta.TransportContract}
          fieldConfig={fieldConfig}
          contract={value?.TransportContract}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportServiceProviderResponseDeadlinePeriod,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanRequestField.TransportServiceProviderResponseDeadlinePeriod}
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod}
          fieldConfig={fieldConfig}
          period={value?.TransportServiceProviderResponseDeadlinePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.MainTransportationService,
      { meta: TransportExecutionPlanRequestFieldMeta.MainTransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={TransportExecutionPlanRequestField.MainTransportationService}
          meta={TransportExecutionPlanRequestFieldMeta.MainTransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.MainTransportationService}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.AdditionalTransportationService,
      { meta: TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={TransportExecutionPlanRequestField.AdditionalTransportationService}
          meta={TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.AdditionalTransportationService}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.ServiceStartTimePeriod,
      { meta: TransportExecutionPlanRequestFieldMeta.ServiceStartTimePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanRequestField.ServiceStartTimePeriod}
          meta={TransportExecutionPlanRequestFieldMeta.ServiceStartTimePeriod}
          fieldConfig={fieldConfig}
          period={value?.ServiceStartTimePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.ServiceEndTimePeriod,
      { meta: TransportExecutionPlanRequestFieldMeta.ServiceEndTimePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportExecutionPlanRequestField.ServiceEndTimePeriod}
          meta={TransportExecutionPlanRequestFieldMeta.ServiceEndTimePeriod}
          fieldConfig={fieldConfig}
          period={value?.ServiceEndTimePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.FromLocation,
      { meta: TransportExecutionPlanRequestFieldMeta.FromLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportExecutionPlanRequestField.FromLocation}
          meta={TransportExecutionPlanRequestFieldMeta.FromLocation}
          fieldConfig={fieldConfig}
          location={value?.FromLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.ToLocation,
      { meta: TransportExecutionPlanRequestFieldMeta.ToLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportExecutionPlanRequestField.ToLocation}
          meta={TransportExecutionPlanRequestFieldMeta.ToLocation}
          fieldConfig={fieldConfig}
          location={value?.ToLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.AtLocation,
      { meta: TransportExecutionPlanRequestFieldMeta.AtLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportExecutionPlanRequestField.AtLocation}
          meta={TransportExecutionPlanRequestFieldMeta.AtLocation}
          fieldConfig={fieldConfig}
          location={value?.AtLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.TransportExecutionTerms,
      { meta: TransportExecutionPlanRequestFieldMeta.TransportExecutionTerms,
        template: ({value, renderContext, fieldConfig}) => <TransportExecutionTermsDisplay
          key={TransportExecutionPlanRequestField.TransportExecutionTerms}
          meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionTerms}
          fieldConfig={fieldConfig}
          transportExecutionTerms={value?.TransportExecutionTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionPlanRequestField.Consignment,
      { meta: TransportExecutionPlanRequestFieldMeta.Consignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={TransportExecutionPlanRequestField.Consignment}
          meta={TransportExecutionPlanRequestFieldMeta.Consignment}
          fieldConfig={fieldConfig}
          consignment={value?.Consignment}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportExecutionPlanRequestDisplay<TFieldMeta>({ meta, fieldConfig, transportExecutionPlanRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportExecutionPlanRequestTypeName,
    meta,
    fieldConfig,
    transportExecutionPlanRequest,
    renderContext,
    TransportExecutionPlanRequestSubElementsMap,
  )
}
