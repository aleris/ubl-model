import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CommodityClassification } from  '../../model/cac/CommodityClassification'
import { CommodityClassificationFieldMeta } from  '../../meta/cac/CommodityClassificationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CommodityClassification
  meta: FieldMeta<T>
}

export default function CommodityClassificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CommodityClassificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CommodityClassificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CommodityClassificationFieldMeta.NatureCode} 
          value={value.NatureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CommodityClassificationFieldMeta.NatureCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CommodityClassificationFieldMeta.CargoTypeCode} 
          value={value.CargoTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CommodityClassificationFieldMeta.CargoTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CommodityClassificationFieldMeta.CommodityCode} 
          value={value.CommodityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CommodityClassificationFieldMeta.CommodityCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CommodityClassificationFieldMeta.ItemClassificationCode} 
          value={value.ItemClassificationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CommodityClassificationFieldMeta.ItemClassificationCode} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
