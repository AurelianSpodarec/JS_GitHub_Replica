
export default class Layout {
    constructor() {
        this.layout = document.getElementById('app');
    }

    clearLayout() {
        this.layout.innerHTML = "";
    }

    displayLayout() {
        this.layout.innerHTML = `
            <div class="main-wrapper">
            
            <div class="settings-widget"><i class="fas fa-cog"></i></div>

            <aside class="main-sidebar" data-color="charade" data-image="background-image: url(https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/sidebar-3.34535b95.jpg);">
            <div class="main-sidebar__inner">

                <!-- <div class="main-sidebar__background" style="background-image: url(https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/sidebar-3.34535b95.jpg);"></div> -->

                <!-- <div class="main-sidebar__header">
                </div> -->

                <div class="main-sidebar__logo-brand">
                    <div class="main-sidebar__logo">
                        <i class="fas fa-fire"></i>
                        <span class="main-sidebar__logo-text">Hobo</span>
                    </div>

                    <button class="main-sidebar__toggle-sidebar"><i class="fas fa-bars"></i></button>
                </div>

                <div class="main-sidebar__wrapper">

                <ul class="nav-main">
                    <li class="nav-group-heading">
                        <span>Applications</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="nav-link-icon fas fa-rocket"></i>
                            <span class="nav-link-title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="nav-link-icon far fa-calendar-check"></i>
                            <span class="nav-link-title">To-Do</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="nav-link-icon fas fa-calendar"></i>
                            <span class="nav-link-title">Calendar</span>
                        </a>
                    </li>
                    <li class="nav-group-heading">
                        <span>Connected APIs</span>
                    </li>
                    <li class="nav-item nav-item-mother open">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fab fa-github"></i>
                            <span class="nav-link-title">GitHub</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link active" href=""><span class="nav-link-title">My Profile</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Stats</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Search User</span></a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-mother open">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fab fa-twitter"></i>
                            <span class="nav-link-title">Twitter</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href=""><span class="nav-link-title">My Profile</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Get tweets</span></a></li>
                        </ul>
                    </li>
                    <li class="nav-group-heading">
                        <span>Develop</span>
                    </li>
                    <li class="nav-item nav-item-mother open">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fab fa-uikit"></i>
                            <span class="nav-link-title">UI Elements</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href=""><span class="nav-link-title">Typography</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Buttons</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Forms</span></a></li>
                        </ul>
                    </li>
                    <li class="nav-group-heading">
                        <span>Custom Functions</span>
                    </li>
                    <li class="nav-item nav-item-mother open">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fas fa-cogs"></i>
                            <span class="nav-link-title">Settings</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href=""><span class="nav-link-title">General</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Theme</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>            
            </aside>


            <main class="main-panel">
                <header class="main-header">
                    <div class="main-header__left">
                        SAVINGS
                    </div>

                    <div class="main-header__right">
                        <div class="main-header__item">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="main-header__item">
                            <img class="main-header__user-avatar" alt="@AurelianSpodarec" src="https://avatars0.githubusercontent.com/u/10155855?s=40&amp;v=4">
                            <span class="main-header__user-name">Aurelian Spodarec</span>
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </div>
                </header>
                <div class="main-container">
                    sd<br><br><br><br>dsdsdsdds
                </div>
                <footer class="main-footer">
                    
                
                    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
                        <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>


                    <div>
                        © 2019 made with  by Binar Code & Creative Tim for a better web.
                    </div>

                </footer>
            </main>
        </div>
        `;
    }
}

