require('dotenv').config();
const express = require('express');

const { solvePuzzle } = require('./solvePuzzle')

const app = express();
app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}!`));

app.get('/', (req, res) => {
  const responses = {
    'Ping': 'OK',
    'Puzzle': (description) => {
      const puzzleStr = description.slice(description.indexOf('\n') + 1)
      return solvePuzzle(puzzleStr)
    },
    'Email Address': 'paabrown@gmail.com',
    'Source': [
      'https://github.com/paabrown/puzzle-server. \nThe part I\'m currently most',
      'dissatisfied with is the calculateCharValsFromIncompleteMatrix function, which is a bit opaque and confusing.',
      'Given more time, I would try to make it a bit more intuitive.',
    ].join(' '),
    'Phone': '+1 609-462-6519',
    'Referrer': 'I heard about the position from Jenny Gasparis on Vettery!',
    'Years': 'Depends how you count! I have been doing software engineering in a professional setting for 5 years, and have had the title "Software Engineer" for two. My boss tells me I will soon be promoted to "Senior Software Engineer".',
    'Name': 'Paul Brown',
    'Degree': 'BA Philosophy from the University of Chicago (3.9 GPA)',
    'Resume': 'http://paulbrown.io/resume',
    'Position': 'Senior Full Stack Engineer',
    'Status': 'I am a US Citizen and can provide proof of such!',
  }

  const { q, d } = req.query
  const response = responses[q]
  if (typeof response === 'string') {
    res.send(response)
  } else {
    const result = response(d)
    res.send(result)
  }
})
