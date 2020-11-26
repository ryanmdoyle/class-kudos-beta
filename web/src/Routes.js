// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/class-group-list" page={ClassGroupListPage} name="classGroupList" />
      <Route path="/scaffolds/rewards/new" page={ScaffoldsNewRewardPage} name="scaffoldsNewReward" />
      <Route path="/scaffolds/rewards/{id}/edit" page={ScaffoldsEditRewardPage} name="scaffoldsEditReward" />
      <Route path="/scaffolds/rewards/{id}" page={ScaffoldsRewardPage} name="scaffoldsReward" />
      <Route path="/scaffolds/rewards" page={ScaffoldsRewardsPage} name="scaffoldsRewards" />
      <Route path="/scaffolds/redeemeds/new" page={ScaffoldsNewRedeemedPage} name="scaffoldsNewRedeemed" />
      <Route path="/scaffolds/redeemeds/{id}/edit" page={ScaffoldsEditRedeemedPage} name="scaffoldsEditRedeemed" />
      <Route path="/scaffolds/redeemeds/{id}" page={ScaffoldsRedeemedPage} name="scaffoldsRedeemed" />
      <Route path="/scaffolds/redeemeds" page={ScaffoldsRedeemedsPage} name="scaffoldsRedeemeds" />
      <Route path="/scaffolds/behaviors/new" page={ScaffoldsNewBehaviorPage} name="scaffoldsNewBehavior" />
      <Route path="/scaffolds/behaviors/{id}/edit" page={ScaffoldsEditBehaviorPage} name="scaffoldsEditBehavior" />
      <Route path="/scaffolds/behaviors/{id}" page={ScaffoldsBehaviorPage} name="scaffoldsBehavior" />
      <Route path="/scaffolds/behaviors" page={ScaffoldsBehaviorsPage} name="scaffoldsBehaviors" />
      <Route path="/scaffolds/feedbacks/new" page={ScaffoldsNewFeedbackPage} name="scaffoldsNewFeedback" />
      <Route path="/scaffolds/feedbacks/{id}/edit" page={ScaffoldsEditFeedbackPage} name="scaffoldsEditFeedback" />
      <Route path="/scaffolds/feedbacks/{id}" page={ScaffoldsFeedbackPage} name="scaffoldsFeedback" />
      <Route path="/scaffolds/feedbacks" page={ScaffoldsFeedbacksPage} name="scaffoldsFeedbacks" />
      <Route path="/scaffolds/user-roles/new" page={ScaffoldsNewUserRolePage} name="scaffoldsNewUserRole" />
      <Route path="/scaffolds/user-roles/{id}/edit" page={ScaffoldsEditUserRolePage} name="scaffoldsEditUserRole" />
      <Route path="/scaffolds/user-roles/{id}" page={ScaffoldsUserRolePage} name="scaffoldsUserRole" />
      <Route path="/scaffolds/user-roles" page={ScaffoldsUserRolesPage} name="scaffoldsUserRoles" />
      <Route path="/scaffolds/users/new" page={ScaffoldsNewUserPage} name="scaffoldsNewUser" />
      <Route path="/scaffolds/users/{id}/edit" page={ScaffoldsEditUserPage} name="scaffoldsEditUser" />
      <Route path="/scaffolds/users/{id}" page={ScaffoldsUserPage} name="scaffoldsUser" />
      <Route path="/scaffolds/users" page={ScaffoldsUsersPage} name="scaffoldsUsers" />
      <Route path="/teacher-home" page={TeacherHomePage} name="teacherHome" />
      <Route path="/student-home" page={StudentHomePage} name="studentHome" />
      <Route path="/" page={WelcomePage} name="welcome" />
      <Private unauthenticated="public">
        <Route path="/protected" page={ProtectedPage} name="protected" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
