import { Component } from 'react';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import '../utils/css/utils.css';
import DIContainer from '../services/DIContainer';
import User from '../services/model/User';
import { Navigate } from 'react-router-dom';

export class Portal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this._getUser(),
        };
    }

    render() {
        return (
            <div>
                {!this.state.user && <Navigate replace={true} to="/" />}
                {this.state.user && (
                    <div style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
                        <TopNavigation
                            identity={{
                                href: '/portal',
                                title: 'Green Readings',
                                logo: {
                                    src: '/leaf.png',
                                    alt: 'Logo',
                                },
                            }}
                            utilities={[
                                {
                                    type: 'menu-dropdown',
                                    text: this.state.user.username,
                                    description: this.state.user.email,
                                    iconName: 'user-profile',
                                    items: [
                                        { id: 'preferences', text: 'Preferences' },
                                        { id: 'signout', text: 'Sign out' },
                                    ],
                                },
                            ]}
                            i18nStrings={{
                                searchIconAriaLabel: 'Search',
                                searchDismissIconAriaLabel: 'Close search',
                                overflowMenuTriggerText: 'More',
                                overflowMenuTitleText: 'All',
                                overflowMenuBackIconAriaLabel: 'Back',
                                overflowMenuDismissIconAriaLabel: 'Close menu',
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }

    _getUser() {
        const user = DIContainer.getUserService().getUser();

        if (user instanceof User) {
            return user;
        }
    }
}
