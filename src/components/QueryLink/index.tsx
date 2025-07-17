import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QueryLink({ to, ...props }: any) {

    // eslint-disable-next-line prefer-const
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />

}
