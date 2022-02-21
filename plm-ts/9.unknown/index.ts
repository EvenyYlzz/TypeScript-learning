let unknownValue: unknown = 666

unknownValue = '111'
unknownValue = true
unknownValue = {}




if (typeof unknownValue === 'function') {
  unknownValue()
}

if (typeof unknownValue === 'string') {
  unknownValue.toUpperCase()
}