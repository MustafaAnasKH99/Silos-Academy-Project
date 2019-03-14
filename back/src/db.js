// back/src/db.js
import sqlite from 'sqlite'
import SQL from 'sql-template-strings';

const initializeDatabase = async () => {
  const db = await sqlite.open('./db.sqlite');

  const createCourse = async (course_name) => {
    // const { course_name } = props
    const result = await db.run(SQL `INSERT INTO courses (course_name) VALUES (${course_name.course_name});`)
    const id = result.stmt.lastID
    return id
  }

  // const getLatestLevel = async (props) => {
  //   const { course_name } = props
  //   const query = SQL`SELECT level_index FROM level WHERE course_name=${course_name} ORDER BY level_index DESC LIMIT 1`
  //   const result = await db.run(query)
  //   if(!result){ return 0 }
  //   // [ { level_index:4 } ]
  //   return result[0].level_index
  // }

  const createLevel = async (props) => {
    const { course_name, level_name, article, test, expected_answer, level_index } = props
    const result = await db.run(SQL 
      `INSERT INTO level (course_name, level_name, article, test, expected_answer, level_index) 
      VALUES (${course_name}, ${level_name}, ${article}, ${test}, ${expected_answer}, ${level_index});`)
    const id = result.stmt.lastID
    return id
  }

  // const deleteCourse = async (id) => {
  //   const result = await db.run(SQL `DELETE FROM courses WHERE course_id = ${id}`)
  //   switch(result.stmt.changes){
  //     case 0 : return false; break
  //     default : return true; break
  //   }
  // }

  const getUsers = async (orderBy) => {
    let statement = `SELECT * FROM users`
    switch(orderBy){
      case 'name' : statement+= ` ORDER BY name`; break;
      case 'email' : statement+= ` ORDER BY email`; break;
      default: break;
    }
    const rows = await db.all(statement)
    return rows
  }

  const getCourse = async (id) => {
    try {
      const courses_list = await db.all(`SELECT * from courses WHERE id=${id}`)
      const course = courses_list[0]
      if(!course){
        throw new Error(`course ${id} not found`)
      }
      return course
    } catch(e){
      throw new Error(`couldn't get the course ${id}: `+e.message)
    } 
  }

  const getCourses = async () => {
    const rows = await db.all("SELECT * FROM courses")
    return rows
  }

  const getLevels = async () => {
    const levels = await db.all("SELECT * FROM level")
    return levels
  }

  const controller = {
    createCourse,
    // deleteCourse,
    createLevel,
    getCourse,
    getCourses,
    getUsers,
    getLevels
  }

  return controller
}

export default initializeDatabase