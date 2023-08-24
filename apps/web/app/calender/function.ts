// const moment = require('moment');
import moment from 'moment';

const handleEventData = eventData => {
  const dataObj = {
    startTime: Date.now(),
    address: '',
    duration: 30,
    title: '',
    description: ''
  }
  return Object.assign(dataObj, eventData); 
}

const handleDescriptionFormatting = description => {
  return description.replace(new RegExp(/\n/, 'g'), '%0D%0A');
}

const googleLink = (eventData={}) => {
  const { startTime, address, duration, title, description } = handleEventData(eventData)
  return `https://calendar.google.com/calendar/r/eventedit?dates=${moment(startTime).format('YYYYMMDD[T]HHmm[00]')}/${moment(startTime).add(duration, 'm').format('YYYYMMDD[T]HHmm[00]')}&location=${address}&text=${title}&details=${handleDescriptionFormatting(description)}`
};


export default googleLink;