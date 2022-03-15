import express from "express"
import Task from "../models/Task.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const query = Task.find({})
    const tasks = await query.exec()
    res.json(tasks)
  } catch (e) {
    res.json({ message: "Whoops, there was a error" })
  }
})

router.post("/", async (req, res) => {
  try {
    const newTaskData = {
      title: req.body.title,
      message: req.body.message,
    }
    const task = new Task(newTaskData)
    const newTask = await task.save()
    res.json(newTask)
  } catch (e) {
    res.json({ message: "Whoops, there was a error" })
  }
})

export default router