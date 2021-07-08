import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AuctionTerms } from  '../../model/cac/AuctionTerms'
import { AuctionTermsField, AuctionTermsFieldMeta, AuctionTermsTypeName } from  '../../meta/cac/AuctionTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AuctionTerms, void>
  auctionTerms: AuctionTerms[] | undefined
  renderContext: RenderContext
}

export const AuctionTermsSubElementsMap: SubElementsTemplatesMap<AuctionTermsField, AuctionTerms, void> = new Map([
    [
      AuctionTermsField.UBLExtensions,
      { meta: AuctionTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AuctionTermsField.UBLExtensions}
          meta={AuctionTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AuctionTermsField.AuctionConstraintIndicator,
      { meta: AuctionTermsFieldMeta.AuctionConstraintIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AuctionTermsField.AuctionConstraintIndicator}
          meta={AuctionTermsFieldMeta.AuctionConstraintIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.AuctionConstraintIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AuctionTermsField.JustificationDescription,
      { meta: AuctionTermsFieldMeta.JustificationDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AuctionTermsField.JustificationDescription}
          meta={AuctionTermsFieldMeta.JustificationDescription}
          fieldConfig={fieldConfig}
          text={value?.JustificationDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AuctionTermsField.Description,
      { meta: AuctionTermsFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AuctionTermsField.Description}
          meta={AuctionTermsFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AuctionTermsField.ProcessDescription,
      { meta: AuctionTermsFieldMeta.ProcessDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AuctionTermsField.ProcessDescription}
          meta={AuctionTermsFieldMeta.ProcessDescription}
          fieldConfig={fieldConfig}
          text={value?.ProcessDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AuctionTermsField.ConditionsDescription,
      { meta: AuctionTermsFieldMeta.ConditionsDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AuctionTermsField.ConditionsDescription}
          meta={AuctionTermsFieldMeta.ConditionsDescription}
          fieldConfig={fieldConfig}
          text={value?.ConditionsDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AuctionTermsField.ElectronicDeviceDescription,
      { meta: AuctionTermsFieldMeta.ElectronicDeviceDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AuctionTermsField.ElectronicDeviceDescription}
          meta={AuctionTermsFieldMeta.ElectronicDeviceDescription}
          fieldConfig={fieldConfig}
          text={value?.ElectronicDeviceDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AuctionTermsField.AuctionURI,
      { meta: AuctionTermsFieldMeta.AuctionURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AuctionTermsField.AuctionURI}
          meta={AuctionTermsFieldMeta.AuctionURI}
          fieldConfig={fieldConfig}
          identifier={value?.AuctionURI}
          renderContext={renderContext}
        />}
    ]
]) 

export function AuctionTermsDisplay<TFieldMeta>({ meta, fieldConfig, auctionTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AuctionTermsTypeName,
    meta,
    fieldConfig,
    auctionTerms,
    renderContext,
    AuctionTermsSubElementsMap,
  )
}
