import {formatDistance, subDays } from 'date-fns'

const formatDate = date => {
    return formatDistance(subDays(date, 3), new Date(), {addSuffix: true})
}

export default formatDate
