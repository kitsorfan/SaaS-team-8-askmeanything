import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

// yarn add @nivo/core @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'



import '../css/QuestionsPer.css'

const axios = require('axios')

function QuestionsPerDay() {

  const [questionData, setQuestionData] = useState([])




  useEffect(() => {
    axios.get("http://localhost:8080/api/public/questionsPerDay")
        .then(response => {
          const { results } = response.data
          setQuestionData(results)
        })
        .catch(error => console.log(error))
  }, [])


  return (
      <div className='questionPerDayBox'>

          <Card.Header className='headerBox'>
            <h5 className='mb-0'>Questions per Day 📅</h5>
          </Card.Header>

          <Card.Body>
            <div>
              <Card className='calendar'>
        
            <div className="calendarParent">
            <ResponsiveCalendar
                      data={questionData}

                      margin={{ top: 10, right: 10, bottom: 10, left: 20 }}
                      monthSpacing={8}
                      from={`2021-01-01`}
                      to={`$2021-12-31`}
                      colors={[ '#99ccff', '#3399ff', '#0073e6', '#004d99' ]}
                      emptyColor='rgba(255, 255, 255, 0.611)'
                      dayBorderWidth={1}
                      monthBorderWidth={2}
                      yearSpacing={40}

                      monthBorderColor="#444040"
                      monthLegendPosition="after"
                      monthLegendOffset ={17}
                      dayBorderColor="#968888"
                      legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }]}
                  />
                </div>
              </Card>
            </div>

          </Card.Body>
                    
      </div>
  )
}

export default QuestionsPerDay
