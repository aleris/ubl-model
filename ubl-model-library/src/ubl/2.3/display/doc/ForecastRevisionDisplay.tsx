import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastRevision } from  '../../model/doc/ForecastRevision'
import { ForecastRevisionField, ForecastRevisionFieldMeta, ForecastRevisionTypeName } from  '../../meta/doc/ForecastRevisionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ForecastRevisionLineDisplay } from '../cac/ForecastRevisionLineDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ForecastRevision, void>
  forecastRevision: ForecastRevision[] | undefined
  renderContext: RenderContext
}

export const ForecastRevisionSubElementsMap: SubElementsTemplatesMap<ForecastRevisionField, ForecastRevision, void> = new Map([
    [
      ForecastRevisionField.UBLExtensions,
      { meta: ForecastRevisionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ForecastRevisionField.UBLExtensions}
          meta={ForecastRevisionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.UBLVersionID,
      { meta: ForecastRevisionFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionField.UBLVersionID}
          meta={ForecastRevisionFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.CustomizationID,
      { meta: ForecastRevisionFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionField.CustomizationID}
          meta={ForecastRevisionFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.ProfileID,
      { meta: ForecastRevisionFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionField.ProfileID}
          meta={ForecastRevisionFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.ProfileExecutionID,
      { meta: ForecastRevisionFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionField.ProfileExecutionID}
          meta={ForecastRevisionFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.ID,
      { meta: ForecastRevisionFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionField.ID}
          meta={ForecastRevisionFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.CopyIndicator,
      { meta: ForecastRevisionFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ForecastRevisionField.CopyIndicator}
          meta={ForecastRevisionFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.UUID,
      { meta: ForecastRevisionFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionField.UUID}
          meta={ForecastRevisionFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.IssueDate,
      { meta: ForecastRevisionFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ForecastRevisionField.IssueDate}
          meta={ForecastRevisionFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.IssueTime,
      { meta: ForecastRevisionFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ForecastRevisionField.IssueTime}
          meta={ForecastRevisionFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.Note,
      { meta: ForecastRevisionFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForecastRevisionField.Note}
          meta={ForecastRevisionFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.SequenceNumberID,
      { meta: ForecastRevisionFieldMeta.SequenceNumberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastRevisionField.SequenceNumberID}
          meta={ForecastRevisionFieldMeta.SequenceNumberID}
          fieldConfig={fieldConfig}
          identifier={value?.SequenceNumberID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.RevisionStatusCode,
      { meta: ForecastRevisionFieldMeta.RevisionStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastRevisionField.RevisionStatusCode}
          meta={ForecastRevisionFieldMeta.RevisionStatusCode}
          fieldConfig={fieldConfig}
          code={value?.RevisionStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.PurposeCode,
      { meta: ForecastRevisionFieldMeta.PurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastRevisionField.PurposeCode}
          meta={ForecastRevisionFieldMeta.PurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.ForecastPeriod,
      { meta: ForecastRevisionFieldMeta.ForecastPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ForecastRevisionField.ForecastPeriod}
          meta={ForecastRevisionFieldMeta.ForecastPeriod}
          fieldConfig={fieldConfig}
          period={value?.ForecastPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.OriginalDocumentReference,
      { meta: ForecastRevisionFieldMeta.OriginalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ForecastRevisionField.OriginalDocumentReference}
          meta={ForecastRevisionFieldMeta.OriginalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.Signature,
      { meta: ForecastRevisionFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ForecastRevisionField.Signature}
          meta={ForecastRevisionFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.SenderParty,
      { meta: ForecastRevisionFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ForecastRevisionField.SenderParty}
          meta={ForecastRevisionFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.ReceiverParty,
      { meta: ForecastRevisionFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ForecastRevisionField.ReceiverParty}
          meta={ForecastRevisionFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.BuyerCustomerParty,
      { meta: ForecastRevisionFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ForecastRevisionField.BuyerCustomerParty}
          meta={ForecastRevisionFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.SellerSupplierParty,
      { meta: ForecastRevisionFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ForecastRevisionField.SellerSupplierParty}
          meta={ForecastRevisionFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastRevisionField.ForecastRevisionLine,
      { meta: ForecastRevisionFieldMeta.ForecastRevisionLine,
        template: ({value, renderContext, fieldConfig}) => <ForecastRevisionLineDisplay
          key={ForecastRevisionField.ForecastRevisionLine}
          meta={ForecastRevisionFieldMeta.ForecastRevisionLine}
          fieldConfig={fieldConfig}
          forecastRevisionLine={value?.ForecastRevisionLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ForecastRevisionDisplay<TFieldMeta>({ meta, fieldConfig, forecastRevision, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ForecastRevisionTypeName,
    meta,
    fieldConfig,
    forecastRevision,
    renderContext,
    ForecastRevisionSubElementsMap,
  )
}
