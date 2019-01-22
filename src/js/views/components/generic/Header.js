import Component from "../../../lib/core/Component";

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const view = /*html*/`
        <div class="main-header__outer">
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
        </div>
        `
        return view;
        
    }
}

export default Header;