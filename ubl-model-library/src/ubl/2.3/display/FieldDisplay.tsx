import React from 'react'

type Params = {
  label: string
  value: string
}

export default function FieldDisplay({ label, value }: Params) {
  return (
    <div className="field">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  )
}
