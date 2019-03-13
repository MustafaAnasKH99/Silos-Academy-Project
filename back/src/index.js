import app from './app'
import initializeDatabase from './db'


const start = async () => {
    const controller = await initializeDatabase()

    app.get('/',(req,res)=>res.send("ok"));

    app.get('/users', async (req, res) => {
        const users_list = await controller.getUsers()
        res.json({success: true, result: users_list})
    })

    app.get('/courses', async (req, res) => {
        const courses_list = await controller.getCourses()
        res.json({success: true, result: courses_list})
    })

    app.get('/courses/new', async (req, res, next) => {
        const { course_name } = req.query
        if(!course_name){

        }
        const result = await controller.createCourse({course_name: 'JavaScript For Beginners'})
        res.json({success: true, result: result.course_name})
    })

    app.get('/levels', async (req, res) => {
        const levels_list = await controller.getLevels()
        res.json({success: true, result: levels_list})
    })

    app.get('/levels/new', async (req, res, next) => {
        // const { level } = req.query
        const result = await controller.createLevel({course_name: req.query.course_name, level_name: req.query.level_name, article: req.query.article, test: req.query.test, expected_answer: req.query.expected_answer, level_index: req.query.level_index})
        res.json({success: true, result})
    })

    app.post('/levels/new', async (req, res, next) => {
        const {course_name, level_name, article, test, expected_answer, level_index} = req.body
        const result = await controller.createLevel({course_name: course_name, level_name: level_name, article: article, test: test, expected_answer: expected_answer, level_index: level_index})
        res.json({success: true, result})
    })

    app.use((err, req, res, next) => {
        console.error(err)
        const message = err.message
        res.status(500).json({ success:false, message })
      })
    
    app.listen(8080, () => console.log('server listening on port 8080'))
  }
  
start();