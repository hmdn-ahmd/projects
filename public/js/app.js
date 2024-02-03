let weatherApi = "/weather"
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const weatherIcon = document.querySelector('.weatherIcon i')
const weathterCondition = document.querySelector('.weatherCondition')
const temp = document.querySelector('.temperature span')

const location = document.querySelector('.place')
const date = document.querySelector(".date")

const currentDate = new Date()
date.textContent= currentDate;