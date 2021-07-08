import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderResponseSimple } from  '../../model/doc/OrderResponseSimple'
import { OrderResponseSimpleField, OrderResponseSimpleFieldMeta, OrderResponseSimpleTypeName } from  '../../meta/doc/OrderResponseSimpleMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
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
  fieldConfig?: FieldConfig<OrderResponseSimple, void>
  orderResponseSimple: OrderResponseSimple[] | undefined
  renderContext: RenderContext
}

export const OrderResponseSimpleSubElementsMap: SubElementsTemplatesMap<OrderResponseSimpleField, OrderResponseSimple, void> = new Map([
    [
      OrderResponseSimpleField.UBLExtensions,
      { meta: OrderResponseSimpleFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderResponseSimpleField.UBLExtensions}
          meta={OrderResponseSimpleFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.UBLVersionID,
      { meta: OrderResponseSimpleFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseSimpleField.UBLVersionID}
          meta={OrderResponseSimpleFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.CustomizationID,
      { meta: OrderResponseSimpleFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseSimpleField.CustomizationID}
          meta={OrderResponseSimpleFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.ProfileID,
      { meta: OrderResponseSimpleFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseSimpleField.ProfileID}
          meta={OrderResponseSimpleFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.ProfileExecutionID,
      { meta: OrderResponseSimpleFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseSimpleField.ProfileExecutionID}
          meta={OrderResponseSimpleFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.ID,
      { meta: OrderResponseSimpleFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseSimpleField.ID}
          meta={OrderResponseSimpleFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.CopyIndicator,
      { meta: OrderResponseSimpleFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={OrderResponseSimpleField.CopyIndicator}
          meta={OrderResponseSimpleFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.UUID,
      { meta: OrderResponseSimpleFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseSimpleField.UUID}
          meta={OrderResponseSimpleFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.IssueDate,
      { meta: OrderResponseSimpleFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={OrderResponseSimpleField.IssueDate}
          meta={OrderResponseSimpleFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.IssueTime,
      { meta: OrderResponseSimpleFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={OrderResponseSimpleField.IssueTime}
          meta={OrderResponseSimpleFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.Note,
      { meta: OrderResponseSimpleFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderResponseSimpleField.Note}
          meta={OrderResponseSimpleFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.AcceptedIndicator,
      { meta: OrderResponseSimpleFieldMeta.AcceptedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={OrderResponseSimpleField.AcceptedIndicator}
          meta={OrderResponseSimpleFieldMeta.AcceptedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.AcceptedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.RejectionNote,
      { meta: OrderResponseSimpleFieldMeta.RejectionNote,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderResponseSimpleField.RejectionNote}
          meta={OrderResponseSimpleFieldMeta.RejectionNote}
          fieldConfig={fieldConfig}
          text={value?.RejectionNote}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.CustomerReference,
      { meta: OrderResponseSimpleFieldMeta.CustomerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderResponseSimpleField.CustomerReference}
          meta={OrderResponseSimpleFieldMeta.CustomerReference}
          fieldConfig={fieldConfig}
          text={value?.CustomerReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.AccountingCostCode,
      { meta: OrderResponseSimpleFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderResponseSimpleField.AccountingCostCode}
          meta={OrderResponseSimpleFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.AccountingCost,
      { meta: OrderResponseSimpleFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderResponseSimpleField.AccountingCost}
          meta={OrderResponseSimpleFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.OrderReference,
      { meta: OrderResponseSimpleFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={OrderResponseSimpleField.OrderReference}
          meta={OrderResponseSimpleFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.OrderChangeDocumentReference,
      { meta: OrderResponseSimpleFieldMeta.OrderChangeDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderResponseSimpleField.OrderChangeDocumentReference}
          meta={OrderResponseSimpleFieldMeta.OrderChangeDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OrderChangeDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.AdditionalDocumentReference,
      { meta: OrderResponseSimpleFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderResponseSimpleField.AdditionalDocumentReference}
          meta={OrderResponseSimpleFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.Signature,
      { meta: OrderResponseSimpleFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={OrderResponseSimpleField.Signature}
          meta={OrderResponseSimpleFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.SellerSupplierParty,
      { meta: OrderResponseSimpleFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderResponseSimpleField.SellerSupplierParty}
          meta={OrderResponseSimpleFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.BuyerCustomerParty,
      { meta: OrderResponseSimpleFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderResponseSimpleField.BuyerCustomerParty}
          meta={OrderResponseSimpleFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.OriginatorCustomerParty,
      { meta: OrderResponseSimpleFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderResponseSimpleField.OriginatorCustomerParty}
          meta={OrderResponseSimpleFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.AccountingSupplierParty,
      { meta: OrderResponseSimpleFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderResponseSimpleField.AccountingSupplierParty}
          meta={OrderResponseSimpleFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseSimpleField.AccountingCustomerParty,
      { meta: OrderResponseSimpleFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderResponseSimpleField.AccountingCustomerParty}
          meta={OrderResponseSimpleFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderResponseSimpleDisplay<TFieldMeta>({ meta, fieldConfig, orderResponseSimple, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderResponseSimpleTypeName,
    meta,
    fieldConfig,
    orderResponseSimple,
    renderContext,
    OrderResponseSimpleSubElementsMap,
  )
}
