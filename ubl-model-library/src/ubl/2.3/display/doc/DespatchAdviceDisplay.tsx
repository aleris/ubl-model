import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DespatchAdvice } from  '../../model/doc/DespatchAdvice'
import { DespatchAdviceField, DespatchAdviceFieldMeta, DespatchAdviceTypeName } from  '../../meta/doc/DespatchAdviceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DespatchLineDisplay } from '../cac/DespatchLineDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { OrderReferenceDisplay } from '../cac/OrderReferenceDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DespatchAdvice, void>
  despatchAdvice: DespatchAdvice[] | undefined
  renderContext: RenderContext
}

export const DespatchAdviceSubElementsMap: SubElementsTemplatesMap<DespatchAdviceField, DespatchAdvice, void> = new Map([
    [
      DespatchAdviceField.UBLExtensions,
      { meta: DespatchAdviceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DespatchAdviceField.UBLExtensions}
          meta={DespatchAdviceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.UBLVersionID,
      { meta: DespatchAdviceFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchAdviceField.UBLVersionID}
          meta={DespatchAdviceFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.CustomizationID,
      { meta: DespatchAdviceFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchAdviceField.CustomizationID}
          meta={DespatchAdviceFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.ProfileID,
      { meta: DespatchAdviceFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchAdviceField.ProfileID}
          meta={DespatchAdviceFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.ProfileExecutionID,
      { meta: DespatchAdviceFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchAdviceField.ProfileExecutionID}
          meta={DespatchAdviceFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.ID,
      { meta: DespatchAdviceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchAdviceField.ID}
          meta={DespatchAdviceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.CopyIndicator,
      { meta: DespatchAdviceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={DespatchAdviceField.CopyIndicator}
          meta={DespatchAdviceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.UUID,
      { meta: DespatchAdviceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchAdviceField.UUID}
          meta={DespatchAdviceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.IssueDate,
      { meta: DespatchAdviceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DespatchAdviceField.IssueDate}
          meta={DespatchAdviceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.IssueTime,
      { meta: DespatchAdviceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DespatchAdviceField.IssueTime}
          meta={DespatchAdviceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.DocumentStatusCode,
      { meta: DespatchAdviceFieldMeta.DocumentStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DespatchAdviceField.DocumentStatusCode}
          meta={DespatchAdviceFieldMeta.DocumentStatusCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.DespatchAdviceTypeCode,
      { meta: DespatchAdviceFieldMeta.DespatchAdviceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DespatchAdviceField.DespatchAdviceTypeCode}
          meta={DespatchAdviceFieldMeta.DespatchAdviceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.DespatchAdviceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.Note,
      { meta: DespatchAdviceFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DespatchAdviceField.Note}
          meta={DespatchAdviceFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.LineCountNumeric,
      { meta: DespatchAdviceFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={DespatchAdviceField.LineCountNumeric}
          meta={DespatchAdviceFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.OrderReference,
      { meta: DespatchAdviceFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={DespatchAdviceField.OrderReference}
          meta={DespatchAdviceFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.AdditionalDocumentReference,
      { meta: DespatchAdviceFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DespatchAdviceField.AdditionalDocumentReference}
          meta={DespatchAdviceFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.Signature,
      { meta: DespatchAdviceFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={DespatchAdviceField.Signature}
          meta={DespatchAdviceFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.DespatchSupplierParty,
      { meta: DespatchAdviceFieldMeta.DespatchSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={DespatchAdviceField.DespatchSupplierParty}
          meta={DespatchAdviceFieldMeta.DespatchSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.DespatchSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.DeliveryCustomerParty,
      { meta: DespatchAdviceFieldMeta.DeliveryCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={DespatchAdviceField.DeliveryCustomerParty}
          meta={DespatchAdviceFieldMeta.DeliveryCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.DeliveryCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.BuyerCustomerParty,
      { meta: DespatchAdviceFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={DespatchAdviceField.BuyerCustomerParty}
          meta={DespatchAdviceFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.SellerSupplierParty,
      { meta: DespatchAdviceFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={DespatchAdviceField.SellerSupplierParty}
          meta={DespatchAdviceFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.OriginatorCustomerParty,
      { meta: DespatchAdviceFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={DespatchAdviceField.OriginatorCustomerParty}
          meta={DespatchAdviceFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.Shipment,
      { meta: DespatchAdviceFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={DespatchAdviceField.Shipment}
          meta={DespatchAdviceFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchAdviceField.DespatchLine,
      { meta: DespatchAdviceFieldMeta.DespatchLine,
        template: ({value, renderContext, fieldConfig}) => <DespatchLineDisplay
          key={DespatchAdviceField.DespatchLine}
          meta={DespatchAdviceFieldMeta.DespatchLine}
          fieldConfig={fieldConfig}
          despatchLine={value?.DespatchLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function DespatchAdviceDisplay<TFieldMeta>({ meta, fieldConfig, despatchAdvice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DespatchAdviceTypeName,
    meta,
    fieldConfig,
    despatchAdvice,
    renderContext,
    DespatchAdviceSubElementsMap,
  )
}
