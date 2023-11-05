const getById = id => document.querySelector(`#${id}`)

export const name_input = getById("name-input")
export const find_by_name_button = getById("find-by-name")

export const symbol_input = getById("symbol-input")
export const find_by_symbol_button = getById("find-by-symbol")

export const find_by_atomic_number_input = getById("find-by-atomic-number-input")
export const find_by_atomic_number_charge_input = getById("find-by-atomic-number-charge")
export const find_by_atomic_number_button = getById("find-by-atomic-number")