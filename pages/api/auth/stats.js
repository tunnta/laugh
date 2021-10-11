import{withPageAuthRequired}from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function ProtectedRoute(req, res){

const session = getSession(req,res);

const user = session.user;

});