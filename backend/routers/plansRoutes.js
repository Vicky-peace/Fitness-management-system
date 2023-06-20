import {getAllplans,getPlanById,choosePlan} from '../controllers/plansController.js';



const plansRoutes = (app) => {
    app.route('/plans')
      .get(getAllplans)

      app.route("/plans/:plan_id")
      .get(getPlanById)
      .post(choosePlan)
      .put()
      .delete()
}
export default plansRoutes;