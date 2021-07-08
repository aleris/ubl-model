import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RetailEvent } from  '../../model/doc/RetailEvent'
import { RetailEventField, RetailEventFieldMeta, RetailEventTypeName } from  '../../meta/doc/RetailEventMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EventCommentDisplay } from '../cac/EventCommentDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MiscellaneousEventDisplay } from '../cac/MiscellaneousEventDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { PromotionalEventDisplay } from '../cac/PromotionalEventDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RetailEvent, void>
  retailEvent: RetailEvent[] | undefined
  renderContext: RenderContext
}

export const RetailEventSubElementsMap: SubElementsTemplatesMap<RetailEventField, RetailEvent, void> = new Map([
    [
      RetailEventField.UBLExtensions,
      { meta: RetailEventFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RetailEventField.UBLExtensions}
          meta={RetailEventFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.UBLVersionID,
      { meta: RetailEventFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.UBLVersionID}
          meta={RetailEventFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.CustomizationID,
      { meta: RetailEventFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.CustomizationID}
          meta={RetailEventFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.ProfileID,
      { meta: RetailEventFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.ProfileID}
          meta={RetailEventFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.ProfileExecutionID,
      { meta: RetailEventFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.ProfileExecutionID}
          meta={RetailEventFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.ID,
      { meta: RetailEventFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.ID}
          meta={RetailEventFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.CopyIndicator,
      { meta: RetailEventFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={RetailEventField.CopyIndicator}
          meta={RetailEventFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.UUID,
      { meta: RetailEventFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.UUID}
          meta={RetailEventFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.IssueDate,
      { meta: RetailEventFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={RetailEventField.IssueDate}
          meta={RetailEventFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.IssueTime,
      { meta: RetailEventFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={RetailEventField.IssueTime}
          meta={RetailEventFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.Note,
      { meta: RetailEventFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RetailEventField.Note}
          meta={RetailEventFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.RetailEventName,
      { meta: RetailEventFieldMeta.RetailEventName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RetailEventField.RetailEventName}
          meta={RetailEventFieldMeta.RetailEventName}
          fieldConfig={fieldConfig}
          text={value?.RetailEventName}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.RetailEventStatusCode,
      { meta: RetailEventFieldMeta.RetailEventStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RetailEventField.RetailEventStatusCode}
          meta={RetailEventFieldMeta.RetailEventStatusCode}
          fieldConfig={fieldConfig}
          code={value?.RetailEventStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.SellerEventID,
      { meta: RetailEventFieldMeta.SellerEventID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.SellerEventID}
          meta={RetailEventFieldMeta.SellerEventID}
          fieldConfig={fieldConfig}
          identifier={value?.SellerEventID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.BuyerEventID,
      { meta: RetailEventFieldMeta.BuyerEventID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RetailEventField.BuyerEventID}
          meta={RetailEventFieldMeta.BuyerEventID}
          fieldConfig={fieldConfig}
          identifier={value?.BuyerEventID}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.Description,
      { meta: RetailEventFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RetailEventField.Description}
          meta={RetailEventFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.Period,
      { meta: RetailEventFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RetailEventField.Period}
          meta={RetailEventFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.OriginalDocumentReference,
      { meta: RetailEventFieldMeta.OriginalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={RetailEventField.OriginalDocumentReference}
          meta={RetailEventFieldMeta.OriginalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.Signature,
      { meta: RetailEventFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={RetailEventField.Signature}
          meta={RetailEventFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.SenderParty,
      { meta: RetailEventFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={RetailEventField.SenderParty}
          meta={RetailEventFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.ReceiverParty,
      { meta: RetailEventFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={RetailEventField.ReceiverParty}
          meta={RetailEventFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.BuyerCustomerParty,
      { meta: RetailEventFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={RetailEventField.BuyerCustomerParty}
          meta={RetailEventFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.SellerSupplierParty,
      { meta: RetailEventFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={RetailEventField.SellerSupplierParty}
          meta={RetailEventFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.EventComment,
      { meta: RetailEventFieldMeta.EventComment,
        template: ({value, renderContext, fieldConfig}) => <EventCommentDisplay
          key={RetailEventField.EventComment}
          meta={RetailEventFieldMeta.EventComment}
          fieldConfig={fieldConfig}
          eventComment={value?.EventComment}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.PromotionalEvent,
      { meta: RetailEventFieldMeta.PromotionalEvent,
        template: ({value, renderContext, fieldConfig}) => <PromotionalEventDisplay
          key={RetailEventField.PromotionalEvent}
          meta={RetailEventFieldMeta.PromotionalEvent}
          fieldConfig={fieldConfig}
          promotionalEvent={value?.PromotionalEvent}
          renderContext={renderContext}
        />}
    ],

    [
      RetailEventField.MiscellaneousEvent,
      { meta: RetailEventFieldMeta.MiscellaneousEvent,
        template: ({value, renderContext, fieldConfig}) => <MiscellaneousEventDisplay
          key={RetailEventField.MiscellaneousEvent}
          meta={RetailEventFieldMeta.MiscellaneousEvent}
          fieldConfig={fieldConfig}
          miscellaneousEvent={value?.MiscellaneousEvent}
          renderContext={renderContext}
        />}
    ]
]) 

export function RetailEventDisplay<TFieldMeta>({ meta, fieldConfig, retailEvent, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RetailEventTypeName,
    meta,
    fieldConfig,
    retailEvent,
    renderContext,
    RetailEventSubElementsMap,
  )
}
