class applicant extends React.Component{

    async static getInitialProps(ctx){
        var projectId = ctx.url.query.project;
        var applicantId = ctx.url.query.id ;
    }

}