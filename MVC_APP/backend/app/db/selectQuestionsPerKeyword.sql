SELECT
qt.tag as 'tag',
COUNT(q.questionID) as 'count'

FROM questions AS q 

LEFT OUTER JOIN hastags AS ht
ON q.questionID=ht.questionID
LEFT OUTER JOIN questiontags as qt
ON ht.id=qt.id
GROUP BY qt.tag
ORDER BY count DESC, tag