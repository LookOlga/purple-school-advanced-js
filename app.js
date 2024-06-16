'use strict'

// 4 - timer

const setTimer = () => {
    const timerContainer = document.querySelector('.timer-content')
    const endDate = new Date(new Date().getFullYear(), 11, 31, 23, 59);
    const endDateMonth = endDate.getMonth() + 1
    const timeShift = 1
    const locale = window.navigator.language

    const intervalId = setInterval(() => {
        const today = new Date();
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const daysLeft = lastDayOfMonth.getDate() - currentDate.getDate();

        const currentDateParts = new Intl.DateTimeFormat(locale, {
            month: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).formatToParts(today.getTime())


        const formattedCurrentDateParts = currentDateParts.reduce((acc, item) => {
            acc[item.type] = item.value;
            return acc;
        }, {})

        timerContainer.textContent = `${endDateMonth - formattedCurrentDateParts.month} months 
        ${daysLeft} days
        ${24 - formattedCurrentDateParts.hour - timeShift} hours
        ${60 - formattedCurrentDateParts.minute - timeShift} minutes
        ${60 - formattedCurrentDateParts.second} seconds`
    }, 1000)


    if (new Date().getTime >= endDate.getTime()) {
        clearInterval(intervalId)
    }
}

setTimer()