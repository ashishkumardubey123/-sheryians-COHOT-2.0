const express = require('express');
const noteModel = require('./models/notes');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies


app.post('/api/notes',async(req, res) => {
 
     const { title, description } = req.body;

       const note= await noteModel.create({
               
               title, 
               description 
          })
          res.status(201).json({
            success: true,
            message: 'Note created successfully',
            data: note
          })   
 

});

 app.get('/api/notes', async(req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
     success: true,
     message: 'Notes retrieved successfully',
     data: notes
    })     

 })
 
app.delete('/api/notes/:id', async(req, res) => {
    const { id } = req.params;
    await noteModel.findByIdAndDelete(id);   
     res.status(200).json({
      success: true,
      message: 'Note deleted successfully'
     })   
})

app.patch('/api/notes/:id', async (req,res)=>{
 
  const id = req.params.id
  const {description} = req.body

 await noteModel.findByIdAndUpdate(id,{  description  } )

 res.status(200).json({
    success: true,
    message: 'Note updated successfully'
   }) 
    
})
 

module.exports = app;