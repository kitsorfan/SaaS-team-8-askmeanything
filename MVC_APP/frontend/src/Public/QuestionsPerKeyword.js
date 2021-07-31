import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'



import '../css/QuestionsPer.css'

const axios = require('axios')

function QuestionsPerDay() {

  const [questionData, setQuestionData] = useState([])




  useEffect(() => {
    axios.get("http://localhost:8080/api/public/questionsPerKeyword")
        .then(response => {
          const { results } = response.data
          setQuestionData(results)
        })
        .catch(error => console.log(error))
  }, [])


  return (
      <div className='questionPerDayBox'>

          <Card.Header className='headerBox'>
            <h5 className='mb-0'>Questions per Keyword 📊</h5>
          </Card.Header>

          <Card.Body>
            <div>
              <Card className='calendar'>
        
            <div className="calendarParent">
            <ResponsivePie
                  data={questionData}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.65}
                  padAngle={2}
                  cornerRadius={5}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: 'category10' }}
                  borderWidth={2}
                  borderColor={{ from: 'color', modifiers: [ [ 'darker', '0.8' ] ] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabel="value"
                  arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                  legends={[
                      {
                          anchor: 'bottom',
                          direction: 'row',
                          justify: false,
                          translateX: 0,
                          translateY: 56,
                          itemsSpacing: 0,
                          itemWidth: 100,
                          itemHeight: 18,
                          itemTextColor: '#333333',
                          itemDirection: 'left-to-right',
                          itemOpacity: 1,
                          symbolSize: 18,
                          symbolShape: 'circle',
                          effects: [
                              {
                                  on: 'hover',
                                  style: {
                                      itemTextColor: '#000'
                                  }
                              }
                          ]
            }
        ]}
    />
                </div>
              </Card>
            </div>

          </Card.Body>
                    
      </div>
  )
}

export default QuestionsPerDay
