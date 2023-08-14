import React from 'react';
import Layout from "../../layout/layout";

function Index(props) {
    return (
        <>

        </>
    );
}

export default Index;
Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}