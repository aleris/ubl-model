import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemItinerary } from  '../../model/doc/GoodsItemItinerary'
import { GoodsItemItineraryField, GoodsItemItineraryFieldMeta, GoodsItemItineraryTypeName } from  '../../meta/doc/GoodsItemItineraryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ConsignmentDisplay } from '../cac/ConsignmentDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { GoodsItemDisplay } from '../cac/GoodsItemDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PackageDisplay } from '../cac/PackageDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportationSegmentDisplay } from '../cac/TransportationSegmentDisplay'
import { TransportEquipmentDisplay } from '../cac/TransportEquipmentDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<GoodsItemItinerary, void>
  goodsItemItinerary: GoodsItemItinerary[] | undefined
  renderContext: RenderContext
}

export const GoodsItemItinerarySubElementsMap: SubElementsTemplatesMap<GoodsItemItineraryField, GoodsItemItinerary, void> = new Map([
    [
      GoodsItemItineraryField.UBLExtensions,
      { meta: GoodsItemItineraryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GoodsItemItineraryField.UBLExtensions}
          meta={GoodsItemItineraryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.UBLVersionID,
      { meta: GoodsItemItineraryFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.UBLVersionID}
          meta={GoodsItemItineraryFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.CustomizationID,
      { meta: GoodsItemItineraryFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.CustomizationID}
          meta={GoodsItemItineraryFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ProfileID,
      { meta: GoodsItemItineraryFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.ProfileID}
          meta={GoodsItemItineraryFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ProfileExecutionID,
      { meta: GoodsItemItineraryFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.ProfileExecutionID}
          meta={GoodsItemItineraryFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ID,
      { meta: GoodsItemItineraryFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.ID}
          meta={GoodsItemItineraryFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.CopyIndicator,
      { meta: GoodsItemItineraryFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={GoodsItemItineraryField.CopyIndicator}
          meta={GoodsItemItineraryFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.UUID,
      { meta: GoodsItemItineraryFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.UUID}
          meta={GoodsItemItineraryFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.IssueDate,
      { meta: GoodsItemItineraryFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={GoodsItemItineraryField.IssueDate}
          meta={GoodsItemItineraryFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.IssueTime,
      { meta: GoodsItemItineraryFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={GoodsItemItineraryField.IssueTime}
          meta={GoodsItemItineraryFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.Note,
      { meta: GoodsItemItineraryFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsItemItineraryField.Note}
          meta={GoodsItemItineraryFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.VersionID,
      { meta: GoodsItemItineraryFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.VersionID}
          meta={GoodsItemItineraryFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.TransportExecutionPlanReferenceID,
      { meta: GoodsItemItineraryFieldMeta.TransportExecutionPlanReferenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemItineraryField.TransportExecutionPlanReferenceID}
          meta={GoodsItemItineraryFieldMeta.TransportExecutionPlanReferenceID}
          fieldConfig={fieldConfig}
          identifier={value?.TransportExecutionPlanReferenceID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.Signature,
      { meta: GoodsItemItineraryFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={GoodsItemItineraryField.Signature}
          meta={GoodsItemItineraryFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.SenderParty,
      { meta: GoodsItemItineraryFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemItineraryField.SenderParty}
          meta={GoodsItemItineraryFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ReceiverParty,
      { meta: GoodsItemItineraryFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GoodsItemItineraryField.ReceiverParty}
          meta={GoodsItemItineraryFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ReferencedConsignment,
      { meta: GoodsItemItineraryFieldMeta.ReferencedConsignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={GoodsItemItineraryField.ReferencedConsignment}
          meta={GoodsItemItineraryFieldMeta.ReferencedConsignment}
          fieldConfig={fieldConfig}
          consignment={value?.ReferencedConsignment}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ReferencedTransportEquipment,
      { meta: GoodsItemItineraryFieldMeta.ReferencedTransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={GoodsItemItineraryField.ReferencedTransportEquipment}
          meta={GoodsItemItineraryFieldMeta.ReferencedTransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.ReferencedTransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ReferencedPackage,
      { meta: GoodsItemItineraryFieldMeta.ReferencedPackage,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={GoodsItemItineraryField.ReferencedPackage}
          meta={GoodsItemItineraryFieldMeta.ReferencedPackage}
          fieldConfig={fieldConfig}
          packageValue={value?.ReferencedPackage}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.ReferencedGoodsItem,
      { meta: GoodsItemItineraryFieldMeta.ReferencedGoodsItem,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemDisplay
          key={GoodsItemItineraryField.ReferencedGoodsItem}
          meta={GoodsItemItineraryFieldMeta.ReferencedGoodsItem}
          fieldConfig={fieldConfig}
          goodsItem={value?.ReferencedGoodsItem}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemItineraryField.TransportationSegment,
      { meta: GoodsItemItineraryFieldMeta.TransportationSegment,
        template: ({value, renderContext, fieldConfig}) => <TransportationSegmentDisplay
          key={GoodsItemItineraryField.TransportationSegment}
          meta={GoodsItemItineraryFieldMeta.TransportationSegment}
          fieldConfig={fieldConfig}
          transportationSegment={value?.TransportationSegment}
          renderContext={renderContext}
        />}
    ]
]) 

export function GoodsItemItineraryDisplay<TFieldMeta>({ meta, fieldConfig, goodsItemItinerary, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GoodsItemItineraryTypeName,
    meta,
    fieldConfig,
    goodsItemItinerary,
    renderContext,
    GoodsItemItinerarySubElementsMap,
  )
}
