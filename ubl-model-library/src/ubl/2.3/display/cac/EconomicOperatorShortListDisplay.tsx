import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EconomicOperatorShortList } from  '../../model/cac/EconomicOperatorShortList'
import { EconomicOperatorShortListField, EconomicOperatorShortListFieldMeta, EconomicOperatorShortListTypeName } from  '../../meta/cac/EconomicOperatorShortListMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { PartyDisplay } from './PartyDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EconomicOperatorShortList, void>
  economicOperatorShortList: EconomicOperatorShortList[] | undefined
  renderContext: RenderContext
}

export const EconomicOperatorShortListSubElementsMap: SubElementsTemplatesMap<EconomicOperatorShortListField, EconomicOperatorShortList, void> = new Map([
    [
      EconomicOperatorShortListField.UBLExtensions,
      { meta: EconomicOperatorShortListFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EconomicOperatorShortListField.UBLExtensions}
          meta={EconomicOperatorShortListFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorShortListField.LimitationDescription,
      { meta: EconomicOperatorShortListFieldMeta.LimitationDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EconomicOperatorShortListField.LimitationDescription}
          meta={EconomicOperatorShortListFieldMeta.LimitationDescription}
          fieldConfig={fieldConfig}
          text={value?.LimitationDescription}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorShortListField.ExpectedQuantity,
      { meta: EconomicOperatorShortListFieldMeta.ExpectedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={EconomicOperatorShortListField.ExpectedQuantity}
          meta={EconomicOperatorShortListFieldMeta.ExpectedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ExpectedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorShortListField.MaximumQuantity,
      { meta: EconomicOperatorShortListFieldMeta.MaximumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={EconomicOperatorShortListField.MaximumQuantity}
          meta={EconomicOperatorShortListFieldMeta.MaximumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorShortListField.MinimumQuantity,
      { meta: EconomicOperatorShortListFieldMeta.MinimumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={EconomicOperatorShortListField.MinimumQuantity}
          meta={EconomicOperatorShortListFieldMeta.MinimumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorShortListField.PreSelectedParty,
      { meta: EconomicOperatorShortListFieldMeta.PreSelectedParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EconomicOperatorShortListField.PreSelectedParty}
          meta={EconomicOperatorShortListFieldMeta.PreSelectedParty}
          fieldConfig={fieldConfig}
          party={value?.PreSelectedParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function EconomicOperatorShortListDisplay<TFieldMeta>({ meta, fieldConfig, economicOperatorShortList, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EconomicOperatorShortListTypeName,
    meta,
    fieldConfig,
    economicOperatorShortList,
    renderContext,
    EconomicOperatorShortListSubElementsMap,
  )
}
