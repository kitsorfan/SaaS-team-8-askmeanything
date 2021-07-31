import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import "../css/AllQuestions.css"

function PaginationComponent({ totalItems, pageSize, pageRange, pageState }) {
  const [activePage, setActivePage] = pageState

  const changePage = number => {
    setActivePage(number)
  }

  const prevPage = () => {
    setActivePage(prev => prev - 1)
  }

  const nextPage = () => {
    setActivePage(prev => prev + 1)
  }

  const totalPages = Math.ceil(totalItems / pageSize)
  const withinRangeLeft = activePage < pageRange
  const withinRangeRight = totalPages - pageRange + 1 < activePage
  const offset = Math.floor(pageRange / 2)

  const start = withinRangeLeft ? 1 : (withinRangeRight ? totalPages - pageRange + 1 : activePage - offset)
  const end = withinRangeLeft ? Math.min(pageRange, totalPages) : (withinRangeRight ? totalPages : activePage + offset)
  const pageNumbers = []

  for (let number = start; number <= end; number++) {
    pageNumbers.push(number)
  }

  const pages = []
  
  if (activePage > 1) {
    pages.push(
        <Pagination.Item key={'prev'} onClick={() => prevPage()}>
          ◀
        </Pagination.Item>
    )
  }

  if (pageNumbers[0] !== 1) {
    pages.push(
        <Pagination.Item key={1} onClick={() => changePage(1)}>
          {1}
        </Pagination.Item>
    )
    if (pageNumbers[0] !== 2) {
      pages.push(
          <Pagination.Ellipsis  key={'ellipsisl'} />
      )
    }
  }

  pageNumbers.forEach(number => {
    pages.push(
        <Pagination.Item  key={number} onClick={() => changePage(number)} active={activePage === number}>
         <div >{number}</div> 
        </Pagination.Item>
    )
  })

  if (pageNumbers[pageNumbers.length - 1] !== totalPages) {
    if (pageNumbers[pageNumbers.length - 1] !== totalPages - 1) {
      pages.push(
          <Pagination.Ellipsis key={'ellipsisr'} />
      )
    }
    pages.push(
        <Pagination.Item key={totalPages} onClick={() => changePage(totalPages)}>
          {totalPages}
        </Pagination.Item>
    )
  }

  if (activePage < totalPages) {
    pages.push(
        <Pagination.Item key={'next'} onClick={() => nextPage()}>
         ▶
        </Pagination.Item>
    )
  }

  return (
      <Pagination className='mb-4 py-3  ourPagination'  size='2vh'>
          {pages}
      </Pagination>
  )
}

export default PaginationComponent
