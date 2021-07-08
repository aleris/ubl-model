import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderCancellation } from  '../../model/doc/OrderCancellation'
import { OrderCancellationField, OrderCancellationFieldMeta, OrderCancellationTypeName } from  '../../meta/doc/OrderCancellationMeta'
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
  fieldConfig?: FieldConfig<OrderCancellation, void>
  orderCancellation: OrderCancellation[] | undefined
  renderContext: RenderContext
}

export const OrderCancellationSubElementsMap: SubElementsTemplatesMap<OrderCancellationField, OrderCancellation, void> = new Map([
    [
      OrderCancellationField.UBLExtensions,
      { meta: OrderCancellationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderCancellationField.UBLExtensions}
          meta={OrderCancellationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.UBLVersionID,
      { meta: OrderCancellationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderCancellationField.UBLVersionID}
          meta={OrderCancellationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.CustomizationID,
      { meta: OrderCancellationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderCancellationField.CustomizationID}
          meta={OrderCancellationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.ProfileID,
      { meta: OrderCancellationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderCancellationField.ProfileID}
          meta={OrderCancellationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.ProfileExecutionID,
      { meta: OrderCancellationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderCancellationField.ProfileExecutionID}
          meta={OrderCancellationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.ID,
      { meta: OrderCancellationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderCancellationField.ID}
          meta={OrderCancellationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.CopyIndicator,
      { meta: OrderCancellationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={OrderCancellationField.CopyIndicator}
          meta={OrderCancellationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.UUID,
      { meta: OrderCancellationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderCancellationField.UUID}
          meta={OrderCancellationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.IssueDate,
      { meta: OrderCancellationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={OrderCancellationField.IssueDate}
          meta={OrderCancellationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.IssueTime,
      { meta: OrderCancellationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={OrderCancellationField.IssueTime}
          meta={OrderCancellationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.Note,
      { meta: OrderCancellationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderCancellationField.Note}
          meta={OrderCancellationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.CancellationNote,
      { meta: OrderCancellationFieldMeta.CancellationNote,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderCancellationField.CancellationNote}
          meta={OrderCancellationFieldMeta.CancellationNote}
          fieldConfig={fieldConfig}
          text={value?.CancellationNote}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.OrderReference,
      { meta: OrderCancellationFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={OrderCancellationField.OrderReference}
          meta={OrderCancellationFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.OriginatorDocumentReference,
      { meta: OrderCancellationFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderCancellationField.OriginatorDocumentReference}
          meta={OrderCancellationFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.AdditionalDocumentReference,
      { meta: OrderCancellationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderCancellationField.AdditionalDocumentReference}
          meta={OrderCancellationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.Contract,
      { meta: OrderCancellationFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={OrderCancellationField.Contract}
          meta={OrderCancellationFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.Signature,
      { meta: OrderCancellationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={OrderCancellationField.Signature}
          meta={OrderCancellationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.BuyerCustomerParty,
      { meta: OrderCancellationFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderCancellationField.BuyerCustomerParty}
          meta={OrderCancellationFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.SellerSupplierParty,
      { meta: OrderCancellationFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderCancellationField.SellerSupplierParty}
          meta={OrderCancellationFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderCancellationField.OriginatorCustomerParty,
      { meta: OrderCancellationFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderCancellationField.OriginatorCustomerParty}
          meta={OrderCancellationFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderCancellationDisplay<TFieldMeta>({ meta, fieldConfig, orderCancellation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderCancellationTypeName,
    meta,
    fieldConfig,
    orderCancellation,
    renderContext,
    OrderCancellationSubElementsMap,
  )
}
