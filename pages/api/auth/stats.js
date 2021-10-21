import{withPageAuthRequired}from '@auth0/nextjs-auth0';

function ProtectedRoute(req, res){

const session = getSession(req,res);

const user = session.user;

};

export default withPageAuthRequired(ProtectedRoute);