import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExtensionContent } from  '../../model/ext/ExtensionContent'
import { ExtensionContentFieldMeta } from  '../../meta/ext/ExtensionContentMeta'


type Props<T> = {
  label: string
  value: ExtensionContent
  meta: FieldMeta<T>
}

export default function ExtensionContentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-ext ubl-ExtensionContent ubl-ExtensionContentType">
        <div className="title">{label}</div>
        <div className="child-attributes">

        </div>
    </div>
  )
}
