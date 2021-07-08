import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { HazardousItem } from  '../../model/cac/HazardousItem'
import { HazardousItemField, HazardousItemFieldMeta, HazardousItemTypeName } from  '../../meta/cac/HazardousItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { HazardousGoodsTransitDisplay } from './HazardousGoodsTransitDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { PartyDisplay } from './PartyDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { SecondaryHazardDisplay } from './SecondaryHazardDisplay'
import { TemperatureDisplay } from './TemperatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<HazardousItem, void>
  hazardousItem: HazardousItem[] | undefined
  renderContext: RenderContext
}

export const HazardousItemSubElementsMap: SubElementsTemplatesMap<HazardousItemField, HazardousItem, void> = new Map([
    [
      HazardousItemField.UBLExtensions,
      { meta: HazardousItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={HazardousItemField.UBLExtensions}
          meta={HazardousItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.ID,
      { meta: HazardousItemFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={HazardousItemField.ID}
          meta={HazardousItemFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.PlacardNotation,
      { meta: HazardousItemFieldMeta.PlacardNotation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={HazardousItemField.PlacardNotation}
          meta={HazardousItemFieldMeta.PlacardNotation}
          fieldConfig={fieldConfig}
          text={value?.PlacardNotation}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.PlacardEndorsement,
      { meta: HazardousItemFieldMeta.PlacardEndorsement,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={HazardousItemField.PlacardEndorsement}
          meta={HazardousItemFieldMeta.PlacardEndorsement}
          fieldConfig={fieldConfig}
          text={value?.PlacardEndorsement}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.AdditionalInformation,
      { meta: HazardousItemFieldMeta.AdditionalInformation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={HazardousItemField.AdditionalInformation}
          meta={HazardousItemFieldMeta.AdditionalInformation}
          fieldConfig={fieldConfig}
          text={value?.AdditionalInformation}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.UNDGCode,
      { meta: HazardousItemFieldMeta.UNDGCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousItemField.UNDGCode}
          meta={HazardousItemFieldMeta.UNDGCode}
          fieldConfig={fieldConfig}
          code={value?.UNDGCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.EmergencyProceduresCode,
      { meta: HazardousItemFieldMeta.EmergencyProceduresCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousItemField.EmergencyProceduresCode}
          meta={HazardousItemFieldMeta.EmergencyProceduresCode}
          fieldConfig={fieldConfig}
          code={value?.EmergencyProceduresCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.MedicalFirstAidGuideCode,
      { meta: HazardousItemFieldMeta.MedicalFirstAidGuideCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousItemField.MedicalFirstAidGuideCode}
          meta={HazardousItemFieldMeta.MedicalFirstAidGuideCode}
          fieldConfig={fieldConfig}
          code={value?.MedicalFirstAidGuideCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.TechnicalName,
      { meta: HazardousItemFieldMeta.TechnicalName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={HazardousItemField.TechnicalName}
          meta={HazardousItemFieldMeta.TechnicalName}
          fieldConfig={fieldConfig}
          text={value?.TechnicalName}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.CategoryName,
      { meta: HazardousItemFieldMeta.CategoryName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={HazardousItemField.CategoryName}
          meta={HazardousItemFieldMeta.CategoryName}
          fieldConfig={fieldConfig}
          text={value?.CategoryName}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.HazardousCategoryCode,
      { meta: HazardousItemFieldMeta.HazardousCategoryCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousItemField.HazardousCategoryCode}
          meta={HazardousItemFieldMeta.HazardousCategoryCode}
          fieldConfig={fieldConfig}
          code={value?.HazardousCategoryCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.UpperOrangeHazardPlacardID,
      { meta: HazardousItemFieldMeta.UpperOrangeHazardPlacardID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={HazardousItemField.UpperOrangeHazardPlacardID}
          meta={HazardousItemFieldMeta.UpperOrangeHazardPlacardID}
          fieldConfig={fieldConfig}
          identifier={value?.UpperOrangeHazardPlacardID}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.LowerOrangeHazardPlacardID,
      { meta: HazardousItemFieldMeta.LowerOrangeHazardPlacardID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={HazardousItemField.LowerOrangeHazardPlacardID}
          meta={HazardousItemFieldMeta.LowerOrangeHazardPlacardID}
          fieldConfig={fieldConfig}
          identifier={value?.LowerOrangeHazardPlacardID}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.MarkingID,
      { meta: HazardousItemFieldMeta.MarkingID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={HazardousItemField.MarkingID}
          meta={HazardousItemFieldMeta.MarkingID}
          fieldConfig={fieldConfig}
          identifier={value?.MarkingID}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.HazardClassID,
      { meta: HazardousItemFieldMeta.HazardClassID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={HazardousItemField.HazardClassID}
          meta={HazardousItemFieldMeta.HazardClassID}
          fieldConfig={fieldConfig}
          identifier={value?.HazardClassID}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.NetWeightMeasure,
      { meta: HazardousItemFieldMeta.NetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={HazardousItemField.NetWeightMeasure}
          meta={HazardousItemFieldMeta.NetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.NetVolumeMeasure,
      { meta: HazardousItemFieldMeta.NetVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={HazardousItemField.NetVolumeMeasure}
          meta={HazardousItemFieldMeta.NetVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.Quantity,
      { meta: HazardousItemFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={HazardousItemField.Quantity}
          meta={HazardousItemFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.ContactParty,
      { meta: HazardousItemFieldMeta.ContactParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={HazardousItemField.ContactParty}
          meta={HazardousItemFieldMeta.ContactParty}
          fieldConfig={fieldConfig}
          party={value?.ContactParty}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.SecondaryHazard,
      { meta: HazardousItemFieldMeta.SecondaryHazard,
        template: ({value, renderContext, fieldConfig}) => <SecondaryHazardDisplay
          key={HazardousItemField.SecondaryHazard}
          meta={HazardousItemFieldMeta.SecondaryHazard}
          fieldConfig={fieldConfig}
          secondaryHazard={value?.SecondaryHazard}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.HazardousGoodsTransit,
      { meta: HazardousItemFieldMeta.HazardousGoodsTransit,
        template: ({value, renderContext, fieldConfig}) => <HazardousGoodsTransitDisplay
          key={HazardousItemField.HazardousGoodsTransit}
          meta={HazardousItemFieldMeta.HazardousGoodsTransit}
          fieldConfig={fieldConfig}
          hazardousGoodsTransit={value?.HazardousGoodsTransit}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.EmergencyTemperature,
      { meta: HazardousItemFieldMeta.EmergencyTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={HazardousItemField.EmergencyTemperature}
          meta={HazardousItemFieldMeta.EmergencyTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.EmergencyTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.FlashpointTemperature,
      { meta: HazardousItemFieldMeta.FlashpointTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={HazardousItemField.FlashpointTemperature}
          meta={HazardousItemFieldMeta.FlashpointTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.FlashpointTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousItemField.AdditionalTemperature,
      { meta: HazardousItemFieldMeta.AdditionalTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={HazardousItemField.AdditionalTemperature}
          meta={HazardousItemFieldMeta.AdditionalTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.AdditionalTemperature}
          renderContext={renderContext}
        />}
    ]
]) 

export function HazardousItemDisplay<TFieldMeta>({ meta, fieldConfig, hazardousItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    HazardousItemTypeName,
    meta,
    fieldConfig,
    hazardousItem,
    renderContext,
    HazardousItemSubElementsMap,
  )
}
