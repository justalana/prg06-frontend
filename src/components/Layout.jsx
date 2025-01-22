import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <header>
                <nav className="flex justify-center">
                    <Link to={`/`} className="m-5">Home</Link>
                    <Link to={`/create`} className="m-5">Add New Book</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;