import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Waybill } from  '../../model/doc/Waybill'
import { WaybillField, WaybillFieldMeta, WaybillTypeName } from  '../../meta/doc/WaybillMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentDistributionDisplay } from '../cac/DocumentDistributionDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ExchangeRateDisplay } from '../cac/ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Waybill, void>
  waybill: Waybill[] | undefined
  renderContext: RenderContext
}

export const WaybillSubElementsMap: SubElementsTemplatesMap<WaybillField, Waybill, void> = new Map([
    [
      WaybillField.UBLExtensions,
      { meta: WaybillFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={WaybillField.UBLExtensions}
          meta={WaybillFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.UBLVersionID,
      { meta: WaybillFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.UBLVersionID}
          meta={WaybillFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.CustomizationID,
      { meta: WaybillFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.CustomizationID}
          meta={WaybillFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.ProfileID,
      { meta: WaybillFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.ProfileID}
          meta={WaybillFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.ProfileExecutionID,
      { meta: WaybillFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.ProfileExecutionID}
          meta={WaybillFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.ID,
      { meta: WaybillFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.ID}
          meta={WaybillFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.CarrierAssignedID,
      { meta: WaybillFieldMeta.CarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.CarrierAssignedID}
          meta={WaybillFieldMeta.CarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.CarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.UUID,
      { meta: WaybillFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.UUID}
          meta={WaybillFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.IssueDate,
      { meta: WaybillFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={WaybillField.IssueDate}
          meta={WaybillFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.IssueTime,
      { meta: WaybillFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={WaybillField.IssueTime}
          meta={WaybillFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.Name,
      { meta: WaybillFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WaybillField.Name}
          meta={WaybillFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.Description,
      { meta: WaybillFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WaybillField.Description}
          meta={WaybillFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.Note,
      { meta: WaybillFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WaybillField.Note}
          meta={WaybillFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.ShippingOrderID,
      { meta: WaybillFieldMeta.ShippingOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WaybillField.ShippingOrderID}
          meta={WaybillFieldMeta.ShippingOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.ShippingOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.AdValoremIndicator,
      { meta: WaybillFieldMeta.AdValoremIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={WaybillField.AdValoremIndicator}
          meta={WaybillFieldMeta.AdValoremIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.AdValoremIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.DeclaredCarriageValueAmount,
      { meta: WaybillFieldMeta.DeclaredCarriageValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={WaybillField.DeclaredCarriageValueAmount}
          meta={WaybillFieldMeta.DeclaredCarriageValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredCarriageValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.OtherInstruction,
      { meta: WaybillFieldMeta.OtherInstruction,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WaybillField.OtherInstruction}
          meta={WaybillFieldMeta.OtherInstruction}
          fieldConfig={fieldConfig}
          text={value?.OtherInstruction}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.ConsignorParty,
      { meta: WaybillFieldMeta.ConsignorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WaybillField.ConsignorParty}
          meta={WaybillFieldMeta.ConsignorParty}
          fieldConfig={fieldConfig}
          party={value?.ConsignorParty}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.CarrierParty,
      { meta: WaybillFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WaybillField.CarrierParty}
          meta={WaybillFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.FreightForwarderParty,
      { meta: WaybillFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WaybillField.FreightForwarderParty}
          meta={WaybillFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.Shipment,
      { meta: WaybillFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={WaybillField.Shipment}
          meta={WaybillFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.DocumentReference,
      { meta: WaybillFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={WaybillField.DocumentReference}
          meta={WaybillFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.ExchangeRate,
      { meta: WaybillFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={WaybillField.ExchangeRate}
          meta={WaybillFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.DocumentDistribution,
      { meta: WaybillFieldMeta.DocumentDistribution,
        template: ({value, renderContext, fieldConfig}) => <DocumentDistributionDisplay
          key={WaybillField.DocumentDistribution}
          meta={WaybillFieldMeta.DocumentDistribution}
          fieldConfig={fieldConfig}
          documentDistribution={value?.DocumentDistribution}
          renderContext={renderContext}
        />}
    ],

    [
      WaybillField.Signature,
      { meta: WaybillFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={WaybillField.Signature}
          meta={WaybillFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function WaybillDisplay<TFieldMeta>({ meta, fieldConfig, waybill, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    WaybillTypeName,
    meta,
    fieldConfig,
    waybill,
    renderContext,
    WaybillSubElementsMap,
  )
}
