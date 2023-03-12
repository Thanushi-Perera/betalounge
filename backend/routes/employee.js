import express from 'express';

//Controllers
import{
    addEmployee,
    getEmployee,
    deleteEmployee,
    updateEmployee,
    getSelectedEmployee,
} from "../controller/employee.js"

const router = express.Router();

router.post('/addEmployee', addEmployee);
router.get('/getEmployee', getEmployee);
router.post('/deleteEmployee', deleteEmployee);
router.post('/updateEmployee', updateEmployee);
router.post('/getSelectedEmployee', getSelectedEmployee);

export default router;