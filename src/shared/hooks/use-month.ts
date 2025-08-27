import { useState } from 'react'

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

export function useMonth(initialDate: Date = new Date()) {
	const [date, setDate] = useState(initialDate)

	const indexMonth = date.getMonth()
	const month = monthNames[indexMonth]
	const year = date.getFullYear()

	const next = () => {
		setDate(new Date(year, indexMonth + 1, 1))
	}

	const prev = () => {
		setDate(new Date(year, indexMonth - 1, 1))
	}

	return {
		month,
		year,
		indexMonth,
		next,
		prev,
	}
}
