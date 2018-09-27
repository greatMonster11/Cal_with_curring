export const add = x => {
  return { label: `+${x}`, func: y => y + x }
}

export const sub = x => {
  return { label: `-${x}`, func: y => y - x }
}

export const mul = x => {
  return { label: `×${x}`, func: y => y * x }
}

export const div = x => {
  return { label: `÷${x}`, func: y => Math.round(y / x) }
}
