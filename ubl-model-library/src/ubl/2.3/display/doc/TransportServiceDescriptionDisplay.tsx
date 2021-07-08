import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportServiceDescription } from  '../../model/doc/TransportServiceDescription'
import { TransportServiceDescriptionField, TransportServiceDescriptionFieldMeta, TransportServiceDescriptionTypeName } from  '../../meta/doc/TransportServiceDescriptionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportationServiceDisplay } from '../cac/TransportationServiceDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportServiceDescription, void>
  transportServiceDescription: TransportServiceDescription[] | undefined
  renderContext: RenderContext
}

export const TransportServiceDescriptionSubElementsMap: SubElementsTemplatesMap<TransportServiceDescriptionField, TransportServiceDescription, void> = new Map([
    [
      TransportServiceDescriptionField.UBLExtensions,
      { meta: TransportServiceDescriptionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportServiceDescriptionField.UBLExtensions}
          meta={TransportServiceDescriptionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.UBLVersionID,
      { meta: TransportServiceDescriptionFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionField.UBLVersionID}
          meta={TransportServiceDescriptionFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.CustomizationID,
      { meta: TransportServiceDescriptionFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionField.CustomizationID}
          meta={TransportServiceDescriptionFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ProfileID,
      { meta: TransportServiceDescriptionFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionField.ProfileID}
          meta={TransportServiceDescriptionFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ProfileExecutionID,
      { meta: TransportServiceDescriptionFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionField.ProfileExecutionID}
          meta={TransportServiceDescriptionFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ID,
      { meta: TransportServiceDescriptionFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionField.ID}
          meta={TransportServiceDescriptionFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.CopyIndicator,
      { meta: TransportServiceDescriptionFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportServiceDescriptionField.CopyIndicator}
          meta={TransportServiceDescriptionFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.UUID,
      { meta: TransportServiceDescriptionFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionField.UUID}
          meta={TransportServiceDescriptionFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.IssueDate,
      { meta: TransportServiceDescriptionFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportServiceDescriptionField.IssueDate}
          meta={TransportServiceDescriptionFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.IssueTime,
      { meta: TransportServiceDescriptionFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportServiceDescriptionField.IssueTime}
          meta={TransportServiceDescriptionFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.Note,
      { meta: TransportServiceDescriptionFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportServiceDescriptionField.Note}
          meta={TransportServiceDescriptionFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ServiceName,
      { meta: TransportServiceDescriptionFieldMeta.ServiceName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportServiceDescriptionField.ServiceName}
          meta={TransportServiceDescriptionFieldMeta.ServiceName}
          fieldConfig={fieldConfig}
          text={value?.ServiceName}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ResponseCode,
      { meta: TransportServiceDescriptionFieldMeta.ResponseCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportServiceDescriptionField.ResponseCode}
          meta={TransportServiceDescriptionFieldMeta.ResponseCode}
          fieldConfig={fieldConfig}
          code={value?.ResponseCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.Signature,
      { meta: TransportServiceDescriptionFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportServiceDescriptionField.Signature}
          meta={TransportServiceDescriptionFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.SenderParty,
      { meta: TransportServiceDescriptionFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportServiceDescriptionField.SenderParty}
          meta={TransportServiceDescriptionFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ReceiverParty,
      { meta: TransportServiceDescriptionFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportServiceDescriptionField.ReceiverParty}
          meta={TransportServiceDescriptionFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.TransportServiceDescriptionRequestDocumentReference,
      { meta: TransportServiceDescriptionFieldMeta.TransportServiceDescriptionRequestDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportServiceDescriptionField.TransportServiceDescriptionRequestDocumentReference}
          meta={TransportServiceDescriptionFieldMeta.TransportServiceDescriptionRequestDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportServiceDescriptionRequestDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.TransportServiceProviderParty,
      { meta: TransportServiceDescriptionFieldMeta.TransportServiceProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportServiceDescriptionField.TransportServiceProviderParty}
          meta={TransportServiceDescriptionFieldMeta.TransportServiceProviderParty}
          fieldConfig={fieldConfig}
          party={value?.TransportServiceProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ServiceChargePaymentTerms,
      { meta: TransportServiceDescriptionFieldMeta.ServiceChargePaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={TransportServiceDescriptionField.ServiceChargePaymentTerms}
          meta={TransportServiceDescriptionFieldMeta.ServiceChargePaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.ServiceChargePaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.ValidityPeriod,
      { meta: TransportServiceDescriptionFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportServiceDescriptionField.ValidityPeriod}
          meta={TransportServiceDescriptionFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionField.TransportationService,
      { meta: TransportServiceDescriptionFieldMeta.TransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={TransportServiceDescriptionField.TransportationService}
          meta={TransportServiceDescriptionFieldMeta.TransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.TransportationService}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportServiceDescriptionDisplay<TFieldMeta>({ meta, fieldConfig, transportServiceDescription, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportServiceDescriptionTypeName,
    meta,
    fieldConfig,
    transportServiceDescription,
    renderContext,
    TransportServiceDescriptionSubElementsMap,
  )
}
