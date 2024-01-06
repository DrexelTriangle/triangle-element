export const PollsWidget = (_props: {}) => {
    return (
        <div className="sidebar-item widget_polls-widget">
            <div className="sidebar-title">Weekly Poll</div>
            <div className="wp-polls"></div>
            <h1>Lorem ipsum dolor sit amet?</h1>

            <div className="wp-polls-ans">
                <ul className="wp-polls-ul">
                    <li><strong>Consectetur <small>(40%)</small></strong>
                        <div className="pollbar" style = {{"width": "40%"}} title="Saxbys (40%)"></div>
                    </li>
                    <li>Adipiscing elit <small>(31%)</small>
                        <div className="pollbar" style = {{"width": "31%"}} title="Board and Brew (31%)"></div>
                    </li>
                    <li>Sed do eiusmod <small>(12%)</small>
                        <div className="pollbar" style = {{"width": "12%"}} title="Green Line Cafe (12%)"></div>
                    </li>
                    <li>Tempor incididunt <small>(10%)</small>
                        <div className="pollbar" style = {{"width": "10%"}} title="You Have Voted For This Choice - Greek From Greece (10%)"></div>
                    </li>
                    <li>Labore dolore <small>(4%)</small>
                        <div className="pollbar" style = {{"width": "4%"}} title="Elixir (4%)"></div>
                    </li>
                    <li>Magna aliqua <small>(4%)</small>
                        <div className="pollbar" style = {{"width": "4%"}} title="Arterial Coffee (4%)"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}