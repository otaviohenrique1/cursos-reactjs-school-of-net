import Cards from "./../components/inside/Cards";
import Forms from "./../components/inside/Forms";
import Charts from "./../components/inside/Charts";
import Dashboard from "./../components/inside/Dashboard";
import DataTables from "./../components/inside/DataTables";

const LoadingRoutes = () => ([
    {
        path: "/dashboard",
        name: "Dashboard",
        template: Dashboard
    },
    {
        path: "/cards",
        name: "Cards",
        template: Cards
    },
    {
        path: "/forms",
        name: "Forms",
        template: Forms
    },
    {
        path: "/charts",
        name: "Charts",
        template: Charts
    },
    {
        path: "/datatable",
        name: "DataTable",
        template: DataTables
    }
]);

export default LoadingRoutes();