import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ReceiptLine } from  '../../model/cac/ReceiptLine'
import { ReceiptLineField, ReceiptLineFieldMeta, ReceiptLineTypeName } from  '../../meta/cac/ReceiptLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { OrderLineReferenceDisplay } from './OrderLineReferenceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ReceiptLine, void>
  receiptLine: ReceiptLine[] | undefined
  renderContext: RenderContext
}

export const ReceiptLineSubElementsMap: SubElementsTemplatesMap<ReceiptLineField, ReceiptLine, void> = new Map([
    [
      ReceiptLineField.UBLExtensions,
      { meta: ReceiptLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ReceiptLineField.UBLExtensions}
          meta={ReceiptLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.ID,
      { meta: ReceiptLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptLineField.ID}
          meta={ReceiptLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.UUID,
      { meta: ReceiptLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReceiptLineField.UUID}
          meta={ReceiptLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.Note,
      { meta: ReceiptLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReceiptLineField.Note}
          meta={ReceiptLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.ReceivedQuantity,
      { meta: ReceiptLineFieldMeta.ReceivedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ReceiptLineField.ReceivedQuantity}
          meta={ReceiptLineFieldMeta.ReceivedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ReceivedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.ShortQuantity,
      { meta: ReceiptLineFieldMeta.ShortQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ReceiptLineField.ShortQuantity}
          meta={ReceiptLineFieldMeta.ShortQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ShortQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.ShortageActionCode,
      { meta: ReceiptLineFieldMeta.ShortageActionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReceiptLineField.ShortageActionCode}
          meta={ReceiptLineFieldMeta.ShortageActionCode}
          fieldConfig={fieldConfig}
          code={value?.ShortageActionCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.RejectedQuantity,
      { meta: ReceiptLineFieldMeta.RejectedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ReceiptLineField.RejectedQuantity}
          meta={ReceiptLineFieldMeta.RejectedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.RejectedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.RejectReasonCode,
      { meta: ReceiptLineFieldMeta.RejectReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReceiptLineField.RejectReasonCode}
          meta={ReceiptLineFieldMeta.RejectReasonCode}
          fieldConfig={fieldConfig}
          code={value?.RejectReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.RejectReason,
      { meta: ReceiptLineFieldMeta.RejectReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReceiptLineField.RejectReason}
          meta={ReceiptLineFieldMeta.RejectReason}
          fieldConfig={fieldConfig}
          text={value?.RejectReason}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.RejectActionCode,
      { meta: ReceiptLineFieldMeta.RejectActionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReceiptLineField.RejectActionCode}
          meta={ReceiptLineFieldMeta.RejectActionCode}
          fieldConfig={fieldConfig}
          code={value?.RejectActionCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.QuantityDiscrepancyCode,
      { meta: ReceiptLineFieldMeta.QuantityDiscrepancyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReceiptLineField.QuantityDiscrepancyCode}
          meta={ReceiptLineFieldMeta.QuantityDiscrepancyCode}
          fieldConfig={fieldConfig}
          code={value?.QuantityDiscrepancyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.OversupplyQuantity,
      { meta: ReceiptLineFieldMeta.OversupplyQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ReceiptLineField.OversupplyQuantity}
          meta={ReceiptLineFieldMeta.OversupplyQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.OversupplyQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.ReceivedDate,
      { meta: ReceiptLineFieldMeta.ReceivedDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ReceiptLineField.ReceivedDate}
          meta={ReceiptLineFieldMeta.ReceivedDate}
          fieldConfig={fieldConfig}
          date={value?.ReceivedDate}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.TimingComplaintCode,
      { meta: ReceiptLineFieldMeta.TimingComplaintCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReceiptLineField.TimingComplaintCode}
          meta={ReceiptLineFieldMeta.TimingComplaintCode}
          fieldConfig={fieldConfig}
          code={value?.TimingComplaintCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.TimingComplaint,
      { meta: ReceiptLineFieldMeta.TimingComplaint,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReceiptLineField.TimingComplaint}
          meta={ReceiptLineFieldMeta.TimingComplaint}
          fieldConfig={fieldConfig}
          text={value?.TimingComplaint}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.OrderLineReference,
      { meta: ReceiptLineFieldMeta.OrderLineReference,
        template: ({value, renderContext, fieldConfig}) => <OrderLineReferenceDisplay
          key={ReceiptLineField.OrderLineReference}
          meta={ReceiptLineFieldMeta.OrderLineReference}
          fieldConfig={fieldConfig}
          orderLineReference={value?.OrderLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.DespatchLineReference,
      { meta: ReceiptLineFieldMeta.DespatchLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={ReceiptLineField.DespatchLineReference}
          meta={ReceiptLineFieldMeta.DespatchLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.DespatchLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.DocumentReference,
      { meta: ReceiptLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ReceiptLineField.DocumentReference}
          meta={ReceiptLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.Item,
      { meta: ReceiptLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={ReceiptLineField.Item}
          meta={ReceiptLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      ReceiptLineField.Shipment,
      { meta: ReceiptLineFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={ReceiptLineField.Shipment}
          meta={ReceiptLineFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ]
]) 

export function ReceiptLineDisplay<TFieldMeta>({ meta, fieldConfig, receiptLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ReceiptLineTypeName,
    meta,
    fieldConfig,
    receiptLine,
    renderContext,
    ReceiptLineSubElementsMap,
  )
}
