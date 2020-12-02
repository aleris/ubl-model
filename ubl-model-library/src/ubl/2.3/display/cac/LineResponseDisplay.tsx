import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LineResponse } from  '../../model/cac/LineResponse'
import { LineResponseFieldMeta } from  '../../meta/cac/LineResponseMeta'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import ResponseDisplay from './ResponseDisplay'
import { Response } from '../../model/cac/Response'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: LineResponse
  meta: FieldMeta<T>
}

export default function LineResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LineResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LineResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineResponseFieldMeta.LineReference} 
          value={value.LineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={LineResponseFieldMeta.LineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineResponseFieldMeta.Response} 
          value={value.Response}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay key={key} meta={LineResponseFieldMeta.Response} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
