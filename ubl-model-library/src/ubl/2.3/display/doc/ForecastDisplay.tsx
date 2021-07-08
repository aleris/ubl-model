import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Forecast } from  '../../model/doc/Forecast'
import { ForecastField, ForecastFieldMeta, ForecastTypeName } from  '../../meta/doc/ForecastMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ForecastLineDisplay } from '../cac/ForecastLineDisplay'
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
  fieldConfig?: FieldConfig<Forecast, void>
  forecast: Forecast[] | undefined
  renderContext: RenderContext
}

export const ForecastSubElementsMap: SubElementsTemplatesMap<ForecastField, Forecast, void> = new Map([
    [
      ForecastField.UBLExtensions,
      { meta: ForecastFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ForecastField.UBLExtensions}
          meta={ForecastFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.UBLVersionID,
      { meta: ForecastFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastField.UBLVersionID}
          meta={ForecastFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.CustomizationID,
      { meta: ForecastFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastField.CustomizationID}
          meta={ForecastFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.ProfileID,
      { meta: ForecastFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastField.ProfileID}
          meta={ForecastFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.ProfileExecutionID,
      { meta: ForecastFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastField.ProfileExecutionID}
          meta={ForecastFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.ID,
      { meta: ForecastFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastField.ID}
          meta={ForecastFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.CopyIndicator,
      { meta: ForecastFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ForecastField.CopyIndicator}
          meta={ForecastFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.UUID,
      { meta: ForecastFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastField.UUID}
          meta={ForecastFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.IssueDate,
      { meta: ForecastFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ForecastField.IssueDate}
          meta={ForecastFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.IssueTime,
      { meta: ForecastFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ForecastField.IssueTime}
          meta={ForecastFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.Note,
      { meta: ForecastFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForecastField.Note}
          meta={ForecastFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.VersionID,
      { meta: ForecastFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForecastField.VersionID}
          meta={ForecastFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.BasedOnConsensusIndicator,
      { meta: ForecastFieldMeta.BasedOnConsensusIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ForecastField.BasedOnConsensusIndicator}
          meta={ForecastFieldMeta.BasedOnConsensusIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.BasedOnConsensusIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.ForecastPurposeCode,
      { meta: ForecastFieldMeta.ForecastPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForecastField.ForecastPurposeCode}
          meta={ForecastFieldMeta.ForecastPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.ForecastPeriod,
      { meta: ForecastFieldMeta.ForecastPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ForecastField.ForecastPeriod}
          meta={ForecastFieldMeta.ForecastPeriod}
          fieldConfig={fieldConfig}
          period={value?.ForecastPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.AdditionalDocumentReference,
      { meta: ForecastFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ForecastField.AdditionalDocumentReference}
          meta={ForecastFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.Signature,
      { meta: ForecastFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ForecastField.Signature}
          meta={ForecastFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.SenderParty,
      { meta: ForecastFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ForecastField.SenderParty}
          meta={ForecastFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.ReceiverParty,
      { meta: ForecastFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ForecastField.ReceiverParty}
          meta={ForecastFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.BuyerCustomerParty,
      { meta: ForecastFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ForecastField.BuyerCustomerParty}
          meta={ForecastFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.SellerSupplierParty,
      { meta: ForecastFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ForecastField.SellerSupplierParty}
          meta={ForecastFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForecastField.ForecastLine,
      { meta: ForecastFieldMeta.ForecastLine,
        template: ({value, renderContext, fieldConfig}) => <ForecastLineDisplay
          key={ForecastField.ForecastLine}
          meta={ForecastFieldMeta.ForecastLine}
          fieldConfig={fieldConfig}
          forecastLine={value?.ForecastLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ForecastDisplay<TFieldMeta>({ meta, fieldConfig, forecast, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ForecastTypeName,
    meta,
    fieldConfig,
    forecast,
    renderContext,
    ForecastSubElementsMap,
  )
}
