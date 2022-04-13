import '../App.css'
import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import { Table, TableHead, TableRow, TableBody, TableCell, TableFooter, Typography, Button, Link, Box } from '@mui/material';

const BASE_URL = 'http://localhost:5000/courses';

const Courses = () => {
    const [courses, setCourses] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false);
    const [err, setErr] = React.useState('');
    
    React.useEffect(() => {
        setIsLoading(true)
        fetch(BASE_URL)
            .then((response) => response.json())
            .then((result) => {
                setIsLoading(false)
                setCourses(result)
            })
            .catch((err) =>{
                setIsLoading(false)
                setErr(err.message)
                console.log('err', err)
            })
    }, [])

    return(
        <div  className='centered'>
           <CoursesList courses={courses} />

            {isLoading && <p>Loading...</p>}
            {err && <p>{err}</p>}

        </div>
    )
}

const CoursesList = ({courses}) => {
    const [showNew, setShowNew] = React.useState(false)

    const handleHide = (event) => {
        setShowNew(false)
    }

    return (
        <div>
              <Typography variant="h4" component="h4">
                Available Courses                 
              </Typography>
 
            <Table  className='centered'>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    courses.map((el, i) => (
                        <TableRow key={i}>
                            <TableCell>{el.id}</TableCell>
                            <TableCell>{el.title}</TableCell>
                            <TableCell>{el.price}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan='3' align='center'>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    setShowNew(true)
                                }}
                            >
                                New Course
                            </Link>
                        </TableCell>
                        
                    </TableRow>
                </TableFooter>
            </Table>

            {showNew && <CreateCourse onHide={handleHide} />}
        </div>
    )
}

export const CreateCourse = ({onHide}) => {
    const [state, setState] = React.useState({
        id: '',
        title: '',
        price: ''
    })

    const handleSubmit = async (ev) => {
        ev.preventDefault()

        await console.log('submit', state)
    
        try {
        //   const res = await axios.post(API_URL, state)
        //   handleReset()
        } catch(err) {
          console.log('err', err.message)
        }
    }
  
    const handleChange = (ev) => {
        const id =  ev.target.id
        let value = ev.target.value
        let key = ''

        switch(id) {
            case('title'): 
                key = 'title'
                break;
            case('price'):
                key = 'price'
                break;
            default: 
                console.error('error in change event')
        }

        setState({
            ...state,
            [key]: value
        })

    }

    return (
        <>
       
     
            <div className='newCourse'>
                <Box
                    sx={{
                        border: '1px solid grey',
                        padding: 4,
                        width: 580,
                        height: 360,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'floralwhite',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
               
                    <Typography variant="h6" component="h6">
                        New Course
                    </Typography>
                    <form onSubmit={handleSubmit} 
                    >
                        <div>
                            <label htmlFor='id'>Id: </label>
                            <input type='text' id='id' name='id' disabled={true}
                            />
                        </div>
                        <div>
                            <label htmlFor='title'>Title: </label>
                            <input type='text' id='title' name='title'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='title'>Price: </label>
                            <input type='text' id='price' name='price' 
                                onChange={handleChange}
                            />
                        </div>
                        <div className='buttonDiv'>
                            <Button variant="outlined" type='submit'>
                                Save
                            </Button>
                        </div>
                    </form>
                    
                    <div>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={onHide}
                        >
                            Hide
                        </Link>
                    </div>
             
                </Box>

            </div>
  

        </>

    )
}

export default Courses



