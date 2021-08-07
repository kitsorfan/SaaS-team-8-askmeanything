SELECT 
	u.email as 'email',
	q.questionID as 'ID',
	q.title as 'Title',
	q.qtext as 'Question',
	DATE(q.createdAt) as 'day',
	qt.tag AS 'tag',
    COUNT(a.questionID) as 'countAnswers'
FROM questions AS q
INNER JOIN users AS u
	ON u.userID=q.userID
INNER JOIN questiontags as qt
ON qt.id=q.tagID
LEFT JOIN answers as a
	ON a.questionID=q.questionID
GROUP BY q.questionID
ORDER BY q.questionID DESC
LIMIT 10
OFFSET 0

