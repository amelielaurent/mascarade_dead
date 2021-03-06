const express           = require('express');
const {body}            = require('express-validator/check/index');
const sessionController = require('../controllers/session');
const isAuth            = require('../middlewares/is-auth');

const router = express.Router();

router.put(
    '/new',
    isAuth,
    [
        body('className')
            .trim()
            .not()
            .isEmpty()
    ],
    sessionController.newSession
);

router.get('/all', isAuth, sessionController.getSessions);
router.get('/student/:sessionId', sessionController.getSessionById);


module.exports = router;
