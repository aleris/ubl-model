import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ResponseValue } from  '../../model/cac/ResponseValue'
import { ResponseValueField, ResponseValueFieldMeta, ResponseValueTypeName } from  '../../meta/cac/ResponseValueMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BinaryObjectDisplay } from '../cbc/BinaryObjectDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ResponseValue, void>
  responseValue: ResponseValue[] | undefined
  renderContext: RenderContext
}

export const ResponseValueSubElementsMap: SubElementsTemplatesMap<ResponseValueField, ResponseValue, void> = new Map([
    [
      ResponseValueField.UBLExtensions,
      { meta: ResponseValueFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ResponseValueField.UBLExtensions}
          meta={ResponseValueFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ID,
      { meta: ResponseValueFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ResponseValueField.ID}
          meta={ResponseValueFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.Description,
      { meta: ResponseValueFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ResponseValueField.Description}
          meta={ResponseValueFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.Response,
      { meta: ResponseValueFieldMeta.Response,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ResponseValueField.Response}
          meta={ResponseValueFieldMeta.Response}
          fieldConfig={fieldConfig}
          text={value?.Response}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseAmount,
      { meta: ResponseValueFieldMeta.ResponseAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ResponseValueField.ResponseAmount}
          meta={ResponseValueFieldMeta.ResponseAmount}
          fieldConfig={fieldConfig}
          amount={value?.ResponseAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseBinaryObject,
      { meta: ResponseValueFieldMeta.ResponseBinaryObject,
        template: ({value, renderContext, fieldConfig}) => <BinaryObjectDisplay
          key={ResponseValueField.ResponseBinaryObject}
          meta={ResponseValueFieldMeta.ResponseBinaryObject}
          fieldConfig={fieldConfig}
          binaryObject={value?.ResponseBinaryObject}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseCode,
      { meta: ResponseValueFieldMeta.ResponseCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ResponseValueField.ResponseCode}
          meta={ResponseValueFieldMeta.ResponseCode}
          fieldConfig={fieldConfig}
          code={value?.ResponseCode}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseDate,
      { meta: ResponseValueFieldMeta.ResponseDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ResponseValueField.ResponseDate}
          meta={ResponseValueFieldMeta.ResponseDate}
          fieldConfig={fieldConfig}
          date={value?.ResponseDate}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseID,
      { meta: ResponseValueFieldMeta.ResponseID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ResponseValueField.ResponseID}
          meta={ResponseValueFieldMeta.ResponseID}
          fieldConfig={fieldConfig}
          identifier={value?.ResponseID}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseIndicator,
      { meta: ResponseValueFieldMeta.ResponseIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ResponseValueField.ResponseIndicator}
          meta={ResponseValueFieldMeta.ResponseIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ResponseIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseMeasure,
      { meta: ResponseValueFieldMeta.ResponseMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ResponseValueField.ResponseMeasure}
          meta={ResponseValueFieldMeta.ResponseMeasure}
          fieldConfig={fieldConfig}
          measure={value?.ResponseMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseNumeric,
      { meta: ResponseValueFieldMeta.ResponseNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ResponseValueField.ResponseNumeric}
          meta={ResponseValueFieldMeta.ResponseNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.ResponseNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseQuantity,
      { meta: ResponseValueFieldMeta.ResponseQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ResponseValueField.ResponseQuantity}
          meta={ResponseValueFieldMeta.ResponseQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ResponseQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseTime,
      { meta: ResponseValueFieldMeta.ResponseTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ResponseValueField.ResponseTime}
          meta={ResponseValueFieldMeta.ResponseTime}
          fieldConfig={fieldConfig}
          time={value?.ResponseTime}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseValueField.ResponseURI,
      { meta: ResponseValueFieldMeta.ResponseURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ResponseValueField.ResponseURI}
          meta={ResponseValueFieldMeta.ResponseURI}
          fieldConfig={fieldConfig}
          identifier={value?.ResponseURI}
          renderContext={renderContext}
        />}
    ]
]) 

export function ResponseValueDisplay<TFieldMeta>({ meta, fieldConfig, responseValue, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ResponseValueTypeName,
    meta,
    fieldConfig,
    responseValue,
    renderContext,
    ResponseValueSubElementsMap,
  )
}
