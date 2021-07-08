import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Despatch } from  '../../model/cac/Despatch'
import { DespatchField, DespatchFieldMeta, DespatchTypeName } from  '../../meta/cac/DespatchMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { ContactDisplay } from './ContactDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Despatch, void>
  despatch: Despatch[] | undefined
  renderContext: RenderContext
}

export const DespatchSubElementsMap: SubElementsTemplatesMap<DespatchField, Despatch, void> = new Map([
    [
      DespatchField.UBLExtensions,
      { meta: DespatchFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DespatchField.UBLExtensions}
          meta={DespatchFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.ID,
      { meta: DespatchFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchField.ID}
          meta={DespatchFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.RequestedDespatchDate,
      { meta: DespatchFieldMeta.RequestedDespatchDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DespatchField.RequestedDespatchDate}
          meta={DespatchFieldMeta.RequestedDespatchDate}
          fieldConfig={fieldConfig}
          date={value?.RequestedDespatchDate}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.RequestedDespatchTime,
      { meta: DespatchFieldMeta.RequestedDespatchTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DespatchField.RequestedDespatchTime}
          meta={DespatchFieldMeta.RequestedDespatchTime}
          fieldConfig={fieldConfig}
          time={value?.RequestedDespatchTime}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.EstimatedDespatchDate,
      { meta: DespatchFieldMeta.EstimatedDespatchDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DespatchField.EstimatedDespatchDate}
          meta={DespatchFieldMeta.EstimatedDespatchDate}
          fieldConfig={fieldConfig}
          date={value?.EstimatedDespatchDate}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.EstimatedDespatchTime,
      { meta: DespatchFieldMeta.EstimatedDespatchTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DespatchField.EstimatedDespatchTime}
          meta={DespatchFieldMeta.EstimatedDespatchTime}
          fieldConfig={fieldConfig}
          time={value?.EstimatedDespatchTime}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.ActualDespatchDate,
      { meta: DespatchFieldMeta.ActualDespatchDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DespatchField.ActualDespatchDate}
          meta={DespatchFieldMeta.ActualDespatchDate}
          fieldConfig={fieldConfig}
          date={value?.ActualDespatchDate}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.ActualDespatchTime,
      { meta: DespatchFieldMeta.ActualDespatchTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DespatchField.ActualDespatchTime}
          meta={DespatchFieldMeta.ActualDespatchTime}
          fieldConfig={fieldConfig}
          time={value?.ActualDespatchTime}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.GuaranteedDespatchDate,
      { meta: DespatchFieldMeta.GuaranteedDespatchDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DespatchField.GuaranteedDespatchDate}
          meta={DespatchFieldMeta.GuaranteedDespatchDate}
          fieldConfig={fieldConfig}
          date={value?.GuaranteedDespatchDate}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.GuaranteedDespatchTime,
      { meta: DespatchFieldMeta.GuaranteedDespatchTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DespatchField.GuaranteedDespatchTime}
          meta={DespatchFieldMeta.GuaranteedDespatchTime}
          fieldConfig={fieldConfig}
          time={value?.GuaranteedDespatchTime}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.ReleaseID,
      { meta: DespatchFieldMeta.ReleaseID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchField.ReleaseID}
          meta={DespatchFieldMeta.ReleaseID}
          fieldConfig={fieldConfig}
          identifier={value?.ReleaseID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.Instructions,
      { meta: DespatchFieldMeta.Instructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DespatchField.Instructions}
          meta={DespatchFieldMeta.Instructions}
          fieldConfig={fieldConfig}
          text={value?.Instructions}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.DespatchAddress,
      { meta: DespatchFieldMeta.DespatchAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={DespatchField.DespatchAddress}
          meta={DespatchFieldMeta.DespatchAddress}
          fieldConfig={fieldConfig}
          address={value?.DespatchAddress}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.DespatchLocation,
      { meta: DespatchFieldMeta.DespatchLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={DespatchField.DespatchLocation}
          meta={DespatchFieldMeta.DespatchLocation}
          fieldConfig={fieldConfig}
          location={value?.DespatchLocation}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.DespatchParty,
      { meta: DespatchFieldMeta.DespatchParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DespatchField.DespatchParty}
          meta={DespatchFieldMeta.DespatchParty}
          fieldConfig={fieldConfig}
          party={value?.DespatchParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.CarrierParty,
      { meta: DespatchFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DespatchField.CarrierParty}
          meta={DespatchFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.NotifyParty,
      { meta: DespatchFieldMeta.NotifyParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DespatchField.NotifyParty}
          meta={DespatchFieldMeta.NotifyParty}
          fieldConfig={fieldConfig}
          party={value?.NotifyParty}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.Contact,
      { meta: DespatchFieldMeta.Contact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={DespatchField.Contact}
          meta={DespatchFieldMeta.Contact}
          fieldConfig={fieldConfig}
          contact={value?.Contact}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.EstimatedDespatchPeriod,
      { meta: DespatchFieldMeta.EstimatedDespatchPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DespatchField.EstimatedDespatchPeriod}
          meta={DespatchFieldMeta.EstimatedDespatchPeriod}
          fieldConfig={fieldConfig}
          period={value?.EstimatedDespatchPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchField.RequestedDespatchPeriod,
      { meta: DespatchFieldMeta.RequestedDespatchPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DespatchField.RequestedDespatchPeriod}
          meta={DespatchFieldMeta.RequestedDespatchPeriod}
          fieldConfig={fieldConfig}
          period={value?.RequestedDespatchPeriod}
          renderContext={renderContext}
        />}
    ]
]) 

export function DespatchDisplay<TFieldMeta>({ meta, fieldConfig, despatch, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DespatchTypeName,
    meta,
    fieldConfig,
    despatch,
    renderContext,
    DespatchSubElementsMap,
  )
}
