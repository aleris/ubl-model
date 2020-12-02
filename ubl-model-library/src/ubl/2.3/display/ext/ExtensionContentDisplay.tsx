import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExtensionContent } from  '../../model/ext/ExtensionContent'
import { ExtensionContentFieldMeta } from  '../../meta/ext/ExtensionContentMeta'


type Params<T> = {
  value: ExtensionContent
  meta: FieldMeta<T>
}

export default function ExtensionContentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">

        </div>
    </div>
  )
}
