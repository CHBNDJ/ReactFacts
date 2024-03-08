import './style.css';

function Content() {
    return (
        <main className="mainstyle">
            <h2 className="maintitle">Fun facts about React</h2>
            <ul className="mainlist">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including <br />
                    mobile apps
                </li>
            </ul>
        </main>
    );
}

export default Content;
