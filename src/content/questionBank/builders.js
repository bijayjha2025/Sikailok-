const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export function expand({ language, topic, difficulty, key, variants, build }) {
  return variants.map((variant, index) => ({
    id: `${language}-${slug(topic)}-${difficulty.toLowerCase()}-${key}-${index + 1}`,
    language,
    topic,
    difficulty,
    variant: index + 1,
    starter: '',
    solution: '',
    ...build(variant),
  }))
}

export function table(columns, rows) {
  return [
    columns.join(' | '),
    columns.map(() => '---').join(' | '),
    ...rows.map((row) => row.map((value) => String(value ?? 'NULL')).join(' | ')),
  ].join('\n')
}