import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import layoutWrapper from '../hoc/layoutWrapper';
import LandingPage from '../components/landingPage';
import CandidatesList from '../components/candidatesList';
import Client from '../applications/client';
import Court from '../components/Court/court';
import Notfound from '../components/notfound';
import EmployeeKRA from '../components/employeeKRA';
import EmployeeAchievement from '../components/empAchievement/EmployeeAchievement';
import ResponsiveDrawer from '../playground/ResponsiveDrawer';
import EmployeeAddPayroll from '../components/empAddPayroll/EmployeeAddPayroll';
import EmployeeLeaveApproval from '../components/empLeaveApproval/EmployeeLeaveApproval';
import EmployeePayrollView from '../components/empPayrollView/EmployeePayrollView';
import Employeeapprisal from '../components/employeeapprisal';
import Interviewtable from '../components/interviewtable/interviewtable';
import Onlinetest from '../components/onlinetest/onlinetest';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={layoutWrapper(LandingPage)} exact/>
            
            <Route path="/candidateslist" component={layoutWrapper(CandidatesList)} exact />

            <Route path="/employeekra" component={layoutWrapper(EmployeeKRA)} exact />

            <Route path="/employeeachievement" component={layoutWrapper(EmployeeAchievement)} exact />

            <Route path="/employeeaddpayroll" component={layoutWrapper(EmployeeAddPayroll)} exact />

            <Route path="/employeeleaveapproval" component={layoutWrapper(EmployeeLeaveApproval)} exact />

            <Route path="/employeepayrollview" component={layoutWrapper(EmployeePayrollView)} exact />

            <Route path="/client" component={layoutWrapper(Client)} exact />

            <Route path="/court" component={layoutWrapper(Court)} exact />

            <Route path="/employeeapprisal" component={layoutWrapper(Employeeapprisal)} exact />

            <Route path="/interview" component={layoutWrapper(Interviewtable)} exact />

            <Route path="/onlinetest" component={layoutWrapper(Onlinetest)} exact />

            <Route path="/responsive" component={ResponsiveDrawer} exact />

            <Route component={Notfound} />

        </Switch>
    </BrowserRouter>
);

export default AppRouter;