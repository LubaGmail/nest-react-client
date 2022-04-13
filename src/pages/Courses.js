import React from 'react'
import { Table, TableHead, TableRow, TableBody, TableCell, TableFooter } from '@mui/material';
import '../App.css'

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
        <div>
           <CoursesList courses={courses} />

            {isLoading && <p>Loading...</p>}
            {err && <p>{err}</p>}

        </div>
    )
}

const CoursesList = ({courses}) => {
    return (
        <div>
            <h4>Available Courses</h4>

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
            </Table>
        </div>
    )
}

export default Courses
