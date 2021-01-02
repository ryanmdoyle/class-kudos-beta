// exceptions with be skipped when looking for foreign keys
const idExceptions = ['enrollId']

const foreignKeyReplacement = (input) => {
  let output = input
  const foreignKeys = Object.keys(input).filter((k) => {
    return idExceptions.includes(k) === false && k.match(/Id$/)
  })

  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, '')
    const value = input[key]
    delete output[key]
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    })
  })
  return output
}

export default foreignKeyReplacement
