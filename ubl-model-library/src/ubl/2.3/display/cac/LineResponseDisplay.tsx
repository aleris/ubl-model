import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LineResponse } from  '../../model/cac/LineResponse'
import { LineResponseFieldMeta } from  '../../meta/cac/LineResponseMeta'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import ResponseDisplay from './ResponseDisplay'
import { Response } from '../../model/cac/Response'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: LineResponse | undefined
  meta: FieldMeta<T>
}

export default function LineResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-LineResponse">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LineResponseFieldMeta.UBLExtensions}
          />

          <LineReferenceDisplay
            label="Line Reference"
            value={value.LineReference?.[0]}
            meta={LineResponseFieldMeta.LineReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Response"
            label="Response"
            items={value.Response}
            meta={LineResponseFieldMeta.Response} 
            itemDisplay={ (itemValue: Response, key: string | number) =>
              <ResponseDisplay
                key={key}
                label="Response"
                value={itemValue}
                meta={LineResponseFieldMeta.Response}
              />
            }
          />
        </div>
    </div>
  )
}
