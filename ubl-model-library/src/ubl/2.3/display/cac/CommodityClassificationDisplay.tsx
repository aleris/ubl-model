import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CommodityClassification } from  '../../model/cac/CommodityClassification'
import { CommodityClassificationFieldMeta } from  '../../meta/cac/CommodityClassificationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CommodityClassification | undefined
  meta: FieldMeta<T>
}

export default function CommodityClassificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CommodityClassification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CommodityClassificationFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Nature Code"
            value={value.NatureCode?.[0]}
            meta={CommodityClassificationFieldMeta.NatureCode}
          />

          <CodeDisplay
            label="Cargo Type Code"
            value={value.CargoTypeCode?.[0]}
            meta={CommodityClassificationFieldMeta.CargoTypeCode}
          />

          <CodeDisplay
            label="Commodity Code"
            value={value.CommodityCode?.[0]}
            meta={CommodityClassificationFieldMeta.CommodityCode}
          />

          <CodeDisplay
            label="Item Classification Code"
            value={value.ItemClassificationCode?.[0]}
            meta={CommodityClassificationFieldMeta.ItemClassificationCode}
          />
        </div>
    </div>
  )
}
