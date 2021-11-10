import React from "react"

const GradesRow = ({grade}) => {
  return (
    <div>
      {`${grade.grade}: ${grade.score} points, ${new Date(grade.date).toLocaleDateString("en-US")}`}
    </div>
  )
}
export default GradesRow
