/* eslint-disable jsx-a11y/aria-role */
// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router pageLoadingDelay={500}>
      <Route path="/" page={WelcomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/choose-role" page={ChooseRolePage} name="chooseRole" />
      <Private unauthenticated="home" role="teacher">
        <Route path="/teacher" page={TeacherHomePage} name="teacherHome" />
        <Route path="/teacher/groups/{groupId}" page={GroupPage} name="groupList" />
        <Route path="/teacher/enrolled" page={AllEnrolledPage} name="allEnrolled" />
        <Route path="/teacher/enrolled/{userId}" page={StudentPage} name="student" />
      </Private>
      <Private unauthenticated="home" role={['student', 'super_admin']}>
        <Route path="/student" page={StudentHomePage} name="studentHome" />
        <Route path="/student/group/{groupId}" page={StudentGroupPage} name="studentGroup" />
      </Private>
      <Private unauthenticated="home" role="teacher">
        <Set wrap={[DashboardLayout]}>
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/scaffolds/enrollments/new" page={ScaffoldsNewEnrollmentPage} name="scaffoldsNewEnrollment" />
          <Route path="/scaffolds/enrollments/{id}/edit" page={ScaffoldsEditEnrollmentPage} name="scaffoldsEditEnrollment" />
          <Route path="/scaffolds/enrollments/{id}" page={ScaffoldsEnrollmentPage} name="scaffoldsEnrollment" />
          <Route path="/scaffolds/enrollments" page={ScaffoldsEnrollmentsPage} name="scaffoldsEnrollments" />
          <Route path="/scaffolds/groups/new" page={ScaffoldsNewGroupPage} name="scaffoldsNewGroup" />
          <Route path="/scaffolds/groups/{id}/edit" page={ScaffoldsEditGroupPage} name="scaffoldsEditGroup" />
          <Route path="/scaffolds/groups/{id}" page={ScaffoldsGroupPage} name="scaffoldsGroup" />
          <Route path="/scaffolds/groups" page={ScaffoldsGroupsPage} name="scaffoldsGroups" />
          <Route path="/scaffolds/users/new" page={ScaffoldsNewUserPage} name="scaffoldsNewUser" />
          <Route path="/scaffolds/users/{id}/edit" page={ScaffoldsEditUserPage} name="scaffoldsEditUser" />
          <Route path="/scaffolds/users/{id}" page={ScaffoldsUserPage} name="scaffoldsUser" />
          <Route path="/scaffolds/users" page={ScaffoldsUsersPage} name="scaffoldsUsers" />
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
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
