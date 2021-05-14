import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: LineResponse
  meta: FieldMeta<T>
}

export default function LineResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-LineResponse ubl-LineResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-LineResponse ubl-UBLExtensions"
          meta={LineResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LineResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineResponse ubl-LineReference"
          meta={LineResponseFieldMeta.LineReference} 
          value={value.LineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Line Reference"
              value={itemValue}
              meta={LineResponseFieldMeta.LineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LineResponse ubl-Response"
          meta={LineResponseFieldMeta.Response} 
          value={value.Response}
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
