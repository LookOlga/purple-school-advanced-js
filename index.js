'use strict'

import { User } from "./user.js"
import { Task } from "./task.js"

const task = new Task('Do your task.')
const user = new User(task)
user.do()