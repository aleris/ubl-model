import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ReceiptAdvice } from  '../../model/doc/ReceiptAdvice'
import { ReceiptAdviceField, ReceiptAdviceFieldMeta, ReceiptAdviceTypeName } from  '../../meta/doc/ReceiptAdviceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { OrderReferenceDisplay } from '../cac/OrderReferenceDisplay'
import { ReceiptLineDisplay } from '../cac/ReceiptLineDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ReceiptAdvice, void>
  receiptAdvice: ReceiptAdvice[] | undefined
  renderContext: RenderContext
}

export const ReceiptAdviceSubElementsMap: SubElementsTemplatesMap<ReceiptAdviceField, ReceiptAdvice, void> = new Map([
    [
      ReceiptAdviceField.UBLExtensions,
      { meta: ReceiptAdviceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ReceiptAdviceField.UBLExtensions}
          meta={ReceiptAdviceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.UBLVersionID,
      { meta: ReceiptAdviceFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptAdviceField.UBLVersionID}
          meta={ReceiptAdviceFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.CustomizationID,
      { meta: ReceiptAdviceFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptAdviceField.CustomizationID}
          meta={ReceiptAdviceFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.ProfileID,
      { meta: ReceiptAdviceFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptAdviceField.ProfileID}
          meta={ReceiptAdviceFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.ProfileExecutionID,
      { meta: ReceiptAdviceFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptAdviceField.ProfileExecutionID}
          meta={ReceiptAdviceFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.ID,
      { meta: ReceiptAdviceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptAdviceField.ID}
          meta={ReceiptAdviceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.CopyIndicator,
      { meta: ReceiptAdviceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ReceiptAdviceField.CopyIndicator}
          meta={ReceiptAdviceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.UUID,
      { meta: ReceiptAdviceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptAdviceField.UUID}
          meta={ReceiptAdviceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.IssueDate,
      { meta: ReceiptAdviceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ReceiptAdviceField.IssueDate}
          meta={ReceiptAdviceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.IssueTime,
      { meta: ReceiptAdviceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ReceiptAdviceField.IssueTime}
          meta={ReceiptAdviceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.DocumentStatusCode,
      { meta: ReceiptAdviceFieldMeta.DocumentStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReceiptAdviceField.DocumentStatusCode}
          meta={ReceiptAdviceFieldMeta.DocumentStatusCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.ReceiptAdviceTypeCode,
      { meta: ReceiptAdviceFieldMeta.ReceiptAdviceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReceiptAdviceField.ReceiptAdviceTypeCode}
          meta={ReceiptAdviceFieldMeta.ReceiptAdviceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ReceiptAdviceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.Note,
      { meta: ReceiptAdviceFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReceiptAdviceField.Note}
          meta={ReceiptAdviceFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.LineCountNumeric,
      { meta: ReceiptAdviceFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ReceiptAdviceField.LineCountNumeric}
          meta={ReceiptAdviceFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.OrderReference,
      { meta: ReceiptAdviceFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={ReceiptAdviceField.OrderReference}
          meta={ReceiptAdviceFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.DespatchDocumentReference,
      { meta: ReceiptAdviceFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ReceiptAdviceField.DespatchDocumentReference}
          meta={ReceiptAdviceFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.AdditionalDocumentReference,
      { meta: ReceiptAdviceFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ReceiptAdviceField.AdditionalDocumentReference}
          meta={ReceiptAdviceFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.Signature,
      { meta: ReceiptAdviceFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ReceiptAdviceField.Signature}
          meta={ReceiptAdviceFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.DeliveryCustomerParty,
      { meta: ReceiptAdviceFieldMeta.DeliveryCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ReceiptAdviceField.DeliveryCustomerParty}
          meta={ReceiptAdviceFieldMeta.DeliveryCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.DeliveryCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.DespatchSupplierParty,
      { meta: ReceiptAdviceFieldMeta.DespatchSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ReceiptAdviceField.DespatchSupplierParty}
          meta={ReceiptAdviceFieldMeta.DespatchSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.DespatchSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.BuyerCustomerParty,
      { meta: ReceiptAdviceFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ReceiptAdviceField.BuyerCustomerParty}
          meta={ReceiptAdviceFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.SellerSupplierParty,
      { meta: ReceiptAdviceFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ReceiptAdviceField.SellerSupplierParty}
          meta={ReceiptAdviceFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.Shipment,
      { meta: ReceiptAdviceFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={ReceiptAdviceField.Shipment}
          meta={ReceiptAdviceFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptAdviceField.ReceiptLine,
      { meta: ReceiptAdviceFieldMeta.ReceiptLine,
        template: ({value, renderContext, fieldConfig}) => <ReceiptLineDisplay
          key={ReceiptAdviceField.ReceiptLine}
          meta={ReceiptAdviceFieldMeta.ReceiptLine}
          fieldConfig={fieldConfig}
          receiptLine={value?.ReceiptLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ReceiptAdviceDisplay<TFieldMeta>({ meta, fieldConfig, receiptAdvice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ReceiptAdviceTypeName,
    meta,
    fieldConfig,
    receiptAdvice,
    renderContext,
    ReceiptAdviceSubElementsMap,
  )
}
