const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const ReportsController = require('./reportsController');

const reportController = new ReportsController();
const reportsRouter = Router();

reportsRouter.use(auth);
reportsRouter.use(role(['admin']));

reportsRouter.get(
  '/reservations',
  reportController.getReservationsWithinPeriodReport
);

reportsRouter.get(
  '/car/:carId',
  reportController.getCarReservationsWithinPeriodReport
);

module.exports = reportsRouter;
