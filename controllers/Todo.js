 const router = require('express').Router()
 const Todo = require('../models/Todos')

// router.get('/', async(req, res) => {
//         res.json(await Todo.find({}).catch((err) => res.status(400).json(err)))
//     })

// router.get('/', async(req, res) => {
//         try{
//             const todos = await Todo.find({})
//             res.json(todos)
//         }catch(error){ res.status(400).json(error)}
//     })

// router.post('/', async(req, res) => {
//         try{
//             const newTodo = await Todo.create(req.body)
//             res.json(newTodo)
//         }catch(error){
//             res.status(400).json(error)
//         }
//     })

// router.put('/:id', async (req, res) => {
//     try{
//         const updatedTodo = await Todo.findyByIdAndUpdate(
//             req.params.id,
//             req.body,
//             {new: true}
            
//         )      
//         res.json(updatedTodo)
//     }catch(error){ res.status(400).json(error)}
// })

// router.delete(':/id', async(req, res) => {
//     try{
//         const deletedTodo = await Todo.findByIdAndRemove(req.params.id)
//         res.json(deletedTodo)
//     }catch(error){ res.status(400).json(error)}
    
// })

// router.put('/:id', async(req, res) => {
//     try{
//     const updatedTodo = await Todo.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new: true}
//     )
//     res.json(updatedTodo)
//     } catch(error){
//         res.status(400).json(error)
//     }
// })

// router.delete('/:id', async(req, res) => {
//     try{
//         const deletedTodo = await Todo.findByIdAndRemove(req.params.id)
//         res.json(deletedTodo)
//     } catch(error){
//         res.status(400).json(error)
//     }
// })
// module.exports = router

// const router = require('express').Router()

// const Todo = require('../models/Todo')

router.get('/', async(req, res) => {
   res.json(await Todo.find({}).catch((err) => res.status(400).json(err)))
})

router.get('/:id', async(req, res) =>{ 
    ((await Todo.findById(req.params.id)
        .then( todo => res.json(todo))
        .catch(err => res.status(400).json(error))
    ))})

router.post('/', async(req,res) => {
    try {
        const newTodo = await Todo.create(req.body)
        res.json(newTodo)
    }catch(error){
        res.status(400).json(error)
    }
})

router.put('/:id', async(req, res) => {
    try{
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(updatedTodo)
    } catch(error){
        res.status(400).json(error)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const deletedTodo = await Todo.findByIdAndRemove(req.params.id)
        res.json(deletedTodo)
    } catch(error){
        res.status(400).json(error)
    }
})

module.exports = router