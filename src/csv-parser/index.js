import fs from 'node:fs/promises'

export async function csvParse(csvPath, { skipFirstLine = true }) {
  const csvRows = await splitCsvRows(csvPath, skipFirstLine)

  return csvRows.map(rowString => {
    return rowString.split(',').map(col => col.trim())
  })
}

async function splitCsvRows(csvPath, skipFirstLine) {
  return await fs.readFile(csvPath, 'utf-8')
    .then(content => {
      const contentRows = content.split('\n')

      if (skipFirstLine) {
        return contentRows.slice(1)
      }

      return contentRows
    })
}