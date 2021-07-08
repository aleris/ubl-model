import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationStatus } from  '../../model/doc/TransportationStatus'
import { TransportationStatusField, TransportationStatusFieldMeta, TransportationStatusTypeName } from  '../../meta/doc/TransportationStatusMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ConsignmentDisplay } from '../cac/ConsignmentDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from '../cac/LocationDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportEventDisplay } from '../cac/TransportEventDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportationStatus, void>
  transportationStatus: TransportationStatus[] | undefined
  renderContext: RenderContext
}

export const TransportationStatusSubElementsMap: SubElementsTemplatesMap<TransportationStatusField, TransportationStatus, void> = new Map([
    [
      TransportationStatusField.UBLExtensions,
      { meta: TransportationStatusFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportationStatusField.UBLExtensions}
          meta={TransportationStatusFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.UBLVersionID,
      { meta: TransportationStatusFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.UBLVersionID}
          meta={TransportationStatusFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.CustomizationID,
      { meta: TransportationStatusFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.CustomizationID}
          meta={TransportationStatusFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.ProfileID,
      { meta: TransportationStatusFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.ProfileID}
          meta={TransportationStatusFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.ProfileExecutionID,
      { meta: TransportationStatusFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.ProfileExecutionID}
          meta={TransportationStatusFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.ID,
      { meta: TransportationStatusFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.ID}
          meta={TransportationStatusFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.CarrierAssignedID,
      { meta: TransportationStatusFieldMeta.CarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.CarrierAssignedID}
          meta={TransportationStatusFieldMeta.CarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.CarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.UUID,
      { meta: TransportationStatusFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.UUID}
          meta={TransportationStatusFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.IssueDate,
      { meta: TransportationStatusFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportationStatusField.IssueDate}
          meta={TransportationStatusFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.IssueTime,
      { meta: TransportationStatusFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportationStatusField.IssueTime}
          meta={TransportationStatusFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.Name,
      { meta: TransportationStatusFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusField.Name}
          meta={TransportationStatusFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.Description,
      { meta: TransportationStatusFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusField.Description}
          meta={TransportationStatusFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.Note,
      { meta: TransportationStatusFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusField.Note}
          meta={TransportationStatusFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.ShippingOrderID,
      { meta: TransportationStatusFieldMeta.ShippingOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusField.ShippingOrderID}
          meta={TransportationStatusFieldMeta.ShippingOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.ShippingOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.OtherInstruction,
      { meta: TransportationStatusFieldMeta.OtherInstruction,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusField.OtherInstruction}
          meta={TransportationStatusFieldMeta.OtherInstruction}
          fieldConfig={fieldConfig}
          text={value?.OtherInstruction}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.TransportationStatusTypeCode,
      { meta: TransportationStatusFieldMeta.TransportationStatusTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportationStatusField.TransportationStatusTypeCode}
          meta={TransportationStatusFieldMeta.TransportationStatusTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportationStatusTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.TransportExecutionStatusCode,
      { meta: TransportationStatusFieldMeta.TransportExecutionStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportationStatusField.TransportExecutionStatusCode}
          meta={TransportationStatusFieldMeta.TransportExecutionStatusCode}
          fieldConfig={fieldConfig}
          code={value?.TransportExecutionStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.Consignment,
      { meta: TransportationStatusFieldMeta.Consignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={TransportationStatusField.Consignment}
          meta={TransportationStatusFieldMeta.Consignment}
          fieldConfig={fieldConfig}
          consignment={value?.Consignment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.TransportEvent,
      { meta: TransportationStatusFieldMeta.TransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportationStatusField.TransportEvent}
          meta={TransportationStatusFieldMeta.TransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.TransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.DocumentReference,
      { meta: TransportationStatusFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportationStatusField.DocumentReference}
          meta={TransportationStatusFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.Signature,
      { meta: TransportationStatusFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportationStatusField.Signature}
          meta={TransportationStatusFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.SenderParty,
      { meta: TransportationStatusFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportationStatusField.SenderParty}
          meta={TransportationStatusFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.ReceiverParty,
      { meta: TransportationStatusFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportationStatusField.ReceiverParty}
          meta={TransportationStatusFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.TransportationStatusRequestDocumentReference,
      { meta: TransportationStatusFieldMeta.TransportationStatusRequestDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportationStatusField.TransportationStatusRequestDocumentReference}
          meta={TransportationStatusFieldMeta.TransportationStatusRequestDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportationStatusRequestDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.TransportExecutionPlanDocumentReference,
      { meta: TransportationStatusFieldMeta.TransportExecutionPlanDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportationStatusField.TransportExecutionPlanDocumentReference}
          meta={TransportationStatusFieldMeta.TransportExecutionPlanDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportExecutionPlanDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.UpdatedPickupTransportEvent,
      { meta: TransportationStatusFieldMeta.UpdatedPickupTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportationStatusField.UpdatedPickupTransportEvent}
          meta={TransportationStatusFieldMeta.UpdatedPickupTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.UpdatedPickupTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.UpdatedDeliveryTransportEvent,
      { meta: TransportationStatusFieldMeta.UpdatedDeliveryTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportationStatusField.UpdatedDeliveryTransportEvent}
          meta={TransportationStatusFieldMeta.UpdatedDeliveryTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.UpdatedDeliveryTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.StatusLocation,
      { meta: TransportationStatusFieldMeta.StatusLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportationStatusField.StatusLocation}
          meta={TransportationStatusFieldMeta.StatusLocation}
          fieldConfig={fieldConfig}
          location={value?.StatusLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusField.StatusPeriod,
      { meta: TransportationStatusFieldMeta.StatusPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportationStatusField.StatusPeriod}
          meta={TransportationStatusFieldMeta.StatusPeriod}
          fieldConfig={fieldConfig}
          period={value?.StatusPeriod}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportationStatusDisplay<TFieldMeta>({ meta, fieldConfig, transportationStatus, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportationStatusTypeName,
    meta,
    fieldConfig,
    transportationStatus,
    renderContext,
    TransportationStatusSubElementsMap,
  )
}
