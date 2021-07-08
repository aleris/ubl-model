import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { FulfilmentCancellation } from  '../../model/doc/FulfilmentCancellation'
import { FulfilmentCancellationField, FulfilmentCancellationFieldMeta, FulfilmentCancellationTypeName } from  '../../meta/doc/FulfilmentCancellationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractDisplay } from '../cac/ContractDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { OrderReferenceDisplay } from '../cac/OrderReferenceDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<FulfilmentCancellation, void>
  fulfilmentCancellation: FulfilmentCancellation[] | undefined
  renderContext: RenderContext
}

export const FulfilmentCancellationSubElementsMap: SubElementsTemplatesMap<FulfilmentCancellationField, FulfilmentCancellation, void> = new Map([
    [
      FulfilmentCancellationField.UBLExtensions,
      { meta: FulfilmentCancellationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={FulfilmentCancellationField.UBLExtensions}
          meta={FulfilmentCancellationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.UBLVersionID,
      { meta: FulfilmentCancellationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FulfilmentCancellationField.UBLVersionID}
          meta={FulfilmentCancellationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.CustomizationID,
      { meta: FulfilmentCancellationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FulfilmentCancellationField.CustomizationID}
          meta={FulfilmentCancellationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.ProfileID,
      { meta: FulfilmentCancellationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FulfilmentCancellationField.ProfileID}
          meta={FulfilmentCancellationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.ProfileExecutionID,
      { meta: FulfilmentCancellationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FulfilmentCancellationField.ProfileExecutionID}
          meta={FulfilmentCancellationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.ID,
      { meta: FulfilmentCancellationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FulfilmentCancellationField.ID}
          meta={FulfilmentCancellationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.CopyIndicator,
      { meta: FulfilmentCancellationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={FulfilmentCancellationField.CopyIndicator}
          meta={FulfilmentCancellationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.UUID,
      { meta: FulfilmentCancellationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FulfilmentCancellationField.UUID}
          meta={FulfilmentCancellationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.IssueDate,
      { meta: FulfilmentCancellationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={FulfilmentCancellationField.IssueDate}
          meta={FulfilmentCancellationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.IssueTime,
      { meta: FulfilmentCancellationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={FulfilmentCancellationField.IssueTime}
          meta={FulfilmentCancellationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.Note,
      { meta: FulfilmentCancellationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FulfilmentCancellationField.Note}
          meta={FulfilmentCancellationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.CancellationNote,
      { meta: FulfilmentCancellationFieldMeta.CancellationNote,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FulfilmentCancellationField.CancellationNote}
          meta={FulfilmentCancellationFieldMeta.CancellationNote}
          fieldConfig={fieldConfig}
          text={value?.CancellationNote}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.DespatchDocumentReference,
      { meta: FulfilmentCancellationFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FulfilmentCancellationField.DespatchDocumentReference}
          meta={FulfilmentCancellationFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.ReceiptDocumentReference,
      { meta: FulfilmentCancellationFieldMeta.ReceiptDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FulfilmentCancellationField.ReceiptDocumentReference}
          meta={FulfilmentCancellationFieldMeta.ReceiptDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReceiptDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.OrderReference,
      { meta: FulfilmentCancellationFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={FulfilmentCancellationField.OrderReference}
          meta={FulfilmentCancellationFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.AdditionalDocumentReference,
      { meta: FulfilmentCancellationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FulfilmentCancellationField.AdditionalDocumentReference}
          meta={FulfilmentCancellationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.Contract,
      { meta: FulfilmentCancellationFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={FulfilmentCancellationField.Contract}
          meta={FulfilmentCancellationFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.Signature,
      { meta: FulfilmentCancellationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={FulfilmentCancellationField.Signature}
          meta={FulfilmentCancellationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.BuyerCustomerParty,
      { meta: FulfilmentCancellationFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={FulfilmentCancellationField.BuyerCustomerParty}
          meta={FulfilmentCancellationFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.SellerSupplierParty,
      { meta: FulfilmentCancellationFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={FulfilmentCancellationField.SellerSupplierParty}
          meta={FulfilmentCancellationFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.DeliveryCustomerParty,
      { meta: FulfilmentCancellationFieldMeta.DeliveryCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={FulfilmentCancellationField.DeliveryCustomerParty}
          meta={FulfilmentCancellationFieldMeta.DeliveryCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.DeliveryCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.DespatchSupplierParty,
      { meta: FulfilmentCancellationFieldMeta.DespatchSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={FulfilmentCancellationField.DespatchSupplierParty}
          meta={FulfilmentCancellationFieldMeta.DespatchSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.DespatchSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      FulfilmentCancellationField.OriginatorCustomerParty,
      { meta: FulfilmentCancellationFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={FulfilmentCancellationField.OriginatorCustomerParty}
          meta={FulfilmentCancellationFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function FulfilmentCancellationDisplay<TFieldMeta>({ meta, fieldConfig, fulfilmentCancellation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    FulfilmentCancellationTypeName,
    meta,
    fieldConfig,
    fulfilmentCancellation,
    renderContext,
    FulfilmentCancellationSubElementsMap,
  )
}
