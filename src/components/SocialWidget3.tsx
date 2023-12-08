export const SocialWidget3 = (_props: {}) => {
    return (
    <div id="tx_social_widget-3" className="sidebar-item widget_tx_social_widget">
        <div className="sidebar-title">Follow us</div>
            <ul className="social-links">
                <li className="social-item">
                    <i className="fa fa-facebook" style={{"color": "#3b5998"}}></i>
                    <a href="https://www.facebook.com/drexel.triangle/" target="_blank">Drexel Triangle</a>
                </li>
                <li className="social-item">
                    <i className="fa fa-twitter" style={{"color": "#00acee"}}></i>
                    <a href="https://twitter.com/drexeltriangle" target="_blank">@DrexelTriangle</a>
                </li>
                <li className="social-item">
                    <i className="fa fa-instagram text-instagram"></i>
                    <a href="https://www.instagram.com/drexeltriangle/" target="_blank">@drexeltriangle</a>
                </li>
                <li className="social-item">
                    <i className="fa fa-youtube-play" style={{"color": "#e52d27"}}></i>
                    <a href="https://www.youtube.com/user/DrexelTriangle" target="_blank">DrexelTriangle</a>
                </li>
            </ul>
        </div>
    );
}